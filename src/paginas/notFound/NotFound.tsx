import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';

import './NotFound.css';

import React from "react";

function NotFound() {
  return (
    <div id="error-page">
      <div className="content">
        <h2 className="header">{"404"}</h2>
        <h4>{"Opps! Page not found"}</h4>
        <p>
          {
            "Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem."
          }
        </p>
        <div className="btns">
          <a href="https://avozes.netlify.app/home">Return home</a>
        </div>
      </div>
    </div>
  );
}


export default NotFound;