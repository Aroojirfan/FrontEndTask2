import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { STATUSES } from "../../store/Reducer/taskData";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiDataUsingAxios } from "../../store/Reducer/taskData";
import ReactPaginate from "react-paginate";
import "./Home.css";
import { Typography, Container, Grid, CardActions } from "@material-ui/core";
import useStyles from "./styles";
import DataListItem from "./DataListItem";

const Home = () => {
  const { data, status } = useSelector((state) => state.taskData);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiDataUsingAxios());
  }, []);
  const pageCount = Math.ceil(data.count / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const classes = useStyles();

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      <main>
        <div className={classes.container}>
          <Container maxWidth="md">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              List of Items
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            ></Typography>
          </Container>
        </div>
        <Grid container columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
          {data?.results
            ?.slice(pagesVisited, pagesVisited + usersPerPage)
            ?.map(({ name }) => (
              <DataListItem name={name} />
            ))}
        </Grid>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
