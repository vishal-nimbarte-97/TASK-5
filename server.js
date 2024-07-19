const express = require("express");
const { syncDatabase } = require("./config/database");
require('dotenv').config();

// Import routes
const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const deptEmpRoutes = require("./routes/deptEmpRoutes");
const departmentManagerRoutes = require("./routes/departmentManagerRoutes");
const salariesRoutes = require("./routes/salariesRoutes");
const titleRoutes = require("./routes/titleRoutes");

const app = express();
app.use(express.json());

// Register routes
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/dept-emps", deptEmpRoutes);
app.use("/api/department-managers", departmentManagerRoutes);
app.use("/api/salaries", salariesRoutes);
app.use("/api/titles", titleRoutes);

const port = 3000;

syncDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });
