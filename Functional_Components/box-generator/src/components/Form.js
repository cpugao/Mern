import React, { useState } from 'react';

const Form = (props) => {
    const {boxes, setBoxes} = props

    // let box = {
    //     color:"",
    //     width: "100px",
    //     height: "100px",
    // }

    const [color, setColor] = useState("");
    const [dimension, setDimension] = useState(0);

    const onChange = e => {
        setColor(e.target.value);
    }

    const onNumChange = e => {
        setDimension(e.target.value);
    }


    const onSubmit = (e) => {
        e.preventDefault();
        const newBox = {
            color: color,
            dimension: dimension
        }

        setBoxes([...boxes,newBox]);

        setColor("");
        setDimension(0);
    };

    return (
        <div>
            <form onSubmit={ onSubmit }>
                <label>Color </label>
                <input type="text" name="color" onChange={ onChange } value={color} />
                <label>Dimension </label>
                <input type="number" step="1" name="dimension" onChange={ onNumChange } value={dimension} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form;