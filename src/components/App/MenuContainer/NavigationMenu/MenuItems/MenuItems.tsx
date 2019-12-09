import React from 'react';
import './MenuItems.css';
import styled from "styled-components"

const MenuItem = styled.li`
    
`;

const Name = styled.span `
    width: 70%;
    padding: 5px;
`;

const Icon = styled.i `
    width: 30%;
    margin: 5px;
`;
const MenuItems = ( props: any) => {
    return (
        <MenuItem onClick = {() => props.onClick(props.menuItem.id)}>
            <Icon className= {`icon ${props.menuItem.icon}`}/>
            <Name  style={{
                display: props.isOpen ? "inline" : "none"
            }}>{props.menuItem.name}</Name>
        </MenuItem>
    )
};
export default MenuItems;