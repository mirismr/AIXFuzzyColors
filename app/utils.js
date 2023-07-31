import {Point3D} from "./point3d.js";
import {FuzzyColorSpace, SphericalFuzzyColor} from "./fuzzycolorspace.js";

export function getISCCBasicPrototypes(){
    return [ 
        new Point3D(254.0, 181.0, 186.0),
        new Point3D(190.0, 1.0, 50.0),
        new Point3D(243.0, 132.0, 1.0),
        new Point3D(128.0, 70.0, 27.0),
        new Point3D(243.0, 195.0, 1.0),
        new Point3D(102.0, 93.0, 30.0),
        new Point3D(141.0, 182.0, 1.0),
        new Point3D(1.0, 136.0, 86.0),
        new Point3D(62, 97.0, 180.0),// new Point3D(1.0, 103.0, 194.0),
        new Point3D(154.0, 78.0, 174.0),
        new Point3D(252.0, 252.0, 249.0),
        new Point3D(135.0, 134.0, 134.0),
        new Point3D(7.0, 7.0, 7.0)
    ]
}

export function getISCCBasicPrototypesWithLabels() {
    return [
    [
        "Pink",
        new Point3D(254.0, 181.0, 186.0),
    ],
    [
        "Red",
        new Point3D(190.0, 1.0, 50.0),
    ],
    [
        "Orange",
        new Point3D(243.0, 132.0, 1.0),
    ],
    [
        "Brown",
        new Point3D(128.0, 70.0, 27.0),
    ],
    [
        "Yellow",
        new Point3D(243.0, 195.0, 1.0),
    ],
    [
        "Olive",
        new Point3D(102.0, 93.0, 30.0),
    ],
    [
        "Yellow-Green",
        new Point3D(141.0, 182.0, 1.0),
    ],
    [
        "Green",
        new Point3D(1.0, 136.0, 86.0),
    ],
    [
        "Blue",
        new Point3D(62, 97.0, 180.0),
    ],
    [
        "Purple",
        new Point3D(154.0, 78.0, 174.0),
    ],
    [
        "White",
        new Point3D(252.0, 252.0, 249.0),
    ],
    [
        "Gray",
        new Point3D(135.0, 134.0, 134.0),
    ],
    [
        "Black",
        new Point3D(7.0, 7.0, 7.0)
    ]
    ];
}

