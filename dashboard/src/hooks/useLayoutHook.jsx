import { useState } from "react";

const useLayoutHook = () => {
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    return {
        collapse,
        handleCollapse
    }
}

export default useLayoutHook
