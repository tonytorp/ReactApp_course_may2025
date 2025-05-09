import styles from "./Header.module.css";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

/* pure html version
const Header = ({ title }) => {
    return (
      <div className={styles.container}>
        <h1>{title}</h1>
      </div>
    );
  };
*/
export default Header;
