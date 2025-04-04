import React from 'react';

interface SmallTextProps {
    children: React.ReactNode;
    classes?: string;
}

const SmallText = ({children, classes}: SmallTextProps) => {
    return (<p className={`text-small text-text font-light font-inter ${classes}`}>{children}</p>)
}

export default SmallText;