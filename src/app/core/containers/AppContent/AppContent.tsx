import React from "react";
import { Card, Container } from "semantic-ui-react";
import "./app-content.scss";

interface AppContentProps {
  children: React.ReactNode;
}

const AppContent: React.FC<AppContentProps> = ({ children }) => {
  return (
    <div className='app-content'>
      <Card id='content-card' class="app-content__content-card">{children}</Card>
    </div>
  );
};

export default AppContent;
