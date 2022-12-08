import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FooterItems from "./FooterItems";
const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", bgcolor: "#CB1724", color: "white.700"  }}>
      <Container maxWidth="md" sx={{ py: 1, width: "100%", mx: 39 }}>
        <Stack spacing={4}>
          <Typography></Typography>
          <Box>
            <FooterItems />
          </Box>
          <Box>
            <Select name="lang" variant="outlined"size="small" defaultValue="EN">
              <MenuItem value="ID">Bahasa Indonesia</MenuItem>
              <MenuItem value="EN">English</MenuItem>
            </Select>
          </Box>
          <Typography textAlign="center" variant="h5">
            Assignment 2 &reg; 2022
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
