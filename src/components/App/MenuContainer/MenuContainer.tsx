import React, { useEffect, useRef, useState } from 'react';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';
import styled from "styled-components"
import {connect} from "react-redux";
import {addSubmenu, removeSubmenu} from "../../../store/actions";

const MainMenu = styled.div`
    display: flex;
    height: 100vh; 
    color: rgb(248,247,255);
    background-color: rgb(32,35,63);
    font-size: 24px;
    font-family: OpenSans;
`;
const MenuContainer = ({...props}: any) => {
    console.dir(props);
    return (
        <MainMenu>
            <Logo/>
            <NavigationMenu
                            menu = {props.section1.menu}
                            isOpenText = {props.section1.isOpenText}
                            color = "black"
                            activeId = {props.activeId}
                            removeSubmenu = {props.removeSubmenu}
                           />
            <Chat/>
            {(props.section2.menu[0]) && <NavigationMenu menu = {props.section2.menu}
                                                        activeId = {props.activeId}
                                                         activeColor = {props.activeColor}
                                                        isOpenText = {props.section2.isOpenText}
                                                         color = "grey"
                                                         removeSubmenu = {props.removeSubmenu}
                                                         isOpen = {props.section2.isOpen}
                            />}
            {(props.section3.menu[0]) &&<NavigationMenu menu = {props.section3.menu}
                                                        activeId = {props.activeId}
                                                        activeColor = {props.activeColor}
                                                        isOpenText = {props.section3.isOpenText}
                                                        removeSubmenu = {props.removeSubmenu}
                                                        isOpen = {props.section3.isOpen}
                                                        color = "white"
                           />}

        </MainMenu>

    )

};

const mapStateToProps = (state: any) => ({
    section1: {
        background: state.section1.background,
        isOpenText: state.section1.isOpenText,
        activeId: state.section1.activeId,
        menu: [...state.section1.menus]
    },
    section2: {
        background: state.section2.background,
        isOpen: state.section2.isOpen,
        activeId: state.section2.activeId,
        isOpenText: state.section2.isOpenText,
        menu: [...state.section2.menus]
    },
    section3: {
        background: state.section3.background,
        isOpen: state.section3.isOpen,
        activeId: state.section3.activeId,
        isOpenText: state.section3.isOpenText,
        menu: [...state.section3.menus]
    }
});

const mapDispatchToProps = (dispatch: any) => ({
    removeSubmenu: () => dispatch(removeSubmenu()), dispatch
});


export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);