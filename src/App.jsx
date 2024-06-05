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
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sb" element={<Sidebar />} />
          <Route path="/ub" element={<Upperbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<OrdersProduct />} />
          <Route path="/productionplan" element={<Productionplan />} />
          <Route path="/materialstatus" element={<MaterialStatus />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/myassignments" element={<MyAssignments />} />
          <Route path="/materialinventory" element={<MaterialInventory />} />
          <Route path="/materialmovementsummary" element={<MaterialMovementSummary />} />
          <Route path="/materialmovements" element={<MaterialMovements />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
