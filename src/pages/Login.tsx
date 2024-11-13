import React, { useState } from "react";
import { Button, Typography, Box, Link, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomizedInputsStyled";
import WelcomeImage from "../components/WelcomeImage";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "72px",
          flex: 0.9,
          padding: "79px 40px 40px 40px",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          color="#3D3D3D"
          fontWeight={600}
        >
          ورود به حساب کاربری
        </Typography>

        <Box component="form" noValidate sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <CustomInput
              label="نام کاربری"
              // value={inputValue}
              // onChange={handleInputChange}
            />
            <CustomInput
              label="رمز عبور"
              // value={inputValue}
              // onChange={handleInputChange}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: "54px",
              mb: "24px",
              bgcolor: "#044FDA",
              borderRadius: "12px",
              paddingY: "14px",
              fontSize: "15px",
            }}
          >
            ورود
          </Button>
          <Box
            display="flex"
            alignItems="center"
            mt={2}
            sx={{ direction: "ltr" }}
          >
            <Typography variant="body2">حساب کاربری ندارید؟</Typography>
            <Link
              variant="body2"
              color="primary"
              sx={{ ml: 1, cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              ایجاد حساب کاربری
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          height: "97.8%",
          margin: "10px",
          borderRadius: "31px",
          background: "#F7F7F7",
          gap: "48px",
        }}
      >
        <Typography
          color="#373737"
          fontWeight={800}
          letterSpacing={-0.456}
          variant="h5"
          component="h2"
        >
          خوش آمدید
        </Typography>

        <WelcomeImage />
      </Box>
    </Box>
  );
};

export default LoginPage;
