import "./Button.scss";

export const Button = ({className, variant, label, children, ...props}) => {

    const renderClass = () => {
        switch (variant) {
            case "primary":
                return `btn btn-main btn--primary ${className} `
                break;
            case "secondary":
                return `btn btn-main btn--secondary ${className} `
                break;
            default:
                break;
        }
    }
    return <button className={renderClass()} {...props}>{label || children}</button>
}
