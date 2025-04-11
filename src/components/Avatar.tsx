import {FaUser} from 'react-icons/fa';

interface AvatarProps {
    source: string | undefined;
    alt?: string;
    classes?: string;
    width: string | number;
    height?: string | number;
}

/**
 * The component returns an icon if the source is empty or undefined
 * otherwise, it returns an html image element.
 *
 * If the component returns the icon, the value inside width component will be the size of the icon.
 * Height component in that case is optional as it is not in use.
 *
 * @param component props
 * @returns TSX
 */
const Avatar = ({source, alt, classes, width, height}: AvatarProps) => {
    if (source) {
        return (
            <>
                <img
                    src={source}
                    alt={alt}
                    className={`rounded-full border-2 border-accent1 ${classes}`}
                    width={width}
                    height={height}
                />
            </>
        );
    }

    if (!source) {
        return (
            <>
                <FaUser
                    className={`rounded-full border-2 text-[${width}px] text-white bg-[#A6A6A6] border-accent1 ${classes}`}
                />
            </>
        );
    }
};

export default Avatar;