export function getGranularPrototypes() {
    return [
        [
            "Pink",
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215)
            ],
            [
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50),
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43),
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171),
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30),
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91),
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25),
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161),
                new Point3D(250, 250, 250),
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103),
                new Point3D(7, 7, 7)
            ]
        ],
        [
            "Red",
            [
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50)
            ],
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215),
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43),
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171),
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30),
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91),
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25),
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161),
                new Point3D(250, 250, 250),
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103),
                new Point3D(7, 7, 7)
            ]
        ],
        [
            "Brown",
            [
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43)
            ],
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215),
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50),
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171),
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30),
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91),
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25),
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161),
                new Point3D(250, 250, 250),
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103),
                new Point3D(7, 7, 7)
            ]
        ],
        [
            "Yellow",
            [
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171)
            ],
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215),
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50),
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43),
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30),
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91),
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25),
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161),
                new Point3D(250, 250, 250),
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103),
                new Point3D(7, 7, 7)
            ]
        ],
        [
            "Olive",
            [
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30)
            ],
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215),
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50),
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43),
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171),
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91),
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25),
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161),
                new Point3D(250, 250, 250),
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103),
                new Point3D(7, 7, 7)
            ]
        ],
        [
            "Yellow-Green",
            [
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91)
            ],
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215),
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50),
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43),
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171),
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30),
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25),
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161),
                new Point3D(250, 250, 250),
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103),
                new Point3D(7, 7, 7)
            ]
        ],
        [
            "Green",
            [
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25)
            ],
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215),
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50),
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43),
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171),
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30),
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91),
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161),
                new Point3D(250, 250, 250),
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103),
                new Point3D(7, 7, 7)
            ]
        ],
        [
            "Blue",
            [
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161)
            ],
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215),
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50),
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43),
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171),
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30),
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91),
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25),
                new Point3D(250, 250, 250),
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103),
                new Point3D(7, 7, 7)
            ]
        ],
        [
            "White",
            [
                new Point3D(250, 250, 250)
            ],
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215),
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50),
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43),
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171),
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30),
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91),
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25),
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161),
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103),
                new Point3D(7, 7, 7)
            ]
        ],
        [
            "Gray",
            [
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103)
            ],
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215),
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50),
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43),
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171),
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30),
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91),
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25),
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161),
                new Point3D(250, 250, 250),
                new Point3D(7, 7, 7)
            ]
        ],
        [
            "Black",
            [
                new Point3D(7, 7, 7)
            ],
            [
                new Point3D(254, 181, 186),
                new Point3D(234, 147, 153),
                new Point3D(228, 113, 122),
                new Point3D(249, 204, 202),
                new Point3D(222, 165, 164),
                new Point3D(234, 216, 215),
                new Point3D(181, 20, 38),
                new Point3D(235, 77, 95),
                new Point3D(201, 38, 57),
                new Point3D(145, 12, 25),
                new Point3D(190, 1, 50),
                new Point3D(74, 52, 45),
                new Point3D(121, 58, 28),
                new Point3D(203, 132, 88),
                new Point3D(75, 36, 29),
                new Point3D(155, 84, 43),
                new Point3D(230, 230, 25),
                new Point3D(212, 175, 55),
                new Point3D(175, 141, 19),
                new Point3D(248, 222, 126),
                new Point3D(201, 174, 93),
                new Point3D(243, 229, 171),
                new Point3D(134, 126, 54),
                new Point3D(102, 93, 30),
                new Point3D(141, 182, 1),
                new Point3D(189, 218, 87),
                new Point3D(138, 154, 91),
                new Point3D(1, 136, 86),
                new Point3D(62, 180, 137),
                new Point3D(106, 171, 142),
                new Point3D(59, 120, 97),
                new Point3D(25, 230, 25),
                new Point3D(25, 25, 230),
                new Point3D(73, 151, 208),
                new Point3D(1, 103, 165),
                new Point3D(1, 65, 106),
                new Point3D(67, 107, 149),
                new Point3D(1, 133, 161),
                new Point3D(250, 250, 250),
                new Point3D(153, 153, 153),
                new Point3D(128, 128, 128),
                new Point3D(103, 103, 103)
            ]
        ]
    ]
}

export function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}  
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function resetSimple() {
    let fcs_support = new FuzzyColorSpace('#simple-main-support', "flex-grow:5;");
    fcs_support.addSphericalColor({r:154.0, g:78.0, b:174.0});
    fcs_support.addPoint2Evaluate(205, 152, 221);

    $("#simple-picker").val("#9A4EAE")
    $("#a-parameter").val(15)
    $("#b-parameter").val(30)

    $("#simple-point-to-evaluate").val("#CD98DD")
    $("#simple-distance").text(101.42)
    $("#simple-md").text(0.0)

    let simple_picker = document.querySelector('#simple-picker');
    simple_picker.addEventListener("change", simpleParametersChange, false);

    let a_parameter = document.querySelector('#a-parameter');
    a_parameter.addEventListener("change", simpleParametersChange, false);

    let b_parameter = document.querySelector('#b-parameter');
    b_parameter.addEventListener("change", simpleParametersChange, false);

    let picker2evaluate = document.querySelector('#simple-point-to-evaluate');
    picker2evaluate.addEventListener("change", simpleParametersChange, false);
}

export function addGranularFromPicker(event) {
    let div_text = $("#granular-selected-prototypes").text().replace(/\s/g, '');
    if (div_text == "Prototypeswillbeappearhere"){
        $("#granular-selected-prototypes").text("");
    }
    let new_color = `<div style=\"margin-left: 3px; height: 20px; width: 20px; border: 1px black solid; background-color: ${event.target.value}\" value=\"${event.target.value}\"></div>`;
    $("#granular-selected-prototypes").append(new_color);
}

function drawIsolatedPrototype(rgb, rgb_p2e, a_parameter, b_parameter, fcs_support){
    fcs_support.addSphericalColor({r:rgb.r, g:rgb.g, b:rgb.b, kernel_radius:a_parameter, support_radius:b_parameter,});
    fcs_support.addPoint2Evaluate(rgb_p2e.r,rgb_p2e.g, rgb_p2e.b);
}

