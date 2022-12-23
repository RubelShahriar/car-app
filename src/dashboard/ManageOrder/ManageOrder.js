import React, { useEffect, useState } from "react";
import {
  ArrowDropDown,
  DeleteForeverRounded,
  PersonRounded,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import "./ManageOrder.css";

const ManageOrder = () => {
  const [order, setOrder] = useState([]);
  const arrowStyle = { marginBottom: "-6px", marginLeft: "-4px" };
  const btnStyle = {
    border: "1px solid #F4D03F",
    borderRadius: "5px",
    color: "#D4AC0D",
    background: "#f1f1f1",
    padding: "0 3px",
    marginTop: "6px",
    display: "inline",
  };
  const styles = {
    color: "#9B59B6",
    margin: "0",
    border: "1px solid #9B59B6",
    borderRadius: "5px",
    background: "#F5EEF8",
    cursor: "pointer",
  };
  const smStyles = {
    color: "#9B59B6",
    height: "fit-content",
    margin: "0",
    border: "1px solid #9B59B6",
    borderRadius: "5px",
    background: "#F5EEF8",
    cursor: "pointer",
    padding: "0px 2px",
  };
  useEffect(() => {
    fetch("https://carzone-server.onrender.com/orderedItem")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  //change status after click
  const changeStatus = (e) => {
    e.target.innerText = "active";
    // return status
  };
  //DELETE AN USER
  const handleDeleteOrder = (id) => {
    const confirmation = window.confirm(
      "Are you sure, you want to delete this order?"
    );
    if (confirmation) {
      const url = `https://carzone-server.onrender.com/orderedItem/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingorder = order.filter(
              (packages) => packages._id !== id
            );
            setOrder(remainingorder);
          }
        });
    }
  };

  return (
    <div>
      <div className="orders">
        <h2 style={{ marginBottom: "15px" }}>Manage All Orders</h2>
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
            bgcolor: "#f1f1f1",
          }}
        >
          {!order.length ? (
            <div>
              <p
                style={{
                  fontSize: "25px",
                  color: "gray",
                  marginTop: "20%",
                  marginLeft: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                OOps! No Orders Yet
              </p>
            </div>
          ) : (
            <div
              style={{
                padding: "20px",
                borderRadius: "10px",
                fontSize: "16px",
              }}
            >
              {order.map((order) => (
                <div
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "white",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <table style={{ margin: "0 auto", width: "100%" }}>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ textAlign: "left" }}>
                          <p
                            style={{
                              display: "inline-block",
                              width: "150px",
                              margin: 0,
                              fontWeight: "bold",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            <PersonRounded
                              style={{ marginBottom: "-3px", fontSize: "18px" }}
                            />
                            ID: {order._id}
                          </p>
                          <p style={{ margin: "-8px 0 0 0", fontSize: "14px" }}>
                            {order.dateString}
                          </p>
                        </div>
                        <span style={smStyles} onClick={(e) => changeStatus(e)}>
                          pending...
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Product Name:</span>
                        <span>{order.productName}</span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Customer:</span>
                        <span>{order.displayName}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Product Price:</span>
                        <span> ${order.discountPrice}</span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Product Name:</span>
                        <span>{order.place}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Version Year:</span>
                        <span>{order.versionYear}</span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Order Status:</span>
                        <div
                          style={{ color: "#DC7633", display: "inline-block" }}
                        >
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              background: "#17A589",
                              display: "inline-block",
                              marginRight: 5,
                            }}
                          ></div>
                          Ready to pickup
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p
                          style={btnStyle}
                          onClick={() => handleDeleteOrder(order._id)}
                        >
                          Delete Order
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              ))}
            </div>
          )}
        </Box>
        <Box
          sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
        >
          {!order.length ? (
            <div>
              <p
                style={{
                  fontSize: "35px",
                  color: "gray",
                  marginTop: "20%",
                  marginLeft: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                OOps! No Orders Yet
              </p>
            </div>
          ) : (
            <table
              style={{
                margin: "0 auto",
                borderCollapse: "collapse",
                width: "95%",
              }}
            >
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>
                    Order ID
                    <ArrowDropDown style={arrowStyle} />
                  </th>
                  <th>
                    Date
                    <ArrowDropDown style={arrowStyle} />
                  </th>
                  <th>
                    Order
                    <ArrowDropDown style={arrowStyle} />
                  </th>
                  <th>
                    Customer
                    <ArrowDropDown style={arrowStyle} />
                  </th>
                  <th>
                    Price
                    <ArrowDropDown style={arrowStyle} />
                  </th>
                  <th>
                    Status
                    <ArrowDropDown style={arrowStyle} />
                  </th>
                  <th>
                    Delete
                    <ArrowDropDown style={arrowStyle} />
                  </th>
                </tr>
              </thead>
              {order.map((order) => (
                <tr>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>{order._id}</td>
                  <td>{order.dateString}</td>
                  <td>{order.productName}</td>
                  <td>{order.displayName}</td>
                  <td>${order.discountPrice}</td>
                  <td>
                    <p style={styles} onClick={(e) => changeStatus(e)}>
                      pending...
                    </p>
                  </td>
                  <td>
                    <p style={{ margin: 0 }} title="delete">
                      <DeleteForeverRounded
                        style={{
                          color: "#D4AC0D",
                          fontSize: "1.8em",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteOrder(order._id)}
                      />
                    </p>
                  </td>
                </tr>
              ))}
            </table>
          )}
        </Box>
      </div>
    </div>
  );
};

export default ManageOrder;
