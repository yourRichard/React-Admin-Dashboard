import { Typography,Box,useTheme } from "@mui/material";
import { tokens } from "../theme";

import React from 'react'

const Header = ({title,subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box>
        <Typography
        variant="h2"
        fontWeight="bold"
        color={colors.gray[100]}
        sx={{mb: "5px"}}>
            {title}
        </Typography>
        <Typography
        variant="h5"
        color={colors.greenAccent[400]}
        >
            {subtitle}
        </Typography>
    </Box>
  )
}

export default Header