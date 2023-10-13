import React from "react";
import "./SortDropeBox.css";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar, Box, Typography } from "@material-ui/core";

import { ImFilter } from "react-icons/im";
import { Link } from "react-router-dom";

function SortDropeBox() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sortdrope-container">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="sortdrope-container-textdiv"
      >
       <Typography>Filter</Typography>  
        <Box className="sortdrope-container-img-div">
          {" "}
          <ImFilter className="sortdrope-container-img-icon" /> 
        </Box>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       <Link to="" className="sortdrope-container-link"> <MenuItem onClick={handleClose}>New as</MenuItem></Link>
       <Link to="" className="sortdrope-container-link"> <MenuItem onClick={handleClose}>Relnce</MenuItem></Link>
       <Link to="" className="sortdrope-container-link"> <MenuItem onClick={handleClose}>Populty</MenuItem></Link>
       <Link to="" className="sortdrope-container-link">  <MenuItem onClick={handleClose}>Price</MenuItem></Link>
       <Link to="" className="sortdrope-container-link"> <MenuItem onClick={handleClose}>Euation</MenuItem></Link>
    
       
      </Menu>
    </div>
  );
}

export default SortDropeBox;
