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
    //const [itemNext, setIsNext] = useState({});
    const onClickMenuItem = (id: number) => {
        setopenId(id);
        setIsOpen(!isOpen);
       /* if((id === (11| 12| 13)) && itemNext2){
            setIsNext(itemNext2)
        } else if ((id === (21| 22| 23)) && itemNext3){
            setIsNext(itemNext3)
        }
        setIsNext({});*/
    };
    let itemNext2 = menuList.section2.find((menuItem: any) => menuItem.previousId === openId);
    let itemNext3 = menuList.section3.find((menuItem: any) => menuItem.previousId === openId);
    console.log(itemNext2, itemNext3);

    return (
        <MainMenu>
            <Logo/>
            <NavigationMenu onClick = {onClickMenuItem}
                            isOpen={ true }
                            menu={ menuList.section1 }/>
            <Chat/>

            {((openId === (11 | 12 | 13)) && itemNext2) &&
                            <NavigationMenu
                                onClick={onClickMenuItem}
                                menu={itemNext2.menu}
                                isOpen={ true }
                            />
            }
            {((openId === (21 | 22 | 23 )) && itemNext3) &&
                            <NavigationMenu
                                onClick={onClickMenuItem}
                                menu={itemNext3.menu}
                                isOpen={true}
                            />
                }
        </MainMenu>

    )

};

export default MenuContainer;