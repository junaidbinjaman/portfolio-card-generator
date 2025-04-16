import { FaUser } from 'react-icons/fa';
import clsx from 'clsx'; // For dynamic class management
import React from 'react';

interface AvatarProps {
    source?: string;
    alt?: string;
    classes?: string;
    width?: string | number;
    height?: string | number;
}

/**
 * The Avatar component renders either an image or a fallback icon.
 * - If `source` is provided, it renders an image.
 * - If `source` is not provided, it renders an icon. We recommend adding font-size to the class in that case.
 * The default fontsize is 4.5rem = 72px for the avatar icon.
 *
 * @param {AvatarProps} props - The props for the Avatar component.
 * @returns {JSX.Element} The rendered Avatar component.
 */
const Avatar = React.memo(
    ({
        source,
        alt = 'Avatar',
        classes = '',
        width,
        height,
    }: AvatarProps) => {
    
        if (source) {
            return (
                <img
                    src={source}
                    alt={alt}
                    className={clsx('rounded-full border-2 border-accent1', classes)}
                    width={width}
                    height={height}
                />
            );
        }
    
        return (
            <FaUser
                className={clsx(
                    'rounded-full border-2 text-white bg-[#A6A6A6] border-accent1 text-7xl',
                    classes
                )}
                role="img"
                aria-label="Fallback Avatar"
            />
        );
    }
);

export default Avatar;
