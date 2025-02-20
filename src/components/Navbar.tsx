import { useState, MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { Page, NavigationLinks } from "../consts";

const navbarContainerStyles = {
  flexGrow: 1,
};

const titleStyles = {
  mr: 2,
  display: {
    xs: "none",
    md: "flex",
  },
  fontFamily: "Roboto",
  fontWeight: 900,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

const mobileMenuButtonStyles = {
  flexGrow: 1,
  display: {
    xs: "flex",
    md: "none",
  },
};

const mobileMenuStyles = {
  display: {
    xs: "block",
    md: "none",
  },
};

const desktopMenuStyles = {
  flexGrow: 1,
  display: {
    xs: "none",
    md: "flex",
  },
  justifyContent: "flex-end",
};

const buttonStyles = {
  my: 2,
  color: "#000000",
  display: "block",
  textTransform: "none",
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

interface NavbarProps {
  logo: ReactNode | string;
  pages: Page[];
}

export const Navbar = ({ logo, pages }: NavbarProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={navbarContainerStyles}>
      <AppBar color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={titleStyles}
          >
            {logo}
          </Typography>
          <Box sx={mobileMenuButtonStyles}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={mobileMenuStyles}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`${NavigationLinks[page]}`} style={linkStyle}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={desktopMenuStyles}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`${NavigationLinks[page]}`}
                sx={buttonStyles}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