export function simpleParametersChange(event) {
    let rgb_p2e = hexToRgb($("#simple-point-to-evaluate").val());
    let p2e = new Point3D(rgb_p2e.r, rgb_p2e.g, rgb_p2e.b);
    let membership_degree = "";
    let distance = "";

    let rgb = hexToRgb($("#simple-picker").val());
    let prototype = new Point3D(rgb.r, rgb.g, rgb.b);
    let a_parameter = parseFloat($("#a-parameter").val());
    let b_parameter = parseFloat($("#b-parameter").val());

    let fcs_support = new FuzzyColorSpace('#simple-main-support', "flex-grow:5;");

    if (a_parameter <= b_parameter){
        drawIsolatedPrototype(rgb, rgb_p2e, a_parameter, b_parameter, fcs_support);
        let fc = new SphericalFuzzyColor(prototype, a_parameter, b_parameter);
        membership_degree = fc.getMembershipDegree(p2e);
        distance = prototype.getDistance(p2e);
        showParameterError("#simple-parameter-error", "");
    }
    else {
        showParameterError("#simple-parameter-error", "a > b is not allowed");
    }


    $("#simple-distance").text(distance.toFixed(2));
    $("#simple-md").text(membership_degree.toFixed(2));
}

export function showParameterError(html_element, text_to_write) {
    $(html_element).text(text_to_write);
}

export function openModalFCS() {
    var modal = document.getElementById("modal-fcs");
    modal.style.display = "block";

    $("#fuzzycolor-intro-selected-prototypes-modal").text("Prototypes will be appear here");
}

export function buildFCS() {
    let prototypes = []
    let rgb;
    $("#fuzzycolor-intro-selected-prototypes-modal").children().each(function(i) {
        rgb = hexToRgb($(this).attr("value"));
        prototypes.push( new Point3D(rgb.r, rgb.g, rgb.b));
    });

    if (prototypes.length >= 2){
        document.querySelector("#intro-clean-prototypes").disabled = false;
        $("#fuzzycolor-intro-selected-prototypes").empty();

        $("#fuzzycolor-intro-selected-prototypes-modal").children().each(function(i) {
            rgb = hexToRgb($(this).attr("value"));
            addPrototypeToList("#fuzzycolor-intro-selected-prototypes", rgb.r, rgb.g, rgb.b);
        });
        
        let fcs = new FuzzyColorSpace('#fuzzycolor-intro-main', "flex-grow:1; margin: auto auto 10px;");
        fcs.buildSphericalFuzzyColorSpace(prototypes);
    
        let modal = document.getElementById("modal-fcs");
        modal.style.display = "none";
        $("#error-less-prototypes").text("")
    }
    else {
        $("#error-less-prototypes").text("At least two prototypes should be selected to build a fuzzy color space")
    }    
}

export function addPrototypeColorFromPicker(event) {
    let div_text = $("#fuzzycolor-intro-selected-prototypes-modal").text().replace(/\s/g, '');
    if (div_text == "Prototypeswillbeappearhere"){
        $("#fuzzycolor-intro-selected-prototypes-modal").text("");
    }
    
    let rgb = hexToRgb(event.target.value);
    addPrototypeToList("#fuzzycolor-intro-selected-prototypes-modal", rgb.r, rgb.g, rgb.b);
}

function addPrototypeToList(html_list_id, r, g, b) {
    let hexadecimal = rgbToHex(r, g, b);

    let new_color = `<div style=\"margin-left: 3px; margin-bottom: 2px; height: 20px; width: 20px; border: 1px black solid; background-color: rgb(${r}, ${g}, ${b})\" value=\"${hexadecimal}\"></div>`;
    $(html_list_id).append(new_color);
}

export function resetToDefaultFCS(){
    document.querySelector("#intro-clean-prototypes").disabled = true;

    let basic_prototypes = getISCCBasicPrototypes();
    $("#fuzzycolor-intro-selected-prototypes").empty();

    for (let i = 0; i < basic_prototypes.length; i += 1) {
        addPrototypeToList("#fuzzycolor-intro-selected-prototypes", basic_prototypes[i].x, basic_prototypes[i].y, basic_prototypes[i].z);
    }
    
    let fcs = new FuzzyColorSpace('#fuzzycolor-intro-main', "flex-grow:1;");
    fcs.buildSphericalFuzzyColorSpace(basic_prototypes);
}

