import { useState } from "react";


function Todo(){

    const [tasks, setTasks]= useState([])

    function addTask(){

        const taskInput = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = "";


        setTasks(t => [...t, taskInput])

    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i)=> i != index))
    }





    return (

        <>
        <div>
            <h1>To-do List</h1>
            <input type="text" placeholder="Enter your task" id="taskInput"/>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((element, index) => 
                <li key={index}>{element} <button key={index} onClick={() => {
                    deleteTask(index)
                }}>Delete</button></li>
                )}
            </ul>
        </div>
        </>

    );
}
export default Todo