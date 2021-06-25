import React from "react";
import { Card } from "semantic-ui-react";
import "./app-content.scss";

interface AppContentProps {
  children: React.ReactNode;
}

const AppContent: React.FC<AppContentProps> = ({ children }) => {
  return (
    <div className='app-content'>
      <Card id='content-card' className="app-content__content-card">{children}</Card>
    </div>
  );
};

export default AppContent;
