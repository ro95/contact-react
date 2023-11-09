import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendIcon from "@mui/icons-material/Send";
import styles from "./form.module.scss";
import logoImage from "../assets/digital-airline-ovale.png";

function Copyright(props: any) {
	return (
		<Typography variant="body2" color="#000000" align="center" {...props}>
			{"Copyright © "}
			<Link color="#000000" href="https://mui.com/">
				Digital Airline - Greenday everywhere
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const defaultTheme = createTheme();

export default function SignUp() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			name: data.get("firstName"),
			lastname: data.get("lastName"),
		});
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
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
						style={{ height: "182px", marginBottom: "35px" }}
					/>
					<Avatar sx={{ m: 1, bgcolor: "#109db9" }}>
						<LockOutlinedIcon />
					</Avatar>{" "}
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 1 }}
					>
						<Grid container spacing={2}>
							<Grid
								className={styles.containerflex}
								item
								xs={12}
								sm={6}
								sx={{
									"& .MuiOutlinedInput-root": {
										"& fieldset": {
											borderColor: "#00263c", // set the border color to #00263c
										},
										"&:hover fieldset": {
											borderColor: "#00263c", // set the border color to #00263c on hover
										},
										"&.Mui-focused fieldset": {
											borderColor: "#00263c", // set the border color to #00263c when focused
										},

										"& input": {
											color: "#00263c", // Set the text color to #00263c
										},
									},
									"& label": {
										color: "#00263c", // Set the label color to #00263c
									},
									"& label.Mui-focused": {
										color: "#00263c", // Set the label color to #00263c when focused
									},
									"& .MuiInput-underline:before": {
										borderBottomColor: "#00263c", // Set the underline color before focus
									},
									"& .MuiInput-underline:after": {
										borderBottomColor: "#00263c", // Set the underline color on focus
									},
								}}
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
								sx={{
									"& .MuiOutlinedInput-root": {
										"& fieldset": {
											borderColor: "#00263c", // set the border color to #00263c
										},
										"&:hover fieldset": {
											borderColor: "#00263c", // set the border color to #00263c on hover
										},
										"&.Mui-focused fieldset": {
											borderColor: "#00263c", // set the border color to #00263c when focused
										},
										"& input": {
											color: "#00263c", // Set the text color to #00263c
										},
									},
									"& label": {
										color: "#00263c", // Set the label color to #00263c
									},
									"& label.Mui-focused": {
										color: "#00263c", // Set the label color to #00263c when focused
									},
									"& .MuiInput-underline:before": {
										borderBottomColor: "#00263c", // Set the underline color before focus
									},
									"& .MuiInput-underline:after": {
										borderBottomColor: "#00263c", // Set the underline color on focus
									},
								}}
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
							sx={{
								mt: 4,
								mb: 1,
								bgcolor: "#109db9",
								ml: 15,
								borderColor: "#00263c",
							}}
							endIcon={<SendIcon />}
						>
							Je m'envole
						</Button>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
}
