import { getPageNameFromLocation } from "app/common/utils/paths";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, MenuItemProps } from "semantic-ui-react";
import "./app-header.scss";

const AppHeader: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>(
    getPageNameFromLocation()
  );

  const handleItemClick = (_e: React.MouseEvent, { name }: MenuItemProps) => {
    setActiveItem(name as string);
  };

  return (
    <Menu pointing secondary>
      <Link
        onClick={(e) => handleItemClick(e, { name: "weather" })}
        to="/"
        className="herolo-logo-wrapper"
      >
        <img alt='herolo-logo' src={"images/herolo-logo.jpg"} />
      </Link>
      <Menu.Item
        name="weather"
        onClick={handleItemClick}
        active={activeItem === "weather"}
        as={Link}
        to={"/"}
      >
        <Icon name="home"></Icon>
      </Menu.Item>
      <Menu.Item
        name="favorites"
        onClick={handleItemClick}
        active={activeItem === "favorites"}
        as={Link}
        to={"/favorites"}
      >
        <Icon name="favorite"></Icon>
      </Menu.Item>
    </Menu>
  );
};

export default AppHeader;
