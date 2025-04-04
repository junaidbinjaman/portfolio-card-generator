import React from 'react';

interface ParagraphProps {
    children: React.ReactNode;
    classes?: string;
}

const Paragraph = ({children, classes = ''}: ParagraphProps) => {
    return (<p className={`text-paragraph text-text font-normal font-inter ${classes}`}>{children}</p>)
}

export default Paragraph;