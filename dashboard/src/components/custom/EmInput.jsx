const EmInput = ({
    type,
    label,
    name,
    handleChange
}) => {
    return (
        <>
            {label && <label className="form-label">{label}</label>}
            <input
                type={type}
                name={name}
                className="form-control"
                onChange={handleChange}
            />
        </>
    )
}

export default EmInput
