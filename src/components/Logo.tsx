interface LogoProps {
    src: string;
    alt?: string;
    width: number;
    height: number | 'auto';
}

const Logo = ({src, alt = 'Logo', width, height = 'auto'}:LogoProps ) => {
    // TODO: Add runtime validation for src. If asc is missing, render a fallback logo here.
    return (<img src={src} alt={alt} width={width} height={height} />)
}

export default Logo;