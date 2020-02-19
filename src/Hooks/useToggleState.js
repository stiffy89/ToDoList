import {useState} from 'react';

export default toggleState => {
    const [toggle, setToggle] = useState(toggleState);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return [toggle, handleToggle];
}