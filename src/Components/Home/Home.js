import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { STATUSES } from "../../store/Reducer/taskData";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiDataUsingAxios } from "../../store/Reducer/taskData";
import ReactPaginate from "react-paginate";
import "./Home.css";
import { Typography, Container, Grid } from "@material-ui/core";
import useStyles from "./styles";
import DataListItem from "./DataListItem";
import HomePagination from "./PaginationMaterialUi/HomePagination";
import Pagination from "@mui/material/Pagination";

const Home = () => {
  const pageSize=10;
  const { data, status } = useSelector((state) => state.taskData);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const [pagination, setpagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const pagesVisited = pageNumber * usersPerPage;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiDataUsingAxios());
  }, [pagination.from, pagination.to]);
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
  const handlePageChange= (page)=>{
    console.log(page)
    const from=(page-1)*pageSize;
    const to=(page-1)*pageSize+pageSize
    setpagination({...pagination, from:from, to:to})
  }
  
  const products = data?.results?.slice(pagination.from, pagination.to);
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
          {products?.map(({ name }) => (
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
        {/* <HomePagination pageCount={pageCount} /> */}
        <Pagination count={pageCount} color="secondary" onChange={(e)=>handlePageChange(e.target.textContent)} 
   
/>
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
