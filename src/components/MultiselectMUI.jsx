import React, { useState } from "react";
import { countryData } from "../Data";
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
const MultiselectMUI = ({ value, readonly }) => {
  let selected=[];
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  value?.forEach((item) =>{
    countryData.map(ele => {
      if(item===ele.id){
        selected.push(ele.name)
      }
    })
  });
  
  const [countryName, setCountryName] = useState(selected);
  
  const handleChange = (event) => {
    if(!readonly){
      const {
        target: { value },
      } = event;
      setCountryName(
        value
      );
    }
  };
  return (
    <Box
      width={400}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Typography textAlign={"center"}>Using material UI</Typography>
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={countryName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {countryData.map((ele) => (
            <MenuItem key={ele.id} value={ele.name}>
              <Checkbox disabled={readonly} checked={countryName.indexOf(ele.name) > -1} />
              <ListItemText primary={ele.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MultiselectMUI;
