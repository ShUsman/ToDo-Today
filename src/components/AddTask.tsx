import { Stack, TextField, Button, createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff",
          },
          "& .MuiInputLabel-outlined": {
            color: grey[600],
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: grey[700],
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[400],
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[600],
            borderWidth: "1px",
          },
          "& .MuiInputBase-input": {
            color: "#000000",
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
          sx={{
            width: "35.75rem",
            "& .MuiInputBase-root": {
              height: "3.5rem",
              borderRadius: "0.75rem",
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "black",
            width: "9rem",
            height: "3.4rem",
            borderRadius: "0.75rem",
            fontSize: "1.5rem",
            // "&:hover": {
            //   backgroundColor: grey[900],
            // },
          }}
        >
          + Add
        </Button>
      </Stack>
    </ThemeProvider>
  );
}