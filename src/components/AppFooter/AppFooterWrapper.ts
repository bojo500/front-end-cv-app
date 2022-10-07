import {styled} from "@mui/material";
import Box from "@mui/material/Box";

export const AppFooterWrapper = styled(Box)`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  
  .footerTextWrapper {
    padding: 15px 0;
    background: #b0adad7a;
    color: #626060;
    width: 100%;
    text-align: center;
  }
`