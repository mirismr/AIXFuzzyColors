import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Point3D } from './point3d.js';

export class SphericalFuzzyColor {
    constructor(center, a, b) {
        this.center = center;
        this.a = a;
        this.b = b;
    }

    getMembershipDegree(point) {
        let d = this.center.getDistance(point);
        //If a != b straight line with its slope; else, step function
        let f = this.a != this.b ? (this.b - d) / (this.b - this.a) : (d <= this.b ? 1.0 : 0.0);
        let output =  Math.max(Math.min(1.0, f), 0.0);
        return output;
    }
}

export class FuzzyColorSpace {
    constructor(html_element, canvas_style) {
        this.initializeScene(html_element, canvas_style);
        this.granularFuzzyColors = {}
        this.sphericalFuzzyColors = {}
    }

    initializeScene(html_element_id, canvas_style) {
        let html_element = $(html_element_id);
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);
        
        let canvas_str = `<canvas id=\"${html_element_id.replace('#', '')}\" style="${canvas_style}"></canvas>`
        let parent = html_element.parent();
        html_element.remove();
        parent.prepend(canvas_str);

        let hmtl_element_qs = document.querySelector(html_element_id);
        html_element = $(html_element_id);


        this.renderer = new THREE.WebGLRenderer({canvas: hmtl_element_qs});
        this.renderer.localClippingEnabled = true;
        this.renderer.setSize(html_element.width(), html_element.width()/1.8);
        
        html_element.append( this.renderer.domElement );

