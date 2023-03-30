export class Point3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getDistance(p) {
        let px = this.x - p.x;
        let py = this.y - p.y;
        let pz = this.z - p.z;

        return Math.sqrt(px*px + py*py + pz*pz);
    }

    equal(p) {
        return this.x == p.x && this.y == p.y && this.z == p.z;
    }
}