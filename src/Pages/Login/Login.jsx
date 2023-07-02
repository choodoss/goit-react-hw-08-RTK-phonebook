import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../storage/Thunks";
import { Typography, TextField, Button, Box } from "@mui/material";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
    };

    //choo@choo.com
    //12345678

    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <Typography variant="h5" component="h1" sx={{
                marginBottom: "10px"
            }}>
                Login
            </Typography>
            <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: '10px', marginBottom: "10px" }}>
                <TextField
                    label="Username"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
            <Typography variant="body1" component="p">
                Don't have an account?{" "}
                <NavLink to="/register">Register</NavLink>
            </Typography>
        </Box>
    );
};

export default Login;