export function buildGranule() {
    let rgb;
    let rgb_p2e = hexToRgb($("#granular-point-to-evaluate").val());
    let p2e = new Point3D(rgb_p2e.r, rgb_p2e.g, rgb_p2e.b);
    console.log(rgb_p2e);

    let a_parameter = parseFloat($("#granular-a-parameter").val());
    let b_parameter = parseFloat($("#granular-b-parameter").val());
    let distance=0;
    let membership_degree=0;
    let max_membership_degree = 0;
    let min_distance = 999;
    
    let fcs_support = new FuzzyColorSpace('#granular-main-support', "flex-grow:5;");

    if (a_parameter <= b_parameter){
        $("#granular-selected-prototypes").children().each(function(i) {
            rgb = hexToRgb($(this).attr("value"));     
            drawIsolatedPrototype(rgb, rgb_p2e, a_parameter, b_parameter, fcs_support);

            let prototype = new Point3D(rgb.r, rgb.g, rgb.b);
            let fc = new SphericalFuzzyColor(prototype, a_parameter, b_parameter);
            membership_degree = fc.getMembershipDegree(p2e);
            if(membership_degree > max_membership_degree){
                max_membership_degree = membership_degree;
            }
            distance = prototype.getDistance(p2e);
            if(distance < min_distance){
                min_distance = distance;
            }
        });
        showParameterError("#granular-parameter-error", "");
    }
    else {
        showParameterError("#granular-parameter-error", "a > b is not allowed");
        max_membership_degree = 0;
        min_distance = 999;
    }

    if(min_distance != 999){
        $("#granular-distance").text(min_distance.toFixed(2));
        $("#granular-md").text(max_membership_degree.toFixed(2));
    }
}

export function cleanGranule(){
    $("#granular-selected-prototypes").empty();
    $("#granular-selected-prototypes").text("Prototypes will be appear here");
    let fcs_support = new FuzzyColorSpace('#granular-main-support', "flex-grow:5;");
    $("#granular-distance").text("");
    $("#granular-md").text("");
}

export function initializeGranularSelect(prototypes_positives_negatives, html_element, parent, selected_index){
    let selected_color = ""
    if(selected_index == -1){
        selected_color = "selected=\"selected\""
    }
    let select = "<select " + selected_color + " id=" + "\""+html_element+"\"><option value=\"-1\">All</option>";

    let current_index = 0;
    for (const pair of prototypes_positives_negatives) {
        let selected_color = ""
        if(current_index == selected_index){
            selected_color = "selected=\"selected\""
        }
        select += `<option ${selected_color} value=\"${pair[0]}\">${pair[0]}</option>`
        current_index += 1
    }

    select += "</select>";
    $("#"+parent).append(select);
}

function buildMatrixImage(image_data){
    let output = [];
    for (let i = 0; i < image_data.length; i += 4) {
        output.push(new Point3D(image_data[i], image_data[i+1], image_data[i+2]));
    }
    return output;
}

export function selectGranularColor() {
    let prototypes = obtainCurrentGranularPrototypes()
    let visible_color = [$('#granular-picker :selected').val()];

    if (visible_color[0] == "-1")
        visible_color = prototypes.map(color_prototype => color_prototype[0]);

    let fcs = new FuzzyColorSpace('#granular-space', "flex-grow:1;");
    fcs.buildGranularSphericalFuzzyColorSpace(prototypes, visible_color);
}

function addNewPrototypeGranular(event) {
    let colorLabel = event.target.id.replace("picker_", "");
    let listToAddId = event.target.id.replace("picker", "granules_wrapper");
    let hexadecimal = $("#"+event.target.id).val();
    let color = hexToRgb(hexadecimal);

    let html_prototype = `<div value=\"${hexadecimal}\" style=\"display:flex; flex-direction:column;\">`;
    html_prototype += `<div style=\"margin-left: 3px; margin-top: 3px; height: 20px; width: 20px; border: 1px black solid; background-color: rgb(${color.r}, ${color.b}, ${color.b})\" value=\"${hexadecimal}\"></div>`;
    html_prototype += `<a class=\"cross-prototype\" id=\"delete_${colorLabel}_${color.r}_${color.g}_${color.b}\" style=\"text-align:center;\">&times</a>`;
    html_prototype += "</div>"
    html_prototype += `<input style=\"margin-left: 10px;\" type=\"color\" id=\"${event.target.id}\">`


    var prototypesList = document.getElementById(listToAddId);
    prototypesList.removeChild(prototypesList.lastChild);
    $("#"+listToAddId).append(html_prototype);

    document.querySelector("#"+event.target.id).addEventListener("change", addNewPrototypeGranular, false);
    document.querySelector(`#delete_${colorLabel}_${color.r}_${color.g}_${color.b}`).addEventListener("click", removePrototypeGranular, false);

    document.querySelector("#granular-clean-prototypes").disabled = false;
}

