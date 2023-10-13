import React from "react";
import "./NavbarMenu.css";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCaretDown } from "react-icons/ai";

import { Box, Card, Divider, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function NavbarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Box className="navbarmenu-icon-box">
            <GiHamburgerMenu className="navbarmenu-icon" />
          </Box>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Box className="navbarmenu-box1-details-scroll">
            <Card className="navbarmenu-box1-details-div">
              <Box className="navbarmenu-box1-details-buy">
                <Typography
                  style={{ fontFamily: "sans-serif", fontSize: "14px" }}
                >
                  {" "}
                  Buy
                </Typography>
                <AiOutlineCaretDown />
              </Box>

              <Divider style={{ color: "#17a2b8" }} />

              <Link to="" className="navbarmenu-box1-details-buy-list">
                <MenuItem onClick={handleClose}>Source Codes</MenuItem>
              </Link>

              <Link to="" className="navbarmenu-box1-details-buy-list">
                <MenuItem onClick={handleClose}>OSS Plans</MenuItem>
              </Link>
              <Link to="" className="navbarmenu-box1-details-buy-list">
                <MenuItem onClick={handleClose}>IoT Codes</MenuItem>
              </Link>

              <Link to="" className="navbarmenu-box1-details-buy-list">
                <MenuItem onClick={handleClose}>IoT Hardware</MenuItem>
              </Link>

              <Divider style={{ color: "#17a2b8" }} />
            </Card>

            <Card variant="none" className="navbarmenu-box1-details-div2">
              <Box className="navbarmenu-box1-details-buy">
                <Typography
                  style={{ fontFamily: "sans-serif", fontSize: "14px" }}
                >
                  {" "}
                  Sell
                </Typography>
                <AiOutlineCaretDown />
              </Box>

              <Divider style={{ color: "#17a2b8" }} />

              <Link to="" className="navbarmenu-box1-details-buy-list">
                <MenuItem onClick={handleClose}>Sell Codes</MenuItem>
              </Link>

              <Link to="" className="navbarmenu-box1-details-buy-list">
                <MenuItem onClick={handleClose}>Sell Source Codes</MenuItem>
              </Link>

              <Link to="" className="navbarmenu-box1-details-buy-list">
                <MenuItem onClick={handleClose}>Sell OSS Plans</MenuItem>
              </Link>
              <Link to="" className="navbarmenu-box1-details-buy-list">
                <MenuItem onClick={handleClose}>Sell IoT Codes</MenuItem>
              </Link>

              <Link to="" className="navbarmenu-box1-details-buy-list">
                <MenuItem onClick={handleClose}>Sell IoT Hardware</MenuItem>
              </Link>

              <Divider style={{ color: "#17a2b8" }} />
            </Card>

            <Link to="" className="navbarmenu-box1-details-postReq">
              <MenuItem onClick={handleClose}>Post Requests</MenuItem>
            </Link>

            <Link to="" className="navbarmenu-box1-details-cor">
              <MenuItem onClick={handleClose}>Corporate Solutions</MenuItem>
            </Link>

            <Link to="" className="navbarmenu-box1-details-shop">
              <MenuItem onClick={handleClose}>Shop by Category</MenuItem>
            </Link>

            <Box className="navbarmenu-box1-details-web">
              <Box className="navbarmenu-box1-details-web-div">
                <Typography
                  style={{ fontFamily: "sans-serif", fontSize: "14px" }}
                >
                  {" "}
                  Sell
                </Typography>
                <AiOutlineCaretDown />
              </Box>
              <Divider />

              <Box className="navbarmenu-box1-details-web-listdiv">
                <Box className="navbarmenu-box1-details-web-list"></Box>
              </Box>
            </Box>
          </Box>
        </Menu>
      </div>
    </div>
  );
}

export default NavbarMenu;
