const Task = (props) => {
    const {task, index, list, setList } = props;

    const onClickHandler2 = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    }

    const onChangeHandler2 = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return (
        <div>
            <h4>{task.name}</h4>
            <label htmlFor='checkbox'>Completed?</label>
            <input type='checkbox' name='checkbox' checked = {task.isComplete} onChange = {onChangeHandler2}/>
            <button onClick = {onClickHandler2}>X</button>
        </div>
    )
}

export default Task