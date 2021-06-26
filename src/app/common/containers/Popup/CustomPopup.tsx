import React from 'react';
import { Popup } from 'semantic-ui-react'

interface CustomPopupProps {
    content: string;
    children: React.ReactNode;
}

const CustomPopup: React.FC<CustomPopupProps> = ({ content, children }) => {
     return (
        <Popup trigger={children} content={content} inverted/>
    );
}

export default CustomPopup;