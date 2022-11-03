import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import TextInput from './TextInput';

const Register = () => {
    const {control, handleSubmit} =useForm()
    const submit = (data) => {
        console.log (data)
    }

    return (
         <form onSubmit={handleSubmit(submit)}> 
        <Box sx = {{flexDirection: 'column', display: 'flex'}}>

        <TextInput id={'Email'} label={'Email'} control = {control}/>
       
         <TextInput id={'UserName'} label={'User Name'} control = {control}/>
       
        <TextInput id={'password'} label={'Password'} control = {control}/>
            
        
        <TextInput id={'firstname'} label={'First Name'} control = {control}/>
           
        <TextInput id={'lastname'} label={'Last Name'} control = {control}/>

        <Button variant="contained" type='submit'>Join Now</Button> </Box>
    </form> 
    )
}
    
export default Register;