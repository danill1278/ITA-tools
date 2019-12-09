import React, {useState} from 'react';
import './MenuContainer.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';
import {menuList} from "./menuList";
import styled from "styled-components"


const MainMenu = styled.div`
    display: flex;
`;
const MenuContainer = () => {
    const [openId, setopenId] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const onClickMenuItem = (id: number) => {
        setopenId(id);
        setIsOpen(!isOpen);
    };

    return (
        <MainMenu>
            <Logo/>
            <NavigationMenu onClick = {onClickMenuItem}
                            isOpen={ isOpen }
                            menu={ menuList.section1 }/>
            <Chat/>

            {menuList.section2.map((menuItem: any) => {
                    console.log(menuItem.previousId, openId);
                    console.log(menuItem.menu.map((item: any) => item.id), openId);
                    if (menuItem.previousId === openId) {
                        return (
                            <NavigationMenu
                                key={menuItem.menu.map((item: any) => item.id)}
                                onClick={onClickMenuItem}
                                menu={menuItem.menu}
                                isOpen={true}
                            />
                        );
                    } else {
                        console.log("hello");
                        for (let itemId of menuItem.menu.map((item: any) => item.id)) {
                            console.log(itemId);
                            if (itemId === openId) {
                                menuList.section3.map((item: any) => {
                                    console.dir(item);
                                    return (
                                        <NavigationMenu
                                            key={item.menu.map((itemMenu: any) => itemMenu.id)}
                                            onClick={onClickMenuItem}
                                            menu={item.menu}
                                            isOpen={true}
                                        />)
                                })
                            }
                        }
                    }
                }
                )
                }
        </MainMenu>

    )

};

export default MenuContainer;