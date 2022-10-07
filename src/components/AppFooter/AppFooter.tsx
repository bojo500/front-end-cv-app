import React from 'react';
import Typography from "@mui/material/Typography";
import {AppFooterWrapper} from "./AppFooterWrapper";
import Box from "@mui/material/Box";

export const AppFooter = () => {
    return (
        <AppFooterWrapper>
            <Box className="footerTextWrapper">
                <Typography>All copyright reserved</Typography>
            </Box>
        </AppFooterWrapper>
    )
};
