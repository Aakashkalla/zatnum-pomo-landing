import Link from "next/link"

type ButtonProps = {
    text : string
    href : string
    classname : string
    color : "primary" | "secondary" | "tertiary"
}

const colorStyles = {
    primary : "bg-primary text-tertiary hover:bg-neutral-200",
    secondary : "bg-secondary text-primary hover:bg-neutral-600",
    tertiary : "bg-tertiary text-primary hover:bg-neutral-800 border border-neutral-700"
}

const baseStyles = "rounded-lg font-montserrat hover:bg-neutral-200 transition-colors"

const Button = ({text, href, classname, color} : ButtonProps) => {
    return (
        <div>
            <Link href={`/${href}`} className={`${baseStyles} ${colorStyles[color]} ${classname}`}>{text}</Link>
        </div>
    )
}

export default Button
