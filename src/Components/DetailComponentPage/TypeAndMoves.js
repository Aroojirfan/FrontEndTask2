import React from 'react'
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Item } from "./styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const TypeAndMoves = ({data}) => {
  return (
    <div>
       <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          pl: 50,
          mt: -30,
          bgcolor: "background.paper",
          color: "red",
        }}
      >
        Types
        {data.types?.map(({ slot, type }) => (
          <ListItemButton key={slot} component="a" href="#simple-list">
            <ListItemText primary={type.name} />
          </ListItemButton>
        ))}
      </Box>
      <Typography variant="h5" color="red" marginTop={25}>
        Moves
      </Typography>
      <Grid
        style={{ padding: 60, color: " red" }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.moves?.map(({ move, index }) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>{move.name}</Item>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default TypeAndMoves