function removePrototypeGranular(event) {
    let splittedId = event.target.id.split("_")
    let labelToRemove = splittedId[1];
    let listToRemoveId = `granules_wrapper_${labelToRemove}`;

    $("#"+listToRemoveId).children().each(function(i) {
        if (i > 0 && i < $("#"+listToRemoveId).children().length-1){
            let rgb = hexToRgb($(this).attr("value"));
            let childrenRgb = splittedId.slice(-3);

            if(rgb.r == childrenRgb[0] && rgb.g == childrenRgb[1] && rgb.b == childrenRgb[2]){
                var prototypesList = document.getElementById(listToRemoveId);
                prototypesList.removeChild(this);
                return true
            }
        }
    });

    document.querySelector("#granular-clean-prototypes").disabled = false;
}

export function obtainCurrentGranularPrototypes() {
    let prototypes = []
    $("#granules-wrapper").children().each(function(a) {
        let label = $(this).attr("id").replace("granules_wrapper_", "");
        
        prototypes.push([label, [], []])

        let colorWrapper = $(this).children();
        colorWrapper.each(function(i) {
            if (i > 0 && i < colorWrapper.length-1){
                let rgb = hexToRgb($(this).attr("value"));
                prototypes[a][1].push(new Point3D(rgb.r, rgb.g, rgb.b));
            }
        });
    });

    for (let i = 0; i < prototypes.length; i += 1) {
        let triplet1 = prototypes[i];
        for (const triplet2 of prototypes) {
            if (triplet1[0] != triplet2[0]){
                for(const p of triplet2[1]){
                    triplet1[2].push(p)
                }
            }
        }
    }

    return prototypes;
}

export function buildGranularFCS() {
    let prototypes = obtainCurrentGranularPrototypes();

    let visible_colors = prototypes.map(color_prototype => color_prototype[0]);
    let fcs = new FuzzyColorSpace('#granular-space', "flex-grow:1;");
    fcs.buildGranularSphericalFuzzyColorSpace(prototypes, visible_colors);

    $("#granular-picker").val("-1").change();

    document.querySelector("#granular-clean-prototypes").disabled = false;
}

export function resetToDefaultGranularFCS() {
    let prototypes_positives_negatives = getGranularPrototypes();

    let visible_colors = prototypes_positives_negatives.map(color_prototype => color_prototype[0]);
    let fcs = new FuzzyColorSpace('#granular-space', "flex-grow:1;");
    fcs.buildGranularSphericalFuzzyColorSpace(getGranularPrototypes(), visible_colors);

    let parent_element = $("#granules-wrapper");
    parent_element.empty();
    let html_prototypes = "";


    for (const triplet of prototypes_positives_negatives) {
        html_prototypes += `<div id=\"granules_wrapper_${triplet[0]}\" style=\"margin: 4px; display:flex;\">`
        html_prototypes += `<label style=\"margin-top: 3px; margin-right: 3px;\">${triplet[0]}: </label>`
        for (const color of triplet[1]) {
            let hexadecimal = rgbToHex(color.x, color.y, color.z);
            html_prototypes += `<div value=\"${hexadecimal}\" style=\"display:flex; flex-direction:column;\">`;
            html_prototypes += `<div style=\"margin-left: 3px; margin-top: 3px; height: 20px; width: 20px; border: 1px black solid; background-color: rgb(${color.x}, ${color.y}, ${color.z})\" value=\"${hexadecimal}\"></div>`;
            html_prototypes += `<a class=\"cross-prototype\" id=\"delete_${triplet[0]}_${color.x}_${color.y}_${color.z}\" style=\"text-align:center;\">&times</a>`;
            html_prototypes += "</div>"
        }
        html_prototypes += `<input style=\"margin-left: 10px;\" type=\"color\" id=\"picker_${triplet[0]}\">`
        html_prototypes += "</div>"
    }
    parent_element.append(html_prototypes);

    for (const triplet of prototypes_positives_negatives) {
        document.querySelector(`#picker_${triplet[0]}`).addEventListener("change", addNewPrototypeGranular, false);
        for (const color of triplet[1]) {
            document.querySelector(`#delete_${triplet[0]}_${color.x}_${color.y}_${color.z}`).addEventListener("click", removePrototypeGranular, false);
        }
    }

    document.querySelector("#granular-clean-prototypes").disabled = true;

    $("#granular-picker").val("-1").change();
}


