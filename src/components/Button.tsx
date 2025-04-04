import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    classes?: string;
}

/**
 *
 * border-radius: 10px;
 * background: linear-gradient(90deg, var(--Colors-Accent-1, #6AB0FF) 0%, var(--Colors-Accent-2, #D4A5FF) 100%);
 */

const Button = ({children, classes = '', onClick}: ButtonProps) => {
    return (
        <button
            className={`bg-linear-[90deg,#6AB0FF,#D4A5FF] transition-all duration-150 active:scale-75 py-[13px] px-[20px] rounded-[10px] font-inter text-paragraph cursor-pointer ${classes}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
