import React from 'react';
import clsx from 'clsx';
import * as motion from 'motion/react-client';

interface SubmitProps {
  label: string;
  classes?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Submit = React.memo(({ label, classes = '', onClick, disabled = false }: SubmitProps) => {
  return (
    <motion.input
      type="submit"
      value={label}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.02, ease: 'linear' }}
      className={clsx(
        'py-3 px-8 text-white bg-gradient-to-r from-accent1 to-accent2 rounded-[10px] cursor-pointer transition ease-in-out duration-150 active:scale-75 hover:opacity-90',
        classes,
      )}
    />
  );
});

export default Submit;
