import { makeStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 13),
  },
  button: {
    marginTop: "25px",
  },
  cardGrid: {
    paddingTop: "30px 10",
    paddingBottom: "50px ",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-between",
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "space-between",
  },
  cardMedia: {
    paddingTop: "76.25%",
  },
  cardContent: {
    flexGrow: "2",
  },
  footer: {
    backgroundColor: theme.palette.backgroundColor,
    padding: "9px 0",
    color: "white",
  },
  grid1: {
    display: "flex",
    justifyContent: "space-between",
  },
  category: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "-150px",
    marginBottom: "40px",
  },
}));
export default useStyles;
