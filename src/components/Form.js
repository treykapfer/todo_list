const Form = (props) => {
    const {list, setList} = props;
    
    let task={
        name: "",
        isComplete: false
    };
    
    const onChangeHandler = (e) => {
        task.name = e.target.value;
    }

    const onClickHandler = (e) => {
        setList([...list, task]);
    }

    return (
        <div>
            <input type="text" name="task" onChange = {onChangeHandler}/>
            <button onClick = {onClickHandler}>Add Task</button>
        </div>
    )

}

export default Form;