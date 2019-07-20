import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const el = (
    <div>
    <h1>My Todo List</h1>
    <input placeholder = "search" />
        <ul>
            <li>Learn React</li>
            <li>Create awesome app</li>
        </ul>
    </div>
);
ReactDOM.render(el,
    document.getElementById('root'));