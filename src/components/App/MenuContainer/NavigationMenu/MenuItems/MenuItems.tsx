import React from 'react';
import styled from "styled-components"
import {addSubmenu} from "../../../../../store/actions";
import {connect} from "react-redux";

const MenuItem = styled.li`
    padding: 5px;
`;

const Name = styled.span `
    width: 70%;
    margin: 7px;
`;

const Icon = styled.i `
    width: 30%;
    margin: 5px;
`;


const MenuItems = ( {...props}: any) => {
    console.dir(props);
    return (
        <MenuItem  onClick = {() => props.addSubmenu(props.menuItem.id)}>
            <Icon className= {`icon ${props.menuItem.icon}`}/>
            {props.isOpenText && <Name>{props.menuItem.name}</Name>}
        </MenuItem>
    )
};


const mapDispatchToProps  = (dispatch: any) => ({
    addSubmenu: (id: number) => dispatch(addSubmenu(id)), dispatch
});


export default connect(null, mapDispatchToProps)(MenuItems);