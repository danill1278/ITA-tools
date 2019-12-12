import React from "react";
import styled from "styled-components";
import { addSubmenu } from "../../../../../store/actions";
import { connect } from "react-redux";

const Name = styled.span`
  width: 70%;
  margin: 7px;
`;

const Icon = styled.i`
  width: 30%;
  margin: 5px;
`;

const MenuItems = (props: any) => {
  console.log(props);
  const MenuItem = styled.li`
    padding: 5px;
    background-color: ${(props.section1.activeId === props.menuItem.id &&
      props.section1.activeBGColor) ||
      (props.section2.activeId === props.menuItem.id &&
        props.section2.activeBGColor) ||
      (props.section3.activeId === props.menuItem.id &&
        props.section3.activeBGColor)};
    color: ${(props.section1.activeId === props.menuItem.id &&
      props.section1.activeColor) ||
      (props.section2.activeId === props.menuItem.id &&
        props.section2.activeColor) ||
      (props.section3.activeId === props.menuItem.id &&
        props.section3.activeColor)};
  `;
  return (
    <MenuItem onClick={() => props.addSubmenu(props.menuItem.id)}>
      <Icon className={`icon ${props.menuItem.icon}`} />
      {props.isOpenText && <Name>{props.menuItem.name}</Name>}
    </MenuItem>
  );
};

const mapStateToProps = (state: any) => ({
  section1: {
    activeColor: state.section1.activeColor,
    activeId: state.section1.activeId,
    activeBGColor: state.section1.activeBGColor
  },
  section2: {
    activeColor: state.section2.activeColor,
    activeId: state.section2.activeId,
    activeBGColor: state.section2.activeBGColor
  },
  section3: {
    activeColor: state.section3.activeColor,
    activeId: state.section3.activeId,
    activeBGColor: state.section3.activeBGColor
  }
});
const mapDispatchToProps = (dispatch: any) => ({
  addSubmenu: (id: number) => dispatch(addSubmenu(id)),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);
