import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CustomDataGrid from "../components/CustomDataGrid";

const StudentsList2 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F8F8F8",
        overflowY: "auto",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: 2,
        px: 5,
        py: 4,
      }}
    >
      {/* Title */}
      <Typography
        component="h2"
        sx={{ fontSize: "20px", fontWeight: 600, color: "#292929" }}
      >
        لیست دانش‌آموزان
      </Typography>
      <Box
        sx={{
          bgcolor: "white",
          flex: 1,
          p: 3,
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CustomDataGrid />
      </Box>
    </Box>
  );
};

export default StudentsList2;
