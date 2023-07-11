// Imports
import React from "react";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";

// Function that renders the footer
const Footer = () => {
  return (
    <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Grid
        style={{ display: "flex", justifyContent: "center" }}
        container
        sx={{ color: "text.primary" }}
      >
        <Grid
          style={{ display: "flex", justifyContent: "space-evenly" }}
          item
          xs={4}
        >
          <LinkedInIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href =
                "https://www.linkedin.com/in/ryan-messett/")
            }
          />
          <GitHubIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "https://github.com/rmessett15")
            }
          />
          <TwitterIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "https://twitter.com/rmessett15")
            }
          />
          <EmailIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "mailto:rmessett15@gmail.com")
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

// Export
export default Footer;
