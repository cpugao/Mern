import React from 'react';

const Task = (props) => {
    const  { task, index, list, setList } = props;
    
    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
    });
    };
    
    const onChange = (e) => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    return (
        <div className="container">
            <h3>{task.name}</h3>
            <lable htmlFor="checkbox">Completed</lable>
            <input onChange={onChange} type="checkbox" checked={task.isComplete}/>
            <button className="btn-btn-sm btn-danger" onClick={onClick}>X</button>
        </div>
    )
}

export default Task;