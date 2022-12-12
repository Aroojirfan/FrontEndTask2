import React,{useState} from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const pageSize=3;
const HomePagination = ({ pageCount }) => {
  const [pagination, setpagination] = useState({
    count:0,
    from:0,
    to:pageSize
  });
  
  return (
    <div>
      <Stack spacing={2}>
        <Pagination count={pageCount} color="secondary" />
      </Stack>
    </div>
  );
};

export default HomePagination;
