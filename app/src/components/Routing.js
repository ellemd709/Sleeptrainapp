import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorize from './Authorize';


const Routing = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Authorize />} />
                <Route path='*' element ={<h5>Page Not Found</h5>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;