import React from 'react';

interface PrimaryHeadingProps {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    classes?: string;
}

const PrimaryHeading: React.FC<PrimaryHeadingProps> = React.memo(({ 
    children, 
    level = 1, 
    classes = '' 
}) => {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    return (
        <Tag className={`text-primary text-text font-bold font-inter ${classes}`}>
            {children}
        </Tag>
    );
});

export default PrimaryHeading;
