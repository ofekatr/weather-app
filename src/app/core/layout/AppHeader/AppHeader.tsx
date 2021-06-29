import React from "react";
import { isMobile } from "react-device-detect";
import BrowserAppHeader from "./BrowserAppHeader/BrowserAppHeader";
import MobileAppHeader from "./MobileAppHeader/MobileAppHeader";

const AppHeader: React.FC = () => {
  return <>{isMobile ? <MobileAppHeader /> : <BrowserAppHeader />}</>;
};

export default AppHeader;
