 import React, {ReactNode} from "react";
// import {LayoutWrapper} from './LayoutWrapper';
// import Box from "@mui/material/Box";
// import {Button} from "@mui/material";
// import {useColorScheme} from "@mui/material/styles";
//
// interface LayoutProps {
//     children: ReactNode;
// }
//
// export const Layout = (props: LayoutProps) => {
//     const { mode, setMode } = useColorScheme();
//     const [mounted, setMounted] = React.useState(false);
//
//     React.useEffect(() => {
//         setMounted(true);
//     }, []);
//     return (
//         <LayoutWrapper>
//             <Button
//                 variant="outlined"
//                 onClick={() => {
//                     if (mode === 'light') {
//                         setMode('dark');
//                     } else {
//                         setMode('light');
//                     }
//                 }}
//             >
//                 {mode === 'light' ? 'Dark' : 'Light'}
//             </Button>
//             <Box className="childrenWrapper">
//                 {props.children}
//             </Box>
//         </LayoutWrapper>
//     )
// }