        this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 10000);
        this.camera.position.set(500, 400, 750);

        let geometry = new THREE.BoxGeometry(256, 256, 256);
        let edges = new THREE.EdgesGeometry(geometry);
        let material = new THREE.LineBasicMaterial({color : 0x000000});
        let cube = new THREE.LineSegments(edges, material);
        cube.position.x = 128;
        cube.position.y = 128;
        cube.position.z = 128;
        this.scene.add(cube);
        
        let obj = this;
        let controls = new OrbitControls(this.camera, this.renderer.domElement, this.scene);
        controls.addEventListener('change', function () {
            obj.renderer.render( obj.scene, obj.camera );
        });

        //controls.update() must be called after any manual changes to the camera's transform
        controls.target.set(128, 128, 128);
        controls.update();
        this.renderer.render(this.scene, this.camera);

        // const axesHelper = new THREE.AxesHelper( 1000 );
        // this.scene.add( axesHelper );
    }

    addPoint2Evaluate(r, g, b) {
        // Cube planes for clipping:
        const cube_planes = [
            new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
            new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
            new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
            new THREE.Plane(new THREE.Vector3(-1, 0, 0), 256),
            new THREE.Plane(new THREE.Vector3(0, -1, 0), 256),
            new THREE.Plane(new THREE.Vector3(0, 0, -1), 256),
        ];
        
        let p2e_material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(`rgb(0, 0, 0)`),
            clippingPlanes : cube_planes,
            clipIntersection: false,
        });
        let p2e = new THREE.Mesh( new THREE.TetrahedronGeometry(5, 0), p2e_material );
        p2e.position.x = r;
        p2e.position.y = g;
        p2e.position.z = b;
        this.scene.add( p2e );

        this.renderer.render(this.scene, this.camera);
    }

    addSphericalColor({r, g, b, kernel_radius=15, support_radius=30, is_core_visible=true, is_support_visible=true}) {
        // Cube planes for clipping:
        const cube_planes = [
            new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
            new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
            new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
            new THREE.Plane(new THREE.Vector3(-1, 0, 0), 256),
            new THREE.Plane(new THREE.Vector3(0, -1, 0), 256),
            new THREE.Plane(new THREE.Vector3(0, 0, -1), 256),
        ];
        
        let prototype_material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(`rgb(${r}, ${g}, ${b})`),
            clippingPlanes : cube_planes,
            clipIntersection: false,
        });
        let material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(`rgb(${r}, ${g}, ${b})`),
            transparent: true,
            opacity: 0.3,
            clipIntersection: false,
            clippingPlanes : cube_planes
        });


        let prototype = new THREE.Mesh( new THREE.SphereGeometry( 5, 32, 32 ), prototype_material );
        prototype.position.x = r;
        prototype.position.y = g;
        prototype.position.z = b;
        this.scene.add( prototype );

        if (is_core_visible) {
            let kernel = new THREE.Mesh( new THREE.SphereGeometry( kernel_radius, 32, 32 ), material );
            kernel.position.x = r;
            kernel.position.y = g;
            kernel.position.z = b;
            this.scene.add( kernel );
        }

        if (is_support_visible) {
            let support = new THREE.Mesh( new THREE.SphereGeometry( support_radius, 32, 32 ), material );
            support.position.x = r;
            support.position.y = g;
            support.position.z = b;
            this.scene.add( support );
        }
        this.renderer.render(this.scene, this.camera);

        return new SphericalFuzzyColor(new Point3D(r, g, b), kernel_radius, support_radius);
    }

    addGranularSphericalColor({positives, negatives, kernel_factor=0.5, support_factor=1, is_core_visible=true, is_support_visible=true}) {
        let min, dist, a, b; 
        let granularFuzzyColor = [];
        // Both the kernel factor (alpha) and the support factor (beta) must 
        // be between 0 and 1 and satisfying alpha<beta 
        if (kernel_factor  < 0.0  || kernel_factor  >= 1.0 || 
            support_factor <= 0.0 || support_factor > 1.0 ||
            kernel_factor >= support_factor )  {
            throw new InvalidParameterException("The kernel factor (alpha) "
                    + "and the support factor (beta) must be between 0 and 1 "
                    + "and satisfying alpha<beta ");
        }
        // For each positive prototype, the nearest point in the set of 
        // negative prototypes is calculated. Then, both the kernel and 
        // support radius are calculated by weighted that distance by the 
        // corrresponding factor. 
        for (const ep of positives) {
            min = 256**3;
            for (const eq of negatives) {
                dist = ep.getDistance(eq);
                if (dist < min && dist!=0) {// dist==0 means that a negative 
                    min = dist;             // prototype is also a positive one; 
                }                           // It should not happen, but we check
            }
            a = min * kernel_factor;
            b = min * support_factor;
            // We create the spherical fuzzy color using the parameters
            this.addSphericalColor({r:ep.x, g:ep.y, b:ep.z, kernel_radius:a, support_radius:b, is_core_visible:is_core_visible, is_support_visible:is_support_visible});
            granularFuzzyColor.push(new SphericalFuzzyColor(ep, a, b));
        }

        return granularFuzzyColor;
    }

    buildGranularSphericalFuzzyColorSpace(prototypes_positives_negatives, visible_colors) {
        for (const pair of prototypes_positives_negatives) {
            if (visible_colors.includes(pair[0])){
                let gfc = this.addGranularSphericalColor({positives:pair[1], negatives:pair[2]});
                this.granularFuzzyColors[pair[0]] = gfc;
            }
        }
    }

    buildSphericalFuzzyColorSpaceWithLabels(prototypes, visible_colors, kernel_factor = 0.5) {
        kernel_factor /= 2.0;

        let min = 256**3;
        let dist = -1;
        let selected_point = null;
        let kernel_radius = [];

        for (const item1 of prototypes) { 
            let label = item1[0];
            let p1 = item1[1];
            min = 256**3;
            selected_point = p1;
            for (const item2 of prototypes) { 
                let p2 = item2[1];
                if (!p1.equal(p2)){
                    dist = selected_point.getDistance(p2);
                    if (dist<min) {
                        min = dist;
                    }
                }
            }
            kernel_radius.push(min*kernel_factor);
        }

        let index_p1 = 0;
        let index_p2 = 0;
        let a = -1;
        let b = -1;
        
        for (const item1 of prototypes) {
            let label = item1[0];
            let p1 = item1[1];
            selected_point = p1;
            a = kernel_radius[index_p1];
            b = 256**3;
            index_p2 = 0;
            for (const item2 of prototypes) {
                let p2 = item2[1];
                if (!p1.equal(p2)){
                    dist = p1.getDistance(p2)-kernel_radius[index_p2];
                    if (dist<b) {
                        b = dist;
                    }
                }
                index_p2++;
            }
            
            if (visible_colors.includes(label)){
                let fc = this.addSphericalColor({r:p1.x, g:p1.y, b:p1.z, kernel_radius:a, support_radius:b});
                this.sphericalFuzzyColors[label] = fc;
            }
            index_p1++;
        }
    }


    buildSphericalFuzzyColorSpace(prototypes, kernel_factor = 0.5) {
        kernel_factor /= 2.0;

        let min = 256**3;
        let dist = -1;
        let selected_point = null;
        let kernel_radius = [];

        for (const p1 of prototypes) { 
            min = 256**3;
            selected_point = p1;
            for (const p2 of prototypes) { 
                if (!p1.equal(p2)){
                    dist = selected_point.getDistance(p2);
                    if (dist<min) {
                        min = dist;
                    }
                }
            }
            kernel_radius.push(min*kernel_factor);
        }

        let index_p1 = 0;
        let index_p2 = 0;
        let a = -1;
        let b = -1;
        
        for (const p1 of prototypes) {
            selected_point = p1;
            a = kernel_radius[index_p1];
            b = 256**3;
            index_p2 = 0;
            for (const p2 of prototypes) {
                if (!p1.equal(p2)){
                    dist = p1.getDistance(p2)-kernel_radius[index_p2];
                    if (dist<b) {
                        b = dist;
                    }
                }
                index_p2++;
            }
            
            this.addSphericalColor({r:p1.x, g:p1.y, b:p1.z, kernel_radius:a, support_radius:b});
            index_p1++;
        }

    }

    mapImage(color, image, colors) {
        let mappingMatrix = [];
        if(color.length == 1){
            let selectedGfc = colors[color];

            if (!Array.isArray(selectedGfc)){
                selectedGfc = [selectedGfc];
            }

            for(const pixel of image) {
                let membershipDegrees = [];
                for(const fc of selectedGfc) {
                    membershipDegrees.push(fc.getMembershipDegree(pixel));
                }
                mappingMatrix.push(Math.max(...membershipDegrees));
            }
        }
        return mappingMatrix;
    }
}