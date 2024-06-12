import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Sidebar from "./Components/Sidebar";
import Upperbar from "./Components/Upperbar";
import Home from "./Components/Home";
import OrdersProduct from "./Components/OrdersProduct";
import Productionplan from "./Components/pages/productionplan";
import MaterialStatus from "./Components/pages/MaterialStatus";
import Inventory from "./Components/pages/Inventory";
import MyAssignments from "./Components/pages/MyAssignments";
import MaterialInventory from "./Components/pages/MaterialInventory";
import MaterialMovementSummary from "./Components/pages/MaterialMovementSummary";
import MaterialMovements from "./Components/pages/MaterialMovements";
import WorkstationStates from "./Components/pages/WorkstationStates";
import ProcessViolation from "./Components/pages/ProcessViolation";
import Rejections from "./Components/pages/Rejection";
import Issues from "./Components/pages/Issues";
import Risks from "./Components/pages/Risks";
import TeamRoster from "./Components/pages/TeamRoster";
import ProcessConfiguration from "./Components/pages/ProcessConfiguration";
import ManageDepartments from "./Components/pages/ManageDepartments";
import ProcessExecution from "./Components/pages/ProcessExecution";
import Reports from "./Components/pages/Reports";
import Dashboard from "./Components/pages/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sb" element={<Sidebar />} />
          <Route path="/ub" element={<Upperbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<OrdersProduct />} />
          <Route path="/productionplan" element={<Productionplan />} />
          <Route path="/materialstatus" element={<MaterialStatus />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/myassignments" element={<MyAssignments />} />
          <Route path="/materialinventory" element={<MaterialInventory />} />
          <Route path="/materialmovementsummary" element={<MaterialMovementSummary />} />
          <Route path="/materialmovements" element={<MaterialMovements />} />
          <Route path="/workstationstates" element={<WorkstationStates />} />
          <Route path="/processviolation" element={<ProcessViolation />} />
          <Route path="/rejections" element={<Rejections />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/teamroster" element={<TeamRoster />} />
          <Route path="/processconfiguration" element={<ProcessConfiguration />} />
          <Route path="/departments" element={<ManageDepartments />} />
          <Route path="/processexecution" element={<ProcessExecution />} />
          <Route path="/report" element={<Reports/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
