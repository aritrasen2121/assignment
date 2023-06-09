import React, { useState } from "react";
import { countryData } from "../Data";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from "@mui/material";

const Multiselect = ({ value, readonly }) => {
  let selected=[];
  const [countryName, setCountryName] = useState(selected);
  const [display, setDisplay] = useState(false)

  if(value) {
    value.forEach((item) =>{
      countryData.map(ele => {
        if(item===ele.id){
          selected.push(ele.name)
        }
      })
    });
   }  

  const handleChecked = (e,name) => {
    if(e.target.checked ){
      setCountryName(prev => [
        ...prev,
        name
      ])
    }
    if(!e.target.checked){
      let arr
      arr = countryName.filter(item => item !== name)
      setCountryName(arr)
    }
  };

  
  return (
    <div className="flex flex-col justify-center items-center w-72 md:w-96">
      <p>Using Tailwind and regular JS</p>
      <div className="w-full border border-black">
      <input
        className="pl-2 w-60 md:w-[21rem] outline-none "
        value={countryName}
        type="text"
        placeholder="select choise"
      />
      <IconButton onClick={() =>setDisplay(!display)}>
      <KeyboardArrowDownIcon />
      </IconButton>
      </div>
      <ul className={display? 'border w-72 md:w-96' : 'hidden'}>
        {countryData.map((ele) => {
          return (
            <li key={ele.id} className="flex m-1">
              <input
                onChange={(e) => handleChecked(e,ele.name)}                
                type="checkbox" 
                checked={countryName.indexOf(ele.name) > -1} 
                disabled={readonly}              
              />
              <div>{ele.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Multiselect;
