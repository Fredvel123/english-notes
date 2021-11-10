import React, { Fragment, useState } from 'react'
import InputRadio from './InputRadio';
// components
import InputText from './InputText';

function AddTask() {
  const [title, setTitle] = useState({value: "", valid: null});
  const [task, setTask] = useState({value: "", valid: null});
  const [categories, setCategories] = useState(null)
  const [tasks, setTasks] = useState([
    {
      title: "title1",
      description: "lorem dasdad",
      category: "study"
    },
    {
      title: "title12",
      description: "lorem dasdasddad",
      category: "work"
    }
  ]);
  
  // regulare expressions
  const regularExpressions = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.
  //  submit
  const handlerSubmit = e => {
    e.preventDefault();
    addTasks(title.value, task.value, categories )
  }
  //  code to add a new task
  const addTasks = (titleItem, descItem, categoryItem) => {
    if (!tasks.find(t => t.title === titleItem ) ) {    
      setTasks([...tasks, {title: titleItem, description: descItem, category: categoryItem}])
    }
  }

  return (
    <Fragment>
      <form onSubmit={handlerSubmit}>
        <InputText 
          placeholder={"Task Title"}
          state={title}
          setState={setTitle}
          validation={regularExpressions} />  
        <InputText 
          placeholder={"Task description"}
          state={task}
          setState={setTask} 
          validation={regularExpressions} />  
        <InputRadio title={"Work"} value={"work"} state={categories} setState={setCategories}/>
        <InputRadio title={"Study"} value={"study"} state={categories} setState={setCategories}/>
        <InputRadio title={"Peronal"} value={"personal"} state={categories} setState={setCategories}/>
        <button>Add task</button>
      </form>   
    </Fragment>
  )
}

export default AddTask
