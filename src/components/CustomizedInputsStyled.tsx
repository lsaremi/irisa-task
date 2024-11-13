import { Box, InputLabel, TextField } from "@mui/material";

interface CustomizedInputsStyledProps {
  label: string;
}

export default function CustomizedInputsStyled({
  label,
}: CustomizedInputsStyledProps) {
  return (
    <Box dir="rtl">
      <InputLabel
        htmlFor="custom-input"
        sx={{ color: "#292929", fontWeight: "600", marginBottom: "8px" }}
      >
        {label}
      </InputLabel>

      <TextField
        hiddenLabel
        sx={{
          backgroundColor: "#F7F7F7",

          width: "100%",
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            padding: "2rem",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        }}
      />
    </Box>
  );
}