export function visualizeCustomGranularColor() {
    let prototypes = obtainCurrentGranularPrototypes();
    generalVisualizeGranularColor(prototypes);
}

export function visualizeGranularColor() {
    generalVisualizeGranularColor(getGranularPrototypes())
}

function generalVisualizeGranularColor(protoypes) {
    var visible_color_index = [$('#granular-results-picker :selected').val()];
    var visible_color = visible_color_index

    if (visible_color_index == "-1")
        visible_color = protoypes.map(color_prototype => color_prototype[0]);

    let fcs = new FuzzyColorSpace('#granular-results-space', "flex-grow:1;");
    fcs.buildGranularSphericalFuzzyColorSpace(protoypes, visible_color);

    var preview = document.querySelector("#saved-image");
        
    var canvas = document.getElementById("saved-image-canvas");
    var ctx = canvas.getContext("2d", { willReadFrequently: true });
    
    
    var image_data = ctx.getImageData(0, 0, 180, 180);
    var image = buildMatrixImage(image_data.data);
    
    if (visible_color_index != "-1"){
        var degrees_image = fcs.mapImage(visible_color, image, fcs.granularFuzzyColors).flat();
        
    }
    // mapping all colors
    else {
        for(const c of visible_color) {
            let degrees_image_i = fcs.mapImage([c], image, fcs.granularFuzzyColors).flat();
            degrees_image = findMaximumBetween(degrees_image, degrees_image_i)
        }
    }

    var canvas_mapped = document.getElementById("mapped-image");
    ctx = canvas_mapped.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(preview, 0, 0, 180, 180);

    const imageData = ctx.getImageData(0, 0, 180, 180);
    const data = imageData.data;
    let degrees_index = 0;

    for (var i = 0; i < data.length; i += 4) {
        data[i + 3] = degrees_image[degrees_index]*255;
        degrees_index++;
    }
    
    ctx.putImageData(imageData, 0, 0);
}


export function obtainCustomPrototypesLabelsFCS() {
    let prototypes = []
    let rgb;
    $("#fuzzycolor-intro-selected-prototypes").children().each(function(i) {
        rgb = hexToRgb($(this).attr("value"));
        prototypes.push( new Point3D(rgb.r, rgb.g, rgb.b));
    });

    let fcs = new FuzzyColorSpace('#fcs-results-space', "flex-grow:1;");
    fcs.buildSphericalFuzzyColorSpace(prototypes);

    let prototypes_labels = [];
    for(let i = 0; i < prototypes.length; i++) {
        prototypes_labels.push([`Custom color ${(i+1)}`, prototypes[i]])
    }

    return prototypes_labels
}

export function resetFCSResult(){
    initImageLoaded("fcs-saved-image-canvas", "#fcs-results-picker", "fcs-saved-image", "#fcs-default");
    
    let visible_colors = getISCCBasicPrototypesWithLabels().filter(color => color[0] == "Red").map(color_prototype => color_prototype[0]);
    let fcs = new FuzzyColorSpace('#fcs-results-space', "flex-grow:1;");
    fcs.buildSphericalFuzzyColorSpaceWithLabels(getISCCBasicPrototypesWithLabels(), visible_colors);
    
    $("#fcs-results-picker").remove()
    initializeGranularSelect(getISCCBasicPrototypesWithLabels(), "fcs-results-picker", "fcs-results-select", 1);
    $("#fcs-results-picker").on("change", visualizeFCSColor);
    
    let sourceImageFCS = document.querySelector('#fcs-source-image');
    sourceImageFCS.addEventListener("change", saveFCSImage, false);
}

