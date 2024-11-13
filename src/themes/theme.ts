// import { Theme, createTheme } from "@mui/material/styles";

// const theme = (outerTheme: Theme) =>
//   createTheme({
//     typography: {
//       fontFamily: "iranyekan, Arial, sans-serif",
//     },
//     direction: "rtl",
//     // palette: {
//     //   mode: outerTheme.palette.mode,
//     // },
//   });
// export default theme;

import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";

const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: "iranyekan, Arial, sans-serif",
    },
    palette: {
      primary: {
        main: "#4280EF",
      },
      secondary: {
        main: "#022973",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {},
          },
        },
      },
    },
  },
  faIR
);

export default theme;
