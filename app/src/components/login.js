import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import { useForm } from "react-hook-form";
import { login } from '../utils/utils';

const Login = () => {

    const {control, handleSubmit} =useForm()
    const submit = (data) => {
        console.log (data)
    const response = login(data)
        console.log (response)
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
        <Box sx = {{flexDirection: 'column', display: 'flex'}}>

        <TextInput id={'UserName'} label={'User Name'} control = {control}/>
        <TextInput id={'password'} label={'Password'} control = {control}/>

        <Button variant="contained" type = 'submit'>Submit</Button> </Box>
    </form> 
    )
}
    
export default Login;