import React from "react";
import { useDispatch } from "react-redux";
import {
  Typography,
  CardContent,
  Card,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import { deleteFromMyList } from "../../store/Reducer/MyListAddedData";
import Button from "@mui/material/Button";
const MyListAddedItems = ({ dataid, values }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card key={dataid} sx={{ maxWidth: 45 }} style={{ padding: "1px" }}>
        <CardMedia
          component="img"
          height="240"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${dataid}.svg`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`Title: ${values.name}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {`nickName: ${values.nickName}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="error"
            onClick={() => dispatch(deleteFromMyList(dataid))}
          >
            DELETE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MyListAddedItems;
