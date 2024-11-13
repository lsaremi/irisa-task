import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const rows = [
  {
    id: 1,
    firstName: "علی",
    lastName: "محمدی",
    gender: "مرد",
    field: "مهندسی",
    department: "علوم",
  },
  {
    id: 2,
    firstName: "زهرا",
    lastName: "کاظمی",
    gender: "زن",
    field: "پزشکی",
    department: "پزشکی",
  },
];

const columns = [
  { field: "firstName", headerName: "نام", flex: 1 },
  { field: "lastName", headerName: "نام خانوادگی", flex: 1 },
  { field: "gender", headerName: "جنسیت", flex: 1 },
  { field: "field", headerName: "رشته تحصیلی", flex: 1 },
  { field: "department", headerName: "دپارتمان", flex: 1 },
  {
    field: "actions",
    headerName: "",
    width: 70,
    sortable: false,
    renderCell: () => <ActionMenu />,
  },
];

const ActionMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>ویرایش</MenuItem>
        <MenuItem onClick={handleClose}>حذف</MenuItem>
      </Menu>
    </div>
  );
};

const CustomDataGrid = () => {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        "& .MuiDataGrid-root": {
          borderRadius: "12px",
          overflow: "hidden",
          border: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          bgcolor: "#F9F9FA",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "1px solid #e0e0e0",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 },
          },
        }}
        pageSizeOptions={[5]}
        // disableSelectionOnClick
      />
    </Box>
  );
};

export default CustomDataGrid;
