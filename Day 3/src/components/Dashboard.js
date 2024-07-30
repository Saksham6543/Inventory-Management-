

import React, { useState } from 'react';
import Sidebar1 from './Sidebar1';
import AppBar1 from './AppBar1';
import Footer from './Footer1';
import { Box, Container, Grid, Paper } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './Dashboard.css';

const value = 75;

const data = [
  { name: 'Completed', value: value },
  { name: 'Remaining', value: 100 - value },
];

const COLORS = ['#ff5722', '#e0e0e0'];

const Dashboard = () => {
  const [lowStockItems, setLowStockItems] = useState(2);
  const [allItems, setAllItems] = useState(123);
  const [packed, setPacked] = useState(5);
  const [shipped, setShipped] = useState(10);
  const [delivered, setDelivered] = useState(25);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#FFF8EE' }}>
      <Sidebar1 />
      <Box sx={{ flexGrow: 1, padding: '16px' }}>
        <AppBar1 />
        <Container>
          <h1 className="dashboard-title">Dashboard</h1>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className="dashboard-paper sales-activity-paper">
                <h2>Sales Activity</h2>
                <Grid container spacing={0.6}>
                  <Grid item xs={12} md={4}>
                    <Paper className="metric-box">
                      <p style={{ fontSize: '25px', color: 'red' }}>
                        <span>{packed}</span>
                      </p>
                      <span>Qty</span><br />
                      <span>TO BE PACKED</span>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper className="metric-box">
                      <p style={{ fontSize: '25px', color: 'red' }}>
                        <span>{shipped}</span>
                      </p>
                      <span>Pkgs</span><br />
                      <span>TO BE SHIPPED</span>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper className="metric-box">
                      <p style={{ fontSize: '25px', color: 'red' }}>
                        <span>{delivered}</span>
                      </p>
                      <span>Pkgs</span><br />
                      <span>TO BE DELIVERED</span>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="dashboard-paper">
                <h2>Product Details</h2>
                <Grid container spacing={0.6}>
                  <Grid item xs={12}>
                    <Paper className="metric-box1">
                      <p style={{ fontSize: '25px', color: 'red' }}>
                        Low Stock Items: <span style={{ marginLeft: '20px' }}>{lowStockItems}</span>
                      </p>
                      <p style={{ fontSize: '25px' }}>
                        All Items: <span style={{ marginLeft: '20px' }}>{allItems}</span>
                      </p>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="dashboard-paper1">
                <h2>Activity Overview</h2>
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx={200}
                    cy={160}
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
