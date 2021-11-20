import React, { Fragment, useState } from 'react';
// components
import Input from './Input';
// styled components
import { Form } from '../../styledComponents/LogInStyles';
// redux
import { useDispatch } from 'react-redux';
import { setProfile } from '../../redux-toolkit/slices/profile';
import InputImage from './InputImage';

function LogIn() {
  const dispatch = useDispatch()
  // state inputs
  const [name, setName] = useState({value: "", valid: null })
  const [lastName, setLastName] = useState({value: "", valid: null })
  // const [userName, setUserName] = useState({value: "", valid: null })
  // const [image, setimage] = useState({value: "", valid: null })
  const [image, setImage] = useState(null)
  // Regular Expressions
  const regularExpressions = {
    user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    link:  /^(ftp|http|https):\/\/[^ "]+$/, // para validar links
    name: /^[a-zA-ZÀ-ÿ\s]{1,10}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
  }  
  // onSubmit
  const handlerSubmit = e => {
    e.preventDefault();
    if (name.valid & lastName.valid) {
      configureProfile(name.value, lastName.value, image)
    }
  }  
  const configureProfile = (Name, LastName, Image) => {
    dispatch(setProfile({ name: Name, lastName: LastName, image: Image, isLogged: true}));
  }
return (
    <Fragment>
      <Form onSubmit={handlerSubmit}>
        <h1>Welcome to English Notes app</h1>
        <Input
          title={"Name"}
          placeholder={"Thomas"}
          type={"text"}
          state={name}
          setState={setName}
          expressions={regularExpressions.name} />    
        <Input
          title={"Last Name"}
          placeholder={"Willson "}
          type={"text"}
          state={lastName}
          setState={setLastName}
          expressions={regularExpressions.name} />    
        {/* <Input
          title={"User name"}
          placeholder={"ThomWill_25"}
          type={"text"}
          state={userName}
          setState={setUserName}
          expressions={regularExpressions.user} />     */}
        <InputImage setState={setImage} state={image} />
        <button >
          Log In
        </button>
      </Form>           
    </Fragment>
  )
}

export default LogIn
