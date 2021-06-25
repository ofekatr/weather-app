import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItemProps } from "semantic-ui-react";

const AppHeader: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>();
  const handleItemClick = (_e: React.MouseEvent, { name }: MenuItemProps) => {
    setActiveItem(name);
  };

  return (
    <Menu pointing secondary>
      <Link to="/">
        <Menu.Item
          name="weather"
          onClick={handleItemClick}
          active={activeItem === "weather"}
        />
      </Link>
      <Link to="/favorites">
        <Menu.Item
          name="favorites"
          onClick={handleItemClick}
          active={activeItem === "favorites"}
        />
      </Link>
    </Menu>
  );
};

export default AppHeader;
