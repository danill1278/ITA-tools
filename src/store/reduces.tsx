import {ADD_SUBMENU} from './actions-constants';
/*
section1:rgb(32,35, 63)
section2: rgb(69,70,91)     rgb(32*2.15, 35*2, 63*1.4)
section3: rgb(236,236,241)*/

const initialState = {
    section1: {
        activeId: 0,
        isOpenText: true,
        menus:[
            {
                id: 11,
                name: "sign in",
                icon: "icon-sign-in",
                path: '/signin'
            }
    ,
        {
            id: 12,
            name: "tools",
            icon: "icon-wrench",
            path: '/tools'
        },
        {
            id: 13,
            name: "gallery",
            icon: "icon-image",
            path: '/photo'
        }
    ]},
    section2: {
        activeId: 0,
        isOpenText: true,
        isOpen: false,
        menus:[]
    },
    section3: {
        activeId: 0,
        isOpenText: true,
        isOpen: false,
        menus:[]
    }
};
    const stateSubmenu2 = [
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
                    path: '/rem'
                }
            ]
        },
        {
            previousId: 13,
            menu: [
                {
                    id: 24,
                    name: "my photo",
                    icon: "icon-home",
                    path: '/my'
                },
                {
                    id: 25,
                    name: "all photos",
                    icon: "icon-calendar",
                    path: '/all'
                }
            ]
        }
    ];
    const stateSubmenu3 = [
        {
            previousId: 21,
            menu: [
                {
                    id: 31,
                    name: "home",
                    icon: "icon-wrench",
                    path: '/home'
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
                    icon: "icon-photo",
                    path: '/schedule'
                }
            ]
        }
    ];

    export const rootReducer = (state: any = initialState, action: any) => {
        switch (action.type) {
            case ADD_SUBMENU:
                    const itemNext2 = stateSubmenu2.find((item: any) => action.id === item.previousId);
                    console.dir(itemNext2);
                    if (itemNext2) {
                        return Object.assign({}, state, {
                            section1: {
                                activeId: action.id,
                                isOpenText: false,
                                menus: [...state.section1.menus]
                            },
                            section2: {
                                isOpen: true,
                                isOpenText: true,
                                menus: [...itemNext2.menu]
                            },
                            section3: {
                                isOpenText: true,
                                isOpen: false,
                                menus: []
                            }
                        });
                    }
                    const itemNext3 = stateSubmenu3.find((item: any) => action.id === item.previousId);
                    console.dir(itemNext3);
                    if (itemNext3) {
                        return Object.assign({}, state, {
                            section1: {...state.section1},
                            section2: {
                                activeId: action.id,
                                isOpen: true,
                                isOpenText: false,
                                menus: [...state.section2.menus]
                            },
                            section3: {
                                isOpen: true,
                                isOpenText: true,
                                menus: [
                                    ...itemNext3.menu
                                ]
                            }

                        });
                    }
                        return Object.assign({}, state, {
                            section1: {
                                activeId: ((action.id === 11)||  (action.id === 12)|| (action.id === 13))? action.id : 0,
                                isOpenText: false,
                                menus: [...state.section1.menus]
                            },
                            section2: {
                                activeId: ((action.id === 11) ||
                                    (action.id === 22)||
                                    (action.id === 23) ||
                                    (action.id === 24) ||
                                    (action.id === 25)) ? action.id: 0,
                                isOpenText: false,
                                menus: (action.id === 11 ) ? []:[...state.section2.menus]
                            },
                            section3: {
                                activeId: ((action.id === 31) ||
                                    (action.id === 32)||
                                    (action.id === 33)) ? action.id:0,
                                isOpenText: false,
                                menus: ((action.id === 11) ||
                                    (action.id === 22)||
                                    (action.id === 23) ||
                                    (action.id === 24) ||
                                    (action.id === 25)) ? []:[...state.section3.menus]
                            }
                        });
    default:
        return state;
    }
};

