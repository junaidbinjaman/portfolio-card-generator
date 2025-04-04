import React from 'react';

interface SubheadingProps {
    children: React.ReactNode;
    classes?: string;
}

const Subheading = ({children, classes}: SubheadingProps) => {
    return (<h4 className={`text-subheading text-text font-normal font-inter ${classes}`}>{children}</h4>)
}

export default Subheading;