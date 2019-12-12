import {ADD_SUBMENU, REMOVE_SUBMENU} from './actions-constants';

const colors = ["rgb(32,35, 63)", "rgb(69,70,91)", "rgb(236,236,241)"];

const initialState = {
    section1: {
        background: colors[0],
        activeId: 0,
        activeBGColor: colors[1],
        activeColor: colors[2],
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
        background: colors[1],
        activeId: 0,
        activeBGColor: colors[2],
        activeColor: colors[1],
        isOpenText: true,
        isOpen: false,
        menus:[]
    },
    section3: {
        background: colors[2],
        activeId: 0,
        activeBGColor: colors[0],
        activeColor: colors[2],
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
                        return  {...state, ...{
                            section1: {
                                background: state.section1.background,
                                activeBGColor: state.section1.activeBGColor,
                                activeId: action.id,
                                isOpenText: false,
                                activeColor:  state.section1.activeColor,
                                menus: [...state.section1.menus]
                            },
                            section2: {
                                background: state.section2.background,
                                activeColor:  state.section2.activeColor,
                                activeBGColor: state.section2.activeBGColor,
                                isOpen: true,
                                isOpenText: true,
                                menus: [...itemNext2.menu]
                            },
                            section3: {
                                background: state.section3.background,
                                activeColor:  state.section3.activeColor,
                                activeBGColor: state.section3.activeBGColor,
                                isOpenText: true,
                                isOpen: false,
                                menus: []
                            }
                        }}
                    }
                    const itemNext3 = stateSubmenu3.find((item: any) => action.id === item.previousId);
                    console.dir(itemNext3);
                    if (itemNext3) {
                        return  {...state, ...{
                            section1: {...state.section1},
                            section2: {
                                background: state.section2.background,
                                activeColor:  state.section2.activeColor,
                                activeBGColor: state.section2.activeBGColor,
                                activeId: action.id,
                                isOpen: true,
                                isOpenText: false,
                                menus: [...state.section2.menus]
                            },
                            section3: {
                                activeColor:  state.section3.activeColor,
                                activeBGColor: state.section3.activeBGColor,
                                isOpen: true,
                                isOpenText: true,
                                menus: [
                                    ...itemNext3.menu
                                ]
                            }

                        }};
                    }
                return  {...state, ...{
                            section1: {
                                background: state.section1.background,
                                activeColor:  state.section1.activeColor,
                                activeBGColor: state.section1.activeBGColor,
                                activeId: (action.id === 11) ? action.id: state.section1.activeId,
                                isOpenText: false,
                                menus: [...state.section1.menus]
                            },
                            section2: {
                                background: state.section2.background,
                                activeColor:  state.section2.activeColor,
                                activeBGColor: state.section2.activeBGColor,
                                activeId: ((action.id === 22)||
                                    (action.id === 23) ||
                                    (action.id === 24) ||
                                    (action.id === 25)) ? action.id : state.section2.activeId,
                                isOpen: true,
                                isOpenText: false,
                                menus: (action.id === 11 ) ? []:[...state.section2.menus]
                            },
                            section3: {
                                background: state.section3.background,
                                activeColor:  state.section3.activeColor,
                                activeBGColor: state.section3.activeBGColor,
                                activeId: ((action.id === 31)||
                                    (action.id === 32) ||
                                    (action.id === 33)) ? action.id: state.section3.activeId,
                                isOpen: true,
                                isOpenText: false,
                                menus: ((action.id === 11) ||
                                    (action.id === 22)||
                                    (action.id === 23) ||
                                    (action.id === 24) ||
                                    (action.id === 25)) ? []:[...state.section3.menus]
                            }
                        }};
            case REMOVE_SUBMENU:
                        if(state.section2.isOpen && !state.section3.isOpen){
                            return  {...state, ...{
                                    section1: {
                                        activeId: 0,
                                        background: state.section1.background,
                                        activeColor:  state.section1.activeColor,
                                        activeBGColor: state.section1.activeBGColor,
                                        isOpenText: true,
                                        menus: [...state.section1.menus]
                                    },
                                    section2: {
                                        activeId: 0,
                                        background: state.section2.background,
                                        activeColor:  state.section2.activeColor,
                                        activeBGColor: state.section2.activeBGColor,
                                        isOpen: false,
                                        isOpenText: false,
                                        menus: []
                                    },
                                    section3: {
                                        activeId: 0,
                                        background: state.section3.background,
                                        activeColor:  state.section3.activeColor,
                                        activeBGColor: state.section3.activeBGColor,
                                        isOpenText: false,
                                        isOpen: false,
                                        menus: []
                                    }
                                }}
                        }
                        if(state.section2.isOpen && state.section3.isOpen){
                            return  {...state, ...{
                                    section1: {
                                        activeId: state.section1.activeId,
                                        background: state.section1.background,
                                        activeColor:  state.section1.activeColor,
                                        activeBGColor: state.section1.activeBGColor,
                                        isOpenText: false,
                                        menus: [...state.section1.menus]
                                    },
                                    section2: {
                                        activeId: 0,
                                        background: state.section2.background,
                                        activeColor:  state.section2.activeColor,
                                        activeBGColor: state.section2.activeBGColor,
                                        isOpen: true,
                                        isOpenText: true,
                                        menus: [...state.section2.menus]
                                    },
                                    section3: {
                                        activeId: 0,
                                        background: state.section3.background,
                                        activeColor:  state.section3.activeColor,
                                        activeBGColor: state.section3.activeBGColor,
                                        isOpenText: false,
                                        isOpen: false,
                                        menus: []
                                    }
                                }}
                        }
                        return state;
                        default: 
                            return state;
    }
};

