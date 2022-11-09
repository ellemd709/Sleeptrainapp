import React, {useState} from 'react';
import Login from './login';
import Register from './Register';
import Button from '@mui/material/Button';

const Authorize = () => {
const [page,setPage]=useState(true)

if (page === true) {
    return (
        <>
        <Login/>
        <Button variant="contained" onClick={()=>setPage(!page)}>Create Account</Button> 
        </>
    )
} else {
    return (
        <>
        <Register/>
        <Button variant="contained" onClick={()=>setPage(!page)}>Login</Button> 
         </>

    )
}




}

export default Authorize