import React from "react";
import MenuItems from "./MenuItems/MenuItems";
import styled from "styled-components";
import { connect } from "react-redux";

const MenuMain = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  color: ${props =>
    props.color === "white" ? "rgb(32,35,63)" : "rgb(248,247,255)"};
  background-color: ${props =>
    props.color === "black"
      ? "rgb(32,35,63)"
      : props.color === "grey"
      ? "rgb(69,70,91)"
      : "rgb(236,236,241)"};
`;

const NavigationMenu = ({
  color,
  menu,
  isOpenText,
  isOpen,
  removeSubmenu
}: any) => {
  console.log(color, menu, isOpenText, removeSubmenu);
  const CloseMenu = styled.div`
    text-align: right;
    height: 30px;
    margin-right: 8px;
    font-size: 28px;
    font-weight: bold;
  `;
  return (
    <MenuMain color={color}>
      <CloseMenu>
        {isOpenText && isOpen && (
          <i onClick={() => removeSubmenu()} className="icon icon-angle-left" />
        )}
      </CloseMenu>
      {menu.map((menuItem: any) => {
        return (
          <MenuItems
            key={menuItem.id}
            menuItem={menuItem}
            isOpenText={isOpenText}
          />
        );
      })}
    </MenuMain>
  );
};

export default connect()(NavigationMenu);
