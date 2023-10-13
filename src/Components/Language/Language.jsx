import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FormControl, InputLabel, Select, MenuItem, Box, Avatar, Card } from "@material-ui/core";
import "./Language.css"



const options = [
    {
      "cont": "ENGLISH",
      "flag": "https://gifscenter.com/wp-content/uploads/2017/05/UK-Flag.gif",
    },
    {
      "cont": "HINDI",
      "flag": "https://gifscenter.com/wp-content/uploads/2017/05/Indian%20Flag%20waving%20animation%20free%20download.gif",
    },
    {
      "cont": "SPANISH",
     "flag": "https://1.bp.blogspot.com/-ZHrPmGsRWGM/YnbMJLcQMoI/AAAAAAAA74o/NNjuhqN9gd0KtO572MlQiqGHttuRo9QEACNcBGAsYHQ/s0/Flag_of_Spain.gif",
    },
    {
      "cont": "JAPANESE",
      "flag": "https://1.bp.blogspot.com/-xcs3xgKJtmU/YDf-aVapWOI/AAAAAAAA4Ss/mpPLQNFSCmgpJwaVforC_7G9Zs0KLf48QCLcBGAsYHQ/s0/Flag_of_Japan.gif",
    },
    {
      "cont": "KOREAN",
      "flag": "https://1.bp.blogspot.com/-YYyplrbSUp8/YDggnUvfgTI/AAAAAAAA4VI/MBAjt2FWPPsFLlQMN9OuOUs9CKJOU_fFACLcBGAsYHQ/s0/Flag_of_South_Korea.gif",
    },
  ];

function Language() {

    const [values, setValues] = React.useState([
        "Bam",
        "Kate",
        "Nicole",
        "Aaron"
      ]);
      const [selected, setSelected] = useState("");
    
      function handleChange(event) {
        setSelected(event.target.value);
      }

  return (

    <div>

          <FormControl className="lan-cont">
      {/* <InputLabel htmlFor="agent-simple">Agent</InputLabel> */}
      <Select
        value={selected}
        onChange={handleChange}
        inputProps={{
          name: "agent",
          id: "age-simple"
        }}
      >
        {/* value={el.flag} */}
        {options.map((el, index) => {
          return (
            <Box style={{ display: "flex" }} value={el} key={index}>
              <MenuItem>{el.cont}</MenuItem>
              <MenuItem>
                <Avatar src={el.flag} style={{ borderRadius: 0 }} alt="" />
              </MenuItem>
            </Box>
          );
        })}
      </Select>
      {/* <>
      {
        selected==="" && (
          <Box display={"flex"}  >
          <MenuItem>{"ENGLISH"}</MenuItem>
          <MenuItem>
            <Avatar style={{ borderRadius: 0 }} src={"https://gifscenter.com/wp-content/uploads/2017/05/UK-Flag.gif"} alt="po" />
          </MenuItem>
          </Box>
        )
      }
      </> */}
    </FormControl>  


    </div>
  )
}

export default Language