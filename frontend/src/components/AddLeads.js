import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50%",
    },
  },
}));

export default function AddLeads() {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/lead/api/lead/", data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onchangeHandler = (el, type) => {
    console.log(type);
    const dataset = { ...data, [type]: el.target.value };
    setData({ ...dataset });
    console.log(data);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(el) => onchangeHandler(el, "name")}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(el) => onchangeHandler(el, "email")}
      />
      <TextField
        id="outlined-basic"
        label="Message"
        multiline
        variant="outlined"
        onChange={(el) => onchangeHandler(el, "message")}
      />
      <Button onClick={handleSubmit} variant="outlined" color="secondary">
        Post
      </Button>
    </form>
  );
}
