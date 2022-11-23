import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const { user } = useAuth();
  const [products, setproducts] = useState([]);
  const smStyles = {
    border: "1px solid #F4D03F",
    borderRadius: "5px",
    color: "#D4AC0D",
    background: "#f1f1f1",
    padding: "0 3px",
    marginTop: "6px",
    display: "inline",
  };
  const styles = {
    border: "1px solid #F4D03F",
    borderRadius: "5px",
    color: "#D4AC0D",
    background: "#FEF9E7",
    padding: "0 3px",
    margin: "0",
    display: "inline",
  };
  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://tranquil-hollows-86813.herokuapp.com/orderedItem?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setproducts(data));
    }
    fetchData();
  }, [products, user.email]);

  const handleDeleteOrder = (id) => {
    const confirmation = window.confirm(
      "Are you sure, you want to delete this order?"
    );
    if (confirmation) {
      const url = `https://tranquil-hollows-86813.herokuapp.com/orderedItem/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingProducts = products.filter(
              (products) => products._id !== id
            );
            setproducts(remainingProducts);
          }
        });
    }
  };

  return (
    <>
      <div className="my-orders" sx={{ backgroundColor: "var(--login-color)" }}>
        <h2 style={{ marginBottom: "15px" }}>My Orders</h2>
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
            bgcolor: "#f1f1f1",
          }}
        >
          {!products.length ? (
            <div>
              <p
                style={{
                  fontSize: "38px",
                  color: "gray",
                  marginLeft: "50%",
                  transform: "translateX(-25%)",
                }}
              >
                OOps! No Order Yet
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
              {products.map((products) => (
                <div
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "white",
                    padding: "10px",
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
                        <span>Product Name:</span>
                        <span>{products.productName}</span>
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
                        <span>{products.place}</span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Version Year:</span>
                        <span>{products.versionYear}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p
                          style={smStyles}
                          onClick={() => handleDeleteOrder(products._id)}
                        >
                          Cancel Order
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
          {!products.length ? (
            <div>
              <p
                style={{
                  fontSize: "30px",
                  color: "gray",
                  marginLeft: "50%",
                  marginTop: "20%",
                  transform: "translateX(-50%)",
                }}
              >
                OOps! No Order Yet
              </p>
            </div>
          ) : (
            <table
              style={{
                margin: "0 auto",
                borderCollapse: "collapse",
                width: "90%",
              }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Place</th>
                  <th>Version</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {products.map((products) => (
                <tr>
                  <td>{products.productName}</td>
                  <td>{products.place}</td>
                  <td>{products.versionYear}</td>
                  <td>${products.discountPrice}</td>
                  <td>
                    <p
                      style={styles}
                      onClick={() => handleDeleteOrder(products._id)}
                    >
                      Cancel Order
                    </p>
                  </td>
                </tr>
              ))}
            </table>
          )}
        </Box>
      </div>
    </>
  );
};

export default MyOrders;
