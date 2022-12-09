import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography, Grid, CardContent } from "@material-ui/core";
const DataListItem = ({ name }) => {
  return (
    <>
      <Grid item xs={6} sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <NavLink style={{ textDecoration: "none" }} to={`/Component/${name}`}>
            <Button size="medium" variant="contained" color="error">
              Check Detail
            </Button>
          </NavLink>
        </CardContent>
      </Grid>
    </>
  );
};
export default DataListItem;
