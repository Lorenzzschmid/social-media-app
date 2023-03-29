import React from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core'

import useStyles from './styles'; 

const Form = () => {
    const classes = useStyles(); 

    const handleSubmit = () => {

    }

    return (
        <paper className={classes.paper}>
            <form autoComplet="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Memory</Typography>
            </form>
        </paper>
    ); 
}

export default Form; 