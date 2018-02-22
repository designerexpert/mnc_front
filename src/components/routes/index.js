import '../styles/index.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import Collections from '../collections';
import Note from '../note';

export default () => (
    <BrowserRouter>
        <div className='routeContainer'>
            <Route path='/' exact component={SignIn} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/collections' exact component={Collections} />
            <Route path='/note' exact component={Note} />
        </div>
    </BrowserRouter>
);
