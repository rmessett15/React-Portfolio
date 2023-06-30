import React from "react";
import Grid from "@mui/material/Grid";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";


// export default function Footer() {
//   return <p>I am the footer</p>;
// }



const Footer = () => {
    return (
      <div>
        <Grid container sx={{ color: "text.primary" }}>
          <Grid item xs={4}>
            <LinkedInIcon
              sx={{ fontSize: 50 }}
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/in/ryan-messett/")
              }
            />
            <GitHubIcon
              sx={{ fontSize: 50 }}
              onClick={(event) =>
                (window.location.href = "https://github.com/rmessett15")
              }
            />
            <EmailIcon
              sx={{ fontSize: 50 }}
              onClick={(event) =>
                (window.location.href = "mailto:rmessett15@gmail.com")
              }
            />
          </Grid>
        </Grid>
      </div>
    );}

export default Footer;
