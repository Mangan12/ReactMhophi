import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
 
import "./inventory.css";
import "./processconfiguration.css";
 
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';
// import PendingActionsIcon from '@mui/icons-material/PendingActions';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
// import GroupsIcon from '@mui/icons-material/Groups';
import Upperbar from "../Upperbar";
import Sidebar from "../Sidebar";
 
const ProcessExecution = () => {
  const navigate = useNavigate();
 
  const handleDepartmentPage = () => {
    navigate("/departments");
  };
  return (
    <div>
      <Upperbar />
      <Sidebar />
      <div className="inventory-container card">
        <Container className="mt-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h2 className="text-center mb-4">Process Execution</h2>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <h4 className="text-center mb-4">Production Lines</h4>
          </div>
          <Row >
            <Col
              xs={12}
              sm={6}
              md={4}
              className="mb-4"
             
            >
              <Card className="card-custom"
                style={{
                  height: "12rem",
                  width: "18rem",
                  backgroundColor: "#7469b6",
                  marginLeft: "45px",
                  marginRight: "45px"
                }}
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>Radiator</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                    Production line 1 for manufacturing alluminium radiators
                    </Card.Text>
                    <Card.Footer>Products Count: 57</Card.Footer>
                  </div>
                
                  <div><AssignmentIndIcon style={{fontSize:"50px"}}/></div>
                </Card.Body>
              </Card >
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="card-custom"
                style={{
                  height: "12rem",
                  width: "18rem",
                  backgroundColor: "#7469b6",
                  marginLeft: "45px",
                  marginRight: "45px"
                }}
                onClick={handleDepartmentPage}
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>Inter Cooler</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                    Production line 2 for manufacturing alluminium inter cooler
                    </Card.Text>
                    <Card.Footer>Products Count: 19</Card.Footer>
                  </div>
                  <div><HomeIcon style={{fontSize:"50px"}}/></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
 
export default ProcessExecution;