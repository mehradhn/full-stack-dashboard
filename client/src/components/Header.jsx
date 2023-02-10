import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

function Header({ title, subtitle }) {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary[300]}
        sx={{ mb: "5" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
