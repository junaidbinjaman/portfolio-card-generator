import React from 'react';
import DOMPurify from 'dompurify';

interface ParagraphProps {
  children: React.ReactNode;
  classes?: string;
  role?: string;
  sanitize?: boolean;
}

const Paragraph = React.memo(({ children, classes = '', role = 'paragraph', sanitize = false }: ParagraphProps) => {
  const content = sanitize && typeof children === 'string' ? DOMPurify.sanitize(children) : children;
  return (
    <p
      className={`text-paragraph text-text font-normal font-inter ${classes}`}
      role={role}>
      {content}
    </p>
  );
})

export default Paragraph;
