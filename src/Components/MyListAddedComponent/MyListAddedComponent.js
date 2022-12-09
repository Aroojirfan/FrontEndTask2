import React from "react";
import { useSelector } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import MyListAddedItems from "./MyListAddedItems";
const MyListAddedComponent = () => {
  const { data } = useSelector((state) => state.MyListAddedData);
  return (
    <div>
      {data == "" ? (
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          No Items Added
        </Typography>
      ) : (
        <Grid
          style={{ padding: 60, color: " red" }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            My List Page
          </Typography>
          <Grid
            style={{ padding: 60, color: " red" }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data?.map(({values, dataid}) => (
              <MyListAddedItems key={dataid} dataid={dataid} values={values} />
            ))}
          </Grid>
        </Grid>
      )}
    </div>
  );
};
export default MyListAddedComponent;
