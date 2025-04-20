import React from 'react';
import clsx from 'clsx';
import * as motion from 'motion/react-client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  classes?: string;
}

const Button = React.memo(({ children, classes = '', onClick }: ButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileTap={{ scale: 0.75 }}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.07, ease: 'linear' }}
      className={clsx(
        'bg-linear-[90deg,#6AB0FF,#D4A5FF] py-[13px] px-5 rounded-[10px] font-inter text-paragraph cursor-pointer',
        classes,
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
});

export default Button;
