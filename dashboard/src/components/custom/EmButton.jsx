const EmButton = ({ className, type, value, handleClick }) => {
    return (
        <button
            className={className}
            type={type}
            onClick={handleClick}
        >
            {value}
        </button>
    )
}

export default EmButton
