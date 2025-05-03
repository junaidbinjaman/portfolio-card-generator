import React from 'react';
import { Link } from 'react-router';
interface LogoProps {
  src: string;
  alt?: string;
  width: number;
  height?: number | 'auto';
}

const Logo = React.memo(
  ({ src, alt = 'Logo', width, height = 'auto' }: LogoProps) => {
    const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
      event.currentTarget.src = '';
      event.currentTarget.alt = 'Image not available';
    };

    if (!src) {
      return <h3 className="text-2xl uppercase font-semibold">Logo</h3>;
    }

    return (
      <Link to="/">
        <img
          src={src}
          alt={alt || 'Image'}
          width={width}
          height={height}
          onError={handleError}
        />
      </Link>
    );
  },

  (prevProps, nextProps) => {
    return (
      prevProps.src === nextProps.src && prevProps.width === nextProps.width && prevProps.height === nextProps.height
    );
  },
);

export default Logo;
