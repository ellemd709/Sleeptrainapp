import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';


const TextInput = ({id,label,control}) => {

    return(
    <Controller  
    name={id}
    control = {control}
    defaultValue = ''
    render={({field:{onChange,value},fieldState:{error}})=>(
    <TextField id={id} label={label} onChange= {onChange} value= {value} error ={error} />
    )} />
    )

}

export default TextInput