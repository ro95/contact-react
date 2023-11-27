import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendIcon from "@mui/icons-material/Send";
import styles from "./form.module.scss";
import logoImage from "../assets/digital-airline-ovale.png";
import {useNavigate} from "react-router";
import Copyright from "./Copyright/Copyright";

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
     const firstName=  data.get("firstName");
     const lastName=  data.get("lastName");

    navigate({
      pathname: '/ticket',
      search: `?firstName=${firstName}&lastName=${lastName}`,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={logoImage}
            alt="Logo Digital Airline"
            style={{height: "182px", marginBottom: "35px"}}
          />
          <Avatar sx={{m: 1, bgcolor: "#109db9"}}>
            <LockOutlinedIcon/>
          </Avatar>{" "}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid
                className={styles.containerflex}
                item
                xs={12}
                sm={6}
              >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  id="firstName"
                  label="Nom"
                  autoFocus
                />
              </Grid>
              <Grid
                className={styles.containerflex}
                item
                xs={12}
                sm={6}
              >
                <TextField
                  required
                  id="lastName"
                  label="Prénom"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <Button
              className={styles.containerflexbutton}
              size="medium"
              type="submit"
              variant="contained"
              sx={{mt: 4, mb: 1, bgcolor: "#109db9", ml: 15, borderColor: "#00263c"}}
              endIcon={<SendIcon/>}
            >
              Je m'envole
            </Button>
          </form>
        </Box>
      <Box sx={{mt: 5}}>
        <Copyright companyName='Digital Airline - Greenday everywhere' />
      </Box>
    </Container>
  );
}
