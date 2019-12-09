/*export const menuList = [
    {
        id: 11,
        name: "sign in",
        icon: "icon-sign-in",
        isAuth: false
    },
    {
        id: 12,
        name: "tools",
        icon: "icon-wrench",
        submenu: [
            {
                id: 21,
                name: "random",
                icon: "icon-home",
                path: '/random'
            },
            {
                id: 22,
                name: "schedule",
                icon: "icon-calendar",
                path: '/schedule'
            },
            {
                id: 23,
                name: "rem",
                icon: "icon-home",
                path: '/schedule'
            }]
    },
    {
        id: 13,
        name: "gallery",
        icon: "icon-image",
        path: '/gallery'
    }
];*/


export const menuList = {
    section1: [
        {
            id: 11,
            name: "sign in",
            icon: "icon-sign-in",
            isAuth: false
        },
        {
            id: 12,
            name: "tools",
            icon: "icon-wrench"
        },
        {
            id: 13,
            name: "gallery",
            icon: "icon-image",
            path: '/gallery'
        }
    ],
    section2 : [
        {
            previousId: 12,
            menu: [
        {
            id: 21,
            name: "random",
            icon: "icon-home",
            path: '/random'
        },
        {
            id: 22,
            name: "schedule",
            icon: "icon-calendar",
            path: '/schedule'
        },
        {
            id: 23,
            name: "rem",
            icon: "icon-home",
            path: '/schedule'
        }
        ]
        },
        {
            previousId: 13,
            menu: [
                {
                    id: 21,
                    name: "my photo",
                    icon: "icon-home",
                    path: '/random'
                },
                {
                    id: 22,
                    name: "all photos",
                    icon: "icon-calendar",
                    path: '/schedule'
                }
            ]
        }
    ],
    section3 : [
        {
            previousId: 21,
            menu: [
                {
                    id: 31,
                    name: "home",
                    icon: "icon-home",
                    path: '/random'
                },
                {
                    id: 32,
                    name: "profile",
                    icon: "icon-calendar",
                    path: '/schedule'
                },
                {
                    id: 33,
                    name: "rem",
                    icon: "icon-home",
                    path: '/schedule'
                }
            ]
        }
    ]
};
