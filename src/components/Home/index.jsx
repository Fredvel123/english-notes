import React, { Fragment, useState } from 'react'
// components
import AddTask from './AddTasks'
import Profile from './Profile';
// redux

function Home() {
  // code to close and open the 'add task section'
  const [openCloseInput, setopenCloseInput] = useState(false);
  const handlerInput = () => {
    setopenCloseInput(!openCloseInput)
  }
  return (
    <Fragment>
      <Profile />
      <h1>this are the tasks</h1> 
      <button onClick={handlerInput} >+</button>

      <AddTask open={openCloseInput} callback={handlerInput} />
    </Fragment>
  )
}
export default Home;
