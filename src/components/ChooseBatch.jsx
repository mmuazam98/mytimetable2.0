import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 1,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 2,
  },
}));
const ChooseBatch = (props) => {
  const classes = useStyles();
  const currBatch = localStorage.getItem("batch") || 1;
  const [batch, setBatch] = useState(parseInt(currBatch));

  const handleChange = (event) => {
    setBatch(event.target.value);
    localStorage.setItem("batch", event.target.value);
    props.showTimetable();
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Batch</InputLabel>
      <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={batch} onChange={handleChange} label="batch">
        <MenuItem value={1}>Batch 1</MenuItem>
        <MenuItem value={2}>Batch 2</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ChooseBatch;
