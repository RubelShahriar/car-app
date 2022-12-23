import { Alert, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const getValueFromInput = (e) => {
    setEmail(e.target.value);
  };
  const handleOnsubmit = (e) => {
    const user = { email };
    fetch("https://carzone-server.onrender.com/users/admin", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
    e.target.value = "";
    e.preventDefault();
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Grid xs={12} sm={1} md={2} lg={3}></Grid>
      <Grid xs={12} sm={10} md={8} lg={6}>
        <div className="make-admin">
          <h3 style={{ fontSize: "25px" }}>Make An Admin</h3>
          <form onSubmit={handleOnsubmit}>
            <input
              type="email"
              onBlur={getValueFromInput}
              placeholder="Enter an user email"
            ></input>
            <button type="submit">Make Admin</button>
          </form>
          {success && (
            <Alert sx={{ mt: "10px" }} severity="success">
              Made An Admin Successfully — check it out!
            </Alert>
          )}
          <div className="note">
            <span style={{ fontWeight: "bold" }}>Note: </span>Only An Admin can
            make another user role to Admin. Admin have some speacial freature
            like he can see and access some hidden page of this website. Also he
            can make another user role to admin. If you are not an Admin - You
            can skip this page.
          </div>
        </div>
      </Grid>
      <Grid xs={12} sm={1} md={2} lg={3}></Grid>
    </Box>
  );
};

export default MakeAdmin;
