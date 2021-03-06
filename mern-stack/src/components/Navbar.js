import React from "react";
import { AppBar, Toolbar, IconButton, MenuItem, Typography, Button } from "@material-ui/core";

function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className=''
            color="inherit"
            aria-label="menu"
          >
            <MenuItem />
          </IconButton>
          <Typography variant="h6" className='' style={{marginRight: '90%'}}>
            VALR
          </Typography>
          <Button style={{textAlign: 'right'}} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
