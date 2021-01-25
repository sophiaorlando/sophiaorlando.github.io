
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { IconButton } from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import GetAppIcon from '@material-ui/icons/GetApp';
import './Footer.css'

const MyBottomNavigationAction = withStyles({
  root: {
    color: "white",
    "&.Mui-selected": {
      color: "white"
    },
    backgroundColor: "black",
  }
})(BottomNavigationAction);

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{ backgroundColor: "black", width: "100%", position: "fixed", bottom: "0" }}
    >
      <MyBottomNavigationAction label="GitHub" icon={<GitHubIcon onClick={() => window.open("https://github.com/sophiaorlando", "_blank")} />} />
      <MyBottomNavigationAction label="LinkedIn" icon={<LinkedInIcon onClick={event => window.open("https://www.linkedin.com/in/sophia-m-orlando/", "_blank")} />} />
      <MyBottomNavigationAction label="Email Me" icon={<MailOutlineIcon onClick={event => window.open("mailto:sophia19orlando@gmail.com", "_blank")} />} />
      <MyBottomNavigationAction label="Resume" icon={<GetAppIcon onClick={event => window.location.href = ("https://docs.google.com/document/d/1xRxno2DbYRoa2em5SR6_FY3u1pGXikhC5WwmlRCsvIg/export?format=pdf")} />}
      />

    </BottomNavigation>
  );
}
