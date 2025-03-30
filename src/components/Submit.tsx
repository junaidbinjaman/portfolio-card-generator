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
      whileTap={!disabled ? { scale: 0.85 } : undefined}
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      transition={{ duration: .01, ease: 'linear' }}
      className={clsx(
        'py-3 px-8 text-white bg-gradient-to-r from-accent1 to-accent2 rounded-[10px] cursor-pointer transition ease-in-out duration-150 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100',
        classes,
      )}
    />
  );
});

export default Submit;
