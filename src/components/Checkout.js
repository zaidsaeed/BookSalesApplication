import React, { Component } from "react";

export default class Checkout extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0 -16px"
        }}
      >
        <div style={{ flex: "75%", padding: "0 16px" }}>
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "0 -16px"
              }}
            >
              <div
                style={{
                  flex: "50%",
                  padding: "0 16px",
                  marginTop: "20px"
                }}
              >
                <h3
                  style={{
                    fontWeight: "bold",
                    fontColor: "white",
                    marginTop: "10px"
                  }}
                >
                  Billing Address
                </h3>
                <label
                  style={{
                    marginBottom: "10px",
                    display: "block",
                    fontWeight: "300"
                  }}
                  for="fname"
                >
                  <i className="fa fa-user" /> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="John M. Doe"
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "3px"
                  }}
                />
                <label
                  for="email"
                  style={{
                    marginBottom: "10px",
                    display: "block",
                    fontWeight: "300"
                  }}
                >
                  <i className="fa fa-envelope" /> Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "3px"
                  }}
                />
                <label
                  for="adr"
                  style={{
                    marginBottom: "10px",
                    display: "block",
                    fontWeight: "300"
                  }}
                >
                  <i className="fa fa-address-card-o" /> Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="542 W. 15th Street"
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "3px"
                  }}
                />
                <label
                  for="city"
                  style={{
                    marginBottom: "10px",
                    display: "block",
                    fontWeight: "300"
                  }}
                >
                  <i className="fa fa-institution" /> City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "3px"
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "0 -16px"
                  }}
                >
                  <div
                    style={{
                      flex: "50%",
                      padding: "0 16px"
                    }}
                  >
                    <label
                      for="state"
                      style={{
                        marginBottom: "10px",
                        display: "block",
                        fontWeight: "300"
                      }}
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="NY"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "3px"
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flex: "50%",
                      padding: "0 16px"
                    }}
                  >
                    <label
                      for="zip"
                      style={{
                        marginBottom: "10px",
                        display: "block",
                        fontWeight: "300",
                        padding: "0 16px"
                      }}
                    >
                      Zip
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="10001"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "3px"
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  flex: "50%",
                  padding: "0 16px",
                  marginTop: "20px"
                }}
              >
                <h3
                  style={{
                    fontWeight: "bold",
                    fontColor: "white",
                    marginTop: "10px"
                  }}
                >
                  Payment
                </h3>

                <label
                  for="cname"
                  style={{
                    marginBottom: "10px",
                    display: "block",
                    fontWeight: "300"
                  }}
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "3px"
                  }}
                />
                <label
                  for="ccnum"
                  style={{
                    marginBottom: "10px",
                    display: "block",
                    fontWeight: "300"
                  }}
                >
                  Credit card number
                </label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "3px"
                  }}
                />
                <label
                  for="expmonth"
                  style={{
                    marginBottom: "10px",
                    display: "block",
                    fontWeight: "300"
                  }}
                >
                  Exp Month
                </label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "3px"
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "0 -16px"
                  }}
                >
                  <div
                    style={{
                      flex: "50%",
                      padding: "0 16px"
                    }}
                  >
                    <label
                      for="expyear"
                      style={{
                        marginBottom: "10px",
                        display: "block",
                        fontWeight: "300"
                      }}
                    >
                      Exp Year
                    </label>
                    <input
                      type="text"
                      id="expyear"
                      name="expyear"
                      placeholder="2018"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "3px"
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flex: "50%",
                      padding: "0 16px"
                    }}
                  >
                    <label
                      for="cvv"
                      style={{
                        marginBottom: "10px",
                        display: "block",
                        fontWeight: "300"
                      }}
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="352"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "3px"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <label
              style={{
                marginBottom: "10px",
                display: "block",
                fontWeight: "300"
              }}
            >
              <input type="checkbox" checked="checked" name="sameadr" />{" "}
              Shipping address same as billing
            </label>
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-bloc"
              style={{
                width: "50%",
                marginBottom: "20px",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "3px"
              }}
            >
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
