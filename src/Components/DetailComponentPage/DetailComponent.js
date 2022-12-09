import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUSES } from "../../store/Reducer/SingleDataDetail";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledTypography } from "../Navbar/NavStyle";
import { fetchDetail } from "../../store/Reducer/SingleDataDetail";
import { addToMyList } from "../../store/Reducer/MyListAddedData";
import { useFormik } from "formik";
import TypeAndMoves from "./TypeAndMoves";
import Alert from '@mui/material/Alert';
const DetailComponentPage = () => {
  const { data, status } = useSelector((state) => state.SingleDataDetail);
  const { name } = useParams();
  const [nickName, setnickName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetail(name));
  }, [name]);
  const formik = useFormik({
    initialValues: {
      nickName: "",
      name: name,
    },
    onSubmit: (values,{ resetForm }) => {
      setnickName(values.nickName);
      dispatch(addToMyList({values,dataid:data.id}));
      resetForm({ values: "" });
      <Alert severity="success">This is a success alert — check it out!</Alert>
      
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="Enter NickName">NickName</label>
            <input
              id={data.id}
              name="nickName"
              type="nickName"
              onChange={formik.handleChange}
              value={formik.values.nickName}
            />
            <Button size="small" color="error" type="submit">
              Add to Favourite
            </Button>
          </form>
        </CardActions>
      </Card>
      <TypeAndMoves data={data} />
    </main>
  );
};

export default DetailComponentPage;
