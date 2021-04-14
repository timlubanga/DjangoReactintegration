import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/lead/api/lead/")
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const classes = useStyles();
  const displayData = () => {
    return items.map((el) => {
      return (
        <Accordion key={el.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{el.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{el.message}</Typography>
          </AccordionDetails>
        </Accordion>
      );
    });
  };
  return <div className={classes.root}>{items.length && displayData()}</div>;
}
