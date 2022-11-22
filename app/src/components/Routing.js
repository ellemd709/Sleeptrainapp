import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorize from './Authorize';


const Routing = () => {

    return   
    (   <BrowserRouter>
        <Routes>
        <Route path='/' element={<Authorize/>}/>
        </Routes>
        </BrowserRouter>
    )
}
