import React from "react";
import {Box} from "@mui/system";
import {TextField} from "@mui/material";

import styles from './form.module.scss';


const Form = () => {
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {m: 1, width: '25ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <Box className={styles.container}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="toto"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="toto"
          />
        </Box>
      </Box>
    );
}

  export default Form;
