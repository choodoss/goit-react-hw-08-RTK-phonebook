import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography, TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { createUser } from "../../storage/Thunks";

const Registry = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(JSON.stringify({
            name,
            email,
            password,
        })));
    };

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
                Registry
            </Typography>
            <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: '10px', marginBottom: "10px" }}>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    type="text"
                    label="Email"
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
                Already have an account?{" "}
                <NavLink to="/">LogIn</NavLink>
            </Typography>
        </Box>
    );
};

export default Registry;

