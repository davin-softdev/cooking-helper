// Because we have extends -> so IButtonProps will inherit all the attributes of default button
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

const CustomButton = (props: IButtonProps) => {
    // Rest will be the rest from props but will except the children -> children does not belong to button attribute

    const {children, ...rest} = props

    return (
        <button {...rest}>
            {
                children
            }
        </button>
    )
}
