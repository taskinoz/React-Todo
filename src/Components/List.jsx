const ToDoList = ({
    list,
    updateList,
}) => {
  return (
    (Object.keys(list)).map(item =>
      <p>{list[item]} <span onClick={() => updateList(item,true)}>x</span></p>  
    )
  );
}

export default ToDoList