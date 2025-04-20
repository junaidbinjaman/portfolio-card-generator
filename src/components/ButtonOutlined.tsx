import React from 'react';
import clsx from 'clsx';
import * as motion from 'motion/react-client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  classes?: string;
}

const ButtonOutlined = React.memo(({ children, classes = '', onClick }: ButtonProps) => {
  return (
    <motion.div
      className="relative inline-block p-[1px] z-1 transition duration-150"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileTap={{ scale: 0.75 }}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.07, ease: 'linear' }}
    >
      <button
        className={clsx('bg-white py-[13px] px-5 rounded-[10px] font-inter text-paragraph cursor-pointer', classes)}
        onClick={onClick}
      >
        <span className="text-transparent bg-gradient-to-r from-accent1 to-accent2 bg-clip-text">{children}</span>
      </button>
      <div className="absolute bg-gradient-to-r from-accent1 to-accent2 inset-0 rounded-[10px] -z-10"></div>
    </motion.div>
  );
});

export default ButtonOutlined;
