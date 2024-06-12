import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { ArrowOutward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Upperbar from "../Upperbar";
import Sidebar from "../Sidebar";
import "./inventory.css";

const data = [
  { category: "Raw Material", Issuances: 0, Receipts: 0 },
  { category: "Parts", Issuances: 0, Receipts: 0 },
  { category: "Consumables", Issuances: 0, Receipts: 0 },
  { category: "Supplements", Issuances: 0, Receipts: 0 },
  { category: "Unfinished Products", Issuances: 0, Receipts: 0 },
  { category: "Finished Products", Issuances: 0, Receipts: 0 },
];

const MaterialMovementSummary = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/materialmovements");
  };
  return (
    <div>
      <Upperbar />
      <Sidebar />
      <div className="inventory-container card">
        <Container className="mt-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h2 className="text-center mb-4">Material Movement Summary</h2>
            <div>
              <label>Start Date</label>
              <input
                className="btn btn-outline-secondary"
                type="date"
                name="startdate"
                id="startdate"
              />
            </div>
            <div>
              <label>End Date</label>
              <input
                className="btn btn-outline-secondary"
                type="date"
                name="enddate"
                id="enddate"
              />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary ms-2"
                onClick={() => window.location.reload()}
              >
                <i className="bi bi-arrow-clockwise"></i>
              </button>
            </div>
          </div>
          <Row>
            {data.map((item, index) => (
              <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
                <Card className="h-100">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title>{item.category}</Card.Title>
                      <Card.Text>#Issuances: {item.Issuances}</Card.Text>
                      {item.Receipts !== undefined && (
                        <Card.Text>#Receipts: {item.Receipts}</Card.Text>
                      )}
                    </div>
                    <Button
                      variant="primary"
                      className="squared-circle"
                      onClick={handleButtonClick}
                      style={{height:"50px"}}
                    >
                      <ArrowOutward color="white" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MaterialMovementSummary;