export function resetGranularFCSResult() {
    initImageLoaded("saved-image-canvas", "#granular-results-picker", "saved-image", "#granular-fcs-default");

    let visible_colors = getGranularPrototypes().filter(color => color[0] == "Red").map(color_prototype => color_prototype[0]);
    let fcs = new FuzzyColorSpace('#granular-results-space', "flex-grow:1;");
    fcs.buildGranularSphericalFuzzyColorSpace(getGranularPrototypes(), visible_colors);
    
    $("#granular-results-picker").remove()
    initializeGranularSelect(getGranularPrototypes(), "granular-results-picker", "granular-results-select", 1);
    $('#granular-results-picker').on( "change", visualizeGranularColor);
    
    let sourceImage = document.querySelector('#source-image');
    sourceImage.addEventListener("change", saveImage, false);
}

export function visualizeFCSCustomColor() {
    generalVisualizeFCSColor(obtainCustomPrototypesLabelsFCS())
}

export function visualizeFCSColor() {
    generalVisualizeFCSColor(getISCCBasicPrototypesWithLabels())
}

function findMaximumBetween(matriz1, matriz2) {
    let maxMatrix = [];
    if (matriz1 != null) {
        for (let i = 0; i < matriz1.length; i++) {
            maxMatrix.push(matriz1[i]+matriz2[i]);
          }
    }
    else{
        maxMatrix = matriz2;
    }
    return maxMatrix;
}

export function generalVisualizeFCSColor(prototypes_labels) {
    var visible_color_index = [$('#fcs-results-picker :selected').val()];
    var visible_color = visible_color_index

    if (visible_color_index == "-1")
        visible_color = prototypes_labels.map(color_prototype => color_prototype[0]);

    var fcs = new FuzzyColorSpace('#fcs-results-space', "flex-grow:1;");
    fcs.buildSphericalFuzzyColorSpaceWithLabels(prototypes_labels, visible_color);

    var canvas = document.getElementById("fcs-saved-image-canvas");
    var ctx = canvas.getContext("2d", { willReadFrequently: true });
    var image_data = ctx.getImageData(0, 0, 180, 180);
    var image = buildMatrixImage(image_data.data);
    var degrees_image = null;
    
    if (visible_color_index != "-1"){
        degrees_image = fcs.mapImage(visible_color, image, fcs.sphericalFuzzyColors).flat();
    }
    // mapping all colors
    else {
        for(const c of visible_color) {
            let degrees_image_i = fcs.mapImage([c], image, fcs.sphericalFuzzyColors).flat();
            degrees_image = findMaximumBetween(degrees_image, degrees_image_i)
        }
    }
    
    var preview = document.querySelector("#fcs-saved-image-canvas");
    var canvas_mapped = document.getElementById("fcs-mapped-image");
    var ctx2 = canvas_mapped.getContext("2d", { willReadFrequently: true });
    ctx2.drawImage(preview, 0, 0, 180, 180);

    const imageData = ctx2.getImageData(0, 0, 180, 180);
    const data = imageData.data;
    let degrees_index = 0;
    
    for (var i = 0; i < data.length; i += 4) {
        data[i + 3] = degrees_image[degrees_index]*255;
        degrees_index++;
    }
    ctx2.putImageData(imageData, 0, 0);
}

export function saveImage() {
    var preview = document.getElementById("saved-image");
    var file    = document.querySelector('#source-image').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
        var img = new Image();
        img.onload = function () {
            var canvas = document.getElementById("saved-image-canvas");
            var ctx = canvas.getContext("2d", { willReadFrequently: true });
            ctx.drawImage(preview, 0, 0, 180, 180);
            $('#granular-results-picker').val('-1').change();
        }
        img.src = reader.result;

    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

export function saveFCSImage() {
    var preview = document.getElementById("fcs-saved-image");
    var file    = document.querySelector('#fcs-source-image').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
        var img = new Image();
        img.onload = function () {
            preview.src = reader.result;
            var canvas = document.getElementById("fcs-saved-image-canvas");
            var ctx = canvas.getContext("2d", { willReadFrequently: true })
            ctx.drawImage(preview, 0, 0, 180, 180);
            $('#fcs-results-picker').val('-1').change();
        }
        img.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

export function initImageLoaded(element, picker_id, element_img, default_option){
    const canvas = document.getElementById(element);
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0, 180, 180);          
        $(picker_id).trigger("change");
        $(default_option).prop("checked", true);
    };
    img.src = 'img/bandera9.jpg';

    var edit_save = document.getElementById(element_img);
    edit_save.src = 'img/bandera9.jpg';
}