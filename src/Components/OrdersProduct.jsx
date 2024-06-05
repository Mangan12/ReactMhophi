import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Upperbar from "./Upperbar";
import Sidebar from "./Sidebar";
import "./orderproduct.css";
 
const OrdersProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [tableData, setTableData] = useState([]);
 
  useEffect(() => {
    // Fetch product list from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7071/api/v1/allproduct"
        ); // Replace with your API endpoint
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
 
    fetchProducts();
  }, []);
 
  useEffect(() => {
    // Fetch table data from API
    const fetchTableData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7071/api/v1/order-products"
        ); // Replace with your API endpoint
        setTableData(response.data);
      } catch (error) {
        console.error("Error fetching table data", error);
      }
    };
 
    fetchTableData();
  }, []);
 
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
 
  const handleSave = async (event) => {
    event.preventDefault();
    // Validation
    if (!selectedProduct) {
      setErrorMessage("Please select a product.");
      return;
    }
    if (!quantity || quantity <= 0) {
      setErrorMessage("Please enter a valid quantity.");
      return;
    }
 
    try {
      // Post data to API
      const response = await axios.post(
        "http://localhost:7071/api/v1/order-products/create",
        {
          // Replace with your API endpoint
          productsId: selectedProduct,
          quantity: quantity,
        }
      );
 
      console.log("API Response:", response.data);
 
      // Handle successful response
      handleCloseModal();
      setSelectedProduct("");
      setQuantity("");
      setErrorMessage("");
      window.location.reload();
    } catch (error) {
      console.error("Error saving data", error);
      setErrorMessage("An error occurred while saving. Please try again.");
    }
  };
 
  const handleReset = () => {
    setSelectedProduct("");
    setQuantity("");
    setErrorMessage("");
  };
 
  return (
    <div>
      <Upperbar />
      <Sidebar />
 
      <div className="order-container">
        <div className="card">
          <div className="card-body">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h2 className="card-title">Order's Product Details</h2>
                <div>
                  <button type="button" className="btn btn-primary me-2">
                    Create Production Plan
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleShowModal}
                  >
                    <i className="bi bi-plus-circle"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary ms-2"
                  >
                    <i className="bi bi-arrow-clockwise"></i>
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-2"
                    >
                      <i className="bi bi-funnel"></i> Filters
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      <i className="bi bi-download"></i> Download
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Sl.No</th>
                        <th>Action</th>
                        <th>Order Number</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Order Status</th>
                        <th>Execution Status</th>
                        <th>Tracking Status</th>
                        <th>Delete</th>
                        <th>Production Plan Id List</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="form-check">
                              <input
                                type="radio"
                                id={`action-${index}`}
                                name={`action-${index}`}
                                className="form-check-input"
                                value={item.action} // or any unique value representing the action
                                // Handle onChange event if needed
                              />
                              <label
                                htmlFor={`action-${index}`}
                                className="form-check-label"
                              >
                                {item.action}
                              </label>
                            </div>
                          </td>
                          <td>{item.orderNumber}</td>
                          <td>{item.productName}</td>
                          <td>{item.quantity}</td>
                          <td>{item.orderStatus}</td>
                          <td>{item.executionStatus}</td>
                          <td>{item.trackingStatus}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                          <td>{item.productionPlanIdList}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        tabIndex="-1"
                        aria-disabled="true"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSave}>
          <Modal.Body>
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <div className="form-group">
              <label htmlFor="productSelect">Product</label>
              <select
                id="productSelect"
                className="form-control"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value="">Select a product</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
            <Button variant="danger" onClick={handleReset}>
              Reset
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};
 
export default OrdersProduct;