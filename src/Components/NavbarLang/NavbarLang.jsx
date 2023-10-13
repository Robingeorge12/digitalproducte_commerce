import React from "react";
import "./NavbarLang.css";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Avatar, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

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

function NavbarLang() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget)
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    console.log(event)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbarLang-div">
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          // aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText
            // primary="When device is locked"
            // secondary={options[selectedIndex]}
            // secondary={`#{}`}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="navbarLang-main-div"
      >
        {options?.map((option, index) => (
          <MenuItem
            key={index}
            disabled={index === 0}
            selected={index === selectedIndex}
            // onClick={(event) => handleMenuItemClick(event, index)}
            onClick={() => handleMenuItemClick(option)}
            className="navbarLang-div-box1"
          >
            
            <Box>{option.cont}</Box>
            <Avatar  variant="square" src={option.flag} alt="pic" />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default NavbarLang;
