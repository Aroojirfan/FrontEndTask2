import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import BookIcon from "@mui/icons-material/Book";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { StyledTypography } from "./NavStyle";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from "react-redux";
const pages = ["Home", "Summary", "Blog"];

function ResponsiveAppBar() {
  const { data } = useSelector((state) => state.MyListAddedData);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const darkTheme = createTheme({
    palette: {
      mode: "#CB1724 ",
      primary: {
        main: "#CB1724 ",
      },
    },
  });
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="sticky" theme={darkTheme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BookIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <StyledTypography variant="h6" noWrap component="a" href="/">
            MYAPP
          </StyledTypography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <StyledTypography
            variant="h5"
            noWrap
            component="a"
            href=""
          ></StyledTypography>
             
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          </Box>
          <AddShoppingCartIcon style={{paddingLeft:20}}/>
          <Badge
        badgeContent={data.length}
        color="primary"
        id="basic-button"
        style={{marginTop:-20, }}
      >
        </Badge>
        <StyledTypography
              sx={{ mb: 2 , p:3, color: "white", display: "block" }}
              variant="h6"
              noWrap
              component="a"
              href="/MyList"
             
            >
              MYList
            </StyledTypography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
