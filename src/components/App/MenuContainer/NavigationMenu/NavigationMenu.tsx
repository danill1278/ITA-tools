import React from 'react';
import MenuItems from './MenuItems/MenuItems';
import styled from "styled-components";


const MenuMain = styled.ul `
    display: flex;
    flex-direction: column;
    list-style-type: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    color: ${props => (props.color === "white" )? "rgb(32,35,63)": "rgb(248,247,255)" };
    background-color: ${props => (props.color === "black" ) ? 
    "rgb(32,35,63)" :
    ((props.color === "grey") ? 
        "rgb(69,70,91)" :
        "rgb(236,236,241)")};
`;

export const NavigationMenu = ({color, menu, activeId, isOpenText}: any) => {
  return (
        <MenuMain color = {color}>
            {menu.map((menuItem: any) => {
                return (
                    <MenuItems key={menuItem.id}
                               menuItem ={menuItem}
                               isOpenText = {isOpenText}
                               isActive = {activeId === menuItem.id}
                   />
                )
            })
            }
        </MenuMain>
  )
};

