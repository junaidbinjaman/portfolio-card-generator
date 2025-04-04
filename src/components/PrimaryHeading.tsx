import React from 'react';

interface PrimaryHeadingProps {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    classes?: string;
}

const PrimaryHeading = ({children, level, classes}: PrimaryHeadingProps) => {
    const Tag = (level ? `h${level}` : 'h1') as
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6';

    return <Tag className={`text-primary text-text font-bold font-inter ${classes}`}>{children}</Tag>;
};

export default PrimaryHeading;
