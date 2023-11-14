import * as React from "react";
import Ticket from "./Components/ticket/Ticket";
import Form from "./Components/Form";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <Router>
                <Routes>
                    <Route path="/" element={<Form/>}/>
                    <Route path="/ticket" element={<Ticket/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
