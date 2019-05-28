import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';

class Signup extends Component {
    
    state = {
        email: "",
        username: "",
        password: "",
        signup: false
    };

    validateForm() {
        return this.state.username.length > 0 && this.state.password.legnth > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        let form = event.target
        let obj = {};
        for (let i = 0; i < form.elements.length; i++) {
            let values = form.elements[i].value;  
            let inputId = form.elements[i].id;
            obj[inputId]  =  values;
        }
    }
}
