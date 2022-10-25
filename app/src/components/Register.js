import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Register = () => {


    return (
         <form> 
        <Box sx = {{flexDirection: 'column', display: 'flex'}}>
            <TextField
             required
            id="outlined-required"
            label="User Name"
            />
            <TextField
             required
            id="outlined-required"
            label="Password"
            
            />
            <TextField
             required
            id="outlined-required"
            label="First Name"
            
            />
            <TextField
             required
            id="outlined-required"
            label="Last Name"
            
            />
        <Button variant="contained">Submit</Button> </Box>
    </form> 
    )
}
    
export default Register;