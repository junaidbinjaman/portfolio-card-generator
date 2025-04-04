import React from "react";

interface SecondaryHeadingProps {
    children: React.ReactNode;
    classes?: string;
}

const SecondaryHeading = ({children, classes = ''}: SecondaryHeadingProps) => {
    return (
        <h2 className={`text-secondary text-text font-inter font-normal ${classes}`}>{children}</h2>
    )
}

export default SecondaryHeading;