import {ADD_SUBMENU} from './actions-constants';

const initialState = {
    section1: [
        {
            id: 11,
            name: "sign in",
            icon: "icon-sign-in",
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
    section2: [
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
    section3: [
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

    export const rootReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_SUBMENU:
            if (action.id === 11||12||13) {
                const itemNext2 = state.section2.map((item: any) => action.id === item.previousId);
                console.dir(itemNext2);
                if(itemNext2) {
                    return [...state, ...itemNext2.menu]
                }

                 } else if (action.id === 21||22||23) {
                const itemNext3 = state.section3.map((item: any) => action.id === item.previousId);
                console.dir(itemNext3);
                return [...state, ...itemNext3.menu]
            } else {
                return [...state];
            }
            }
    return state
};

