// src/Dashboard.js
import React from "react";
import { AppBar, Toolbar, IconButton, InputBase, Avatar } from "@mui/material";
import {
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Upperbar from "../Upperbar";
import Sidebar from "../Sidebar";
import "./dashboard.css";

const Dashboard = () => {
  const rows = [
    {
      id: 1,
      workCard: "#01245687",
      reason: "UNSPECIFIED",
      rejectedBy: "Ram Gopal Sharma",
      rejectionTime: "10-06-2023",
    },
    {
      id: 2,
      workCard: "#01245687",
      reason: "UNSPECIFIED",
      rejectedBy: "Rupa Ganguly",
      rejectionTime: "10-06-2023",
    },
    {
      id: 3,
      workCard: "#01245687",
      reason: "UNSPECIFIED",
      rejectedBy: "Ricky Martin",
      rejectionTime: "10-06-2023",
    },
    {
      id: 4,
      workCard: "#01245687",
      reason: "UNSPECIFIED",
      rejectedBy: "Jonathan Smith",
      rejectionTime: "10-06-2023",
    },
    {
      id: 5,
      workCard: "#01245687",
      reason: "UNSPECIFIED",
      rejectedBy: "Nagendra Chowdhry",
      rejectionTime: "10-06-2023",
    },
  ];

  const columns = [
    { field: "workCard", headerName: "WORK CARDS", width: 150 },
    { field: "reason", headerName: "REJECT REASON", width: 150 },
    { field: "rejectedBy", headerName: "REJECTED BY", width: 200 },
    { field: "rejectionTime", headerName: "REJECTION TIME", width: 150 },
  ];

  return (
    <div>
      <Upperbar />
      <Sidebar />
      <div className="dashboard-container">
        <Box display="flex" flexDirection="column" p={3}>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>
            <AppBar
              position="static"
              color="transparent"
              elevation={0}
              style={{ flexGrow: 1, width: "89%", marginTop: "0" }}
            >
              <Toolbar style={{ justifyContent: "space-between" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<AddIcon />}
                  style={{ marginRight: "8px" }}
                >
                  Create Order
                </Button>
                <Box display="flex" alignItems="center">
                  <Box
                    display="flex"
                    alignItems="center"
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "8px",
                      padding: "4px 8px",
                      marginRight: "8px",
                    }}
                  >
                    <SearchIcon />
                    <InputBase
                      placeholder="Search for something"
                      style={{ marginLeft: "4px" }}
                    />
                  </Box>
                  <IconButton color="default" style={{ marginRight: "4px" }}>
                    <NotificationsIcon />
                  </IconButton>
                  <IconButton color="default" style={{ marginRight: "4px" }}>
                    <SettingsIcon />
                  </IconButton>
                  <Avatar alt="User Avatar" src="https://i.pravatar.cc/300" />
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={3}
                      style={{
                        padding: "10px",
                        backgroundColor: "#7469b6",
                        color: "white",
                        height:"120px"
                      }}
                    >
                      <Typography variant="h6">
                        Number of Active Orders
                      </Typography>
                      <Typography variant="h5">50</Typography>
                      <Typography>Number of Active Orders</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: "10px" }}>
                      <Typography variant="h6">
                        Total No of Work Cards
                      </Typography>
                      <Typography variant="h5">10</Typography>
                      <Box display="flex" alignItems="center">
                        <div style={{ position: "relative" }}>
                          <CircularProgress
                            variant="determinate"
                            value={50}
                            size={30}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "38%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            <Typography variant="caption" color="textSecondary">
                              50%
                            </Typography>
                          </div>
                        </div>
                        <Box ml={1}>
                          <Typography>5 completed cards</Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={3}
                      style={{
                        padding: "10px",
                        backgroundColor: "#c53030",
                        color: "white",
                      }}
                    >
                      <Typography variant="h6">
                        Total Number of Issues
                      </Typography>
                      <Typography variant="h4">13</Typography>
                      <Typography>7 Issues are critical</Typography>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                      >
                        View All
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: "10px" }}>
                      <Typography variant="h6">
                        Risk Warning Activity
                      </Typography>
                      <Typography variant="h4">80%</Typography>
                      <Box display="flex" alignItems="center">
                        <WarningIcon color="error" fontSize="medium" />
                        <Box ml={1}>
                          <Typography>2 Risk yet to resolve</Typography>
                        </Box>
                      </Box>
                      <Button variant="contained" color="primary" size="small">
                        View All
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <Typography variant="h5">Orders</Typography>
                <Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom={1} // Adding margin below this Box
                  >
                    <Typography>01 IC 00077010000</Typography>
                    <Typography>X400</Typography>
                    <Button size="small" variant="contained">Allocated</Button>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom={1} // Adding margin below this Box
                  >
                    <Typography>01 IC 00077010000</Typography>
                    <Typography>X400</Typography>
                    <Button size="small" variant="contained">Allocated</Button>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom={1} // Adding margin below this Box
                  >
                    <Typography>01 IC 00077010000</Typography>
                    <Typography>X400</Typography>
                    <Button size="small" variant="contained">Allocated</Button>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom={1} // Adding margin below this Box
                  >
                    <Typography>01 IC 00077010000</Typography>
                    <Typography>X400</Typography>
                    <Button size="small" variant="contained">Allocated</Button>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom={1} // Adding margin below this Box
                  >
                    <Typography>06 IC 0007901000</Typography>
                    <Typography>X500</Typography>
                    <Button size="small" variant="contained">Allocated</Button>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom={1} // Adding margin below this Box
                  >
                    <Typography>01 R 0003601300</Typography>
                    <Typography>X850</Typography>
                    <Button size="small" variant="contained">Allocated</Button>
                  </Box>
                  <Button
                  size="small"
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                  >
                    Create Order
                  </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <Typography variant="h5">Inventory Summary</Typography>
                <Box>
                  <Typography>Raw Materials: 50</Typography>
                  <Typography>Parts: 36</Typography>
                  <Typography>Consumables: 24</Typography>
                  <Button variant="contained">Load More</Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <Typography variant="h5">Rejected Work Cards</Typography>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  checkboxSelection
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
