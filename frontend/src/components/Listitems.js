import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector, connect } from "react-redux";
import { getleads } from "../actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function SimpleAccordion() {
  const store = useSelector((state) => {
    return state.lead.leads;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getleads());
  }, [dispatch]);
  const classes = useStyles();
  const displayData = () => {
    return store.map((el) => {
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
  return <div className={classes.root}>{store.length && displayData()}</div>;
}

export default SimpleAccordion;
