import {
  Stack,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
  },
  typography: {
    fontFamily: "var(--font-special-elite)",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            height: "3.5rem",
            borderRadius: "0.75rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            overflow: "hidden",
          },
          "& .MuiInputBase-root.Mui:hover": {
            border: "1px solid grey[400]",
          },
          "& .MuiInputBase-input": {
            color: "#000000",
            fontSize: "1.5rem",
          },
          "& .MuiInputLabel-outlined": {
            fontSize: "1.25rem",
          },
          "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
            fontSize: "1.04rem",
            color: "#000000",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          alignItems: "baseline",
          backgroundColor: "black",
          width: "9rem",
          height: "3.6rem",
          borderRadius: "0.75rem",
          fontSize: "1.8rem",
          "&:hover": {
            backgroundColor: "#222222",
          },
        },
      },
    },
  },
});

export default function AddTask() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          label="Type your task here..."
          variant="outlined"
          sx={{ width: "35.75rem" }}
        />
        <Button variant="contained">+ Add</Button>
      </Stack>
    </ThemeProvider>
  );
}
