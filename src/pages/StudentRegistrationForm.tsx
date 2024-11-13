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

const StudentRegistrationForm = () => {
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
        ثبت نام دانش‌آموزان
      </Typography>

      {/* Registration Form */}
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
        <Box sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
          {/* Name and Family Name */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField fullWidth label="نام" variant="outlined" />
            <TextField fullWidth label="نام خانوادگی" variant="outlined" />
          </Box>
          {/* Gender */}
          <FormControl fullWidth>
            <InputLabel>جنسیت</InputLabel>
            <Select defaultValue="" label="جنسیت">
              <MenuItem value="male">مرد</MenuItem>
              <MenuItem value="female">زن</MenuItem>
            </Select>
          </FormControl>
          {/* Field of Study */}
          <TextField fullWidth label="رشته تحصیلی" variant="outlined" />
          {/* Department */}
          <FormControl fullWidth>
            <InputLabel>دپارتمان</InputLabel>
            <Select defaultValue="" label="دپارتمان">
              <MenuItem value="science">علوم</MenuItem>
              <MenuItem value="arts">هنر</MenuItem>
              <MenuItem value="engineering">مهندسی</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "12px",
              px: 4,
              color: "#9A9A9A",
              borderColor: "#9A9A9A",
            }}
          >
            انصراف
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#044FDA", borderRadius: "12px", px: 9 }}
          >
            ثبت نام
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentRegistrationForm;
