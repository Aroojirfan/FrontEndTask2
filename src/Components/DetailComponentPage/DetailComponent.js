import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUSES } from "../../store/Reducer/SingleDataDetail";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledTypography } from "../Navbar/NavStyle";
import { fetchDetail } from "../../store/Reducer/SingleDataDetail";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Item } from "./styles";
const DetailComponentPage = () => {
  const { data, status } = useSelector((state) => state.SingleDataDetail);
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetail(name));
  }, [name]);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <main style={{ padding: "100px" }}>
      <StyledTypography
        variant="h4"
        noWrap
        component="a"
        href="/"
        style={{ paddingLeft: "600px", color: "red" }}
      >
        Component Detail Page
      </StyledTypography>
      <Card sx={{ maxWidth: 345 }} style={{ padding: "1px" }}>
        <CardMedia
          component="img"
          height="240"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {`Title: ${name}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`height:${data.height}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="error">
            Add to Favourite
          </Button>
        </CardActions>
      </Card>
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
    </main>
  );
};

export default DetailComponentPage;
