import React, { useState } from "react";
import { Box, Typography, IconButton, Avatar, Badge } from "@mui/material";
import StudentRegistrationForm from "./StudentRegistrationForm";
import StudentsList2 from "./StudentsList2";

const StudentsList: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("home");

  const handleNavigation = (path: string, item: string) => {
    setSelectedItem(item);
    //
  };
  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box
        sx={{
          width: 208,
          bgcolor: "#1F2633",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        {/* Navigation links */}
        <Box sx={{ mt: 8, display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              py: "8px",
              pr: "10px",
              pl: "4px",
              color: "#FFF",
              fontSize: "15px",
              bgcolor: selectedItem === "home" ? "#637597" : "transparent",
              borderRadius: selectedItem === "home" ? "12px" : "0",
            }}
            onClick={() => handleNavigation("/home", "home")}
          >
            <img
              src="/assets/icons/home.svg"
              alt="Home"
              style={{ marginLeft: 8, width: 24, height: 24 }}
            />
            <Typography>صفحه اصلی</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              py: "8px",
              pr: "10px",
              pl: "4px",
              color: "#FFF",
              fontSize: "15px",
              bgcolor: selectedItem === "userList" ? "#637597" : "transparent",
              borderRadius: selectedItem === "userList" ? "12px" : "0",
            }}
            onClick={() => handleNavigation("/user-list", "userList")}
          >
            <img
              src="/assets/icons/profile-user.svg"
              alt="User List"
              style={{ marginLeft: 8, width: 24, height: 24 }}
            />
            <Typography>لیست کاربران</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#FFF",
              fontSize: "15px",
              py: "8px",
              pr: "10px",
              pl: "4px",
              bgcolor:
                selectedItem === "studentRegister" ? "#637597" : "transparent",
              borderRadius: selectedItem === "studentRegister" ? "12px" : "0",
            }}
            onClick={() =>
              handleNavigation("/student-register", "studentRegister")
            }
          >
            <img
              src="/assets/icons/user-add.svg"
              alt="Student Register"
              style={{ marginLeft: 8, width: 24, height: 24 }}
            />
            <Typography>ثبت نام دانش آموزان</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#FFF",
              fontSize: "15px",
              py: "8px",
              pr: "10px",
              pl: "4px",
              bgcolor:
                selectedItem === "studentsList" ? "#637597" : "transparent",
              borderRadius: selectedItem === "studentsList" ? "12px" : "0",
            }}
            onClick={() => handleNavigation("/studentsList", "studentsList")}
          >
            <img
              src="/assets/icons/note-text.svg"
              alt="Students List"
              style={{ marginLeft: 8, width: 24, height: 24 }}
            />
            <Typography>لیست دانش آموزان</Typography>
          </Box>
        </Box>
        {/* Logout button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#1F2633",
            mb: 3,
            cursor: "pointer",
            color: "#FFF",
            fontSize: "15px",
          }}
          onClick={handleLogout}
        >
          <img
            src="/assets/icons/logout.svg"
            alt="Home"
            style={{ marginLeft: 8, width: 24, height: 24 }}
          />
          <Typography>خروج</Typography>
        </Box>
      </Box>
      {/* Main content area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "white",
        }}
      >
        {/* Top bar */}
        <Box
          sx={{
            height: 32,
            px: 4,
            py: 2,
            bgcolor: "var(--white-100)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(220, 220, 220, 0.80)",
          }}
        >
          <Typography variant="body2" color="textSecondary">
            داشبورد / لیست دانش آموزان
          </Typography>

          <Box display="flex" alignItems="center" gap={2}>
            <IconButton color="inherit" aria-label="notifications">
              <Badge
                color="error"
                overlap="circular"
                variant="dot"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <img src="/assets/icons/notification.svg" alt="Notifications" />
              </Badge>
            </IconButton>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Avatar
                alt="User Profile"
                src="/assets/images/user-avatar.jpg"
                sx={{ width: 32, height: 32, objectFit: "cover" }}
              />
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">نام کاربر</Typography>
                <Typography variant="caption" color="textSecondary">
                  کاربر
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* <StudentRegistrationForm /> */}
        <StudentsList2 />
      </Box>
    </Box>
  );
};

export default StudentsList;
