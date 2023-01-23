import React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const ReusableInput = (props) => {
  const classes = useStyles();
  const { onChange, label, name, value } = props;
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      value={value}
      onChange={onChange}
      name={name}
      className={classes.width}
      style={{ width: 700, height: 50 }}
      InputLabelProps={{
        style: {
          fontSize: 12,
        },
      }}
    />
  );
};

export default ReusableInput;

const useStyles = makeStyles({
  width: "600px !important",
  height: "50px !important",
});
