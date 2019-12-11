import React, { useEffect, useRef, useState } from 'react';
import {NavigationMenu} from './NavigationMenu/NavigationMenu';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';
import styled from "styled-components"
import {connect} from "react-redux";


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
                            activeId = {props.section1.activeId}
                           />
            <Chat/>
            {(props.section2.menu[0]) && <NavigationMenu menu = {props.section2.menu}

                                                        isOpenText = {props.section2.isOpenText}
                                                        color = "grey"
                                                         activeId = {props.section2.activeId}
                            />}
            {(props.section3.menu[0]) &&<NavigationMenu menu = {props.section3.menu}

                                                        isOpenText = {props.section3.isOpenText}
                                                        color = "white"
                                                        activeId = {props.section3.activeId}
                           />}

        </MainMenu>

    )

};

const mapStateToProps = (state: any) => ({
    section1: {
        activeId: state.section1.activeId,
        isOpenText: state.section1.isOpenText,
        menu: [...state.section1.menus]
    },
    section2: {
        activeId: state.section2.activeId,
        isOpenText: state.section2.isOpenText,
        menu: [...state.section2.menus]
    },
    section3: {
        activeId: state.section3.activeId,
        isOpenText: state.section3.isOpenText,
        menu: [...state.section3.menus]
    }
});

export default connect(mapStateToProps)(MenuContainer);