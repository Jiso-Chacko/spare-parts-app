import React from "react";
import { Box } from "@mui/system";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import "./Profile.css";

const Profile = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && (
        <Box>
          <Card className="profileCard">
            <CardContent>
              <Typography className="titlePersonal">
                Personal Details
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <label for="Name" className="label">
                    Name
                  </label>
                  <input type="text" className="input"></input>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", ml: "6rem" }}
                >
                  <label for="Email" className="label">
                    Email Address
                  </label>
                  <input type="email" className="input"></input>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                <label for="number" className="label">
                  Mobile Number
                </label>
                <input type="number" className="input"></input>
              </Box>
              <Typography className="titleCompany">
                Company Details{" "}
                <span className="titleOptional">(Optional)</span>
              </Typography>
              <input
                type="text"
                className="input"
                placeholder="GSTIN: KSJDCH846658HFH"
              ></input>
              <Button className="companyButton">Verify</Button>
              <Typography className="titleShipping">
                Shipping Address{" "}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between " }}>
                <Card className="addressCard">
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                      <Button className="default">Default</Button>
                    </Box>
                    <Typography className="titleAddress">
                      Arun Pradeep
                    </Typography>
                    <Typography className="addressBody">
                      Kalathilparambil House, Nileshwar Kanhangad (PO), Kasargod
                      Kerala, 671315 India
                    </Typography>
                    <Typography className="addressPhn">
                      Phone Number: 7686869789
                    </Typography>
                    <Button className="deliveryInstr">
                      Add Delivery Instruction
                    </Button>
                    <Button className="deliveryEdit">Edit</Button>
                    <Button className="deliveryRemove">Remove</Button>
                  </CardContent>
                </Card>

                <Card className="addressCard">
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                      <Button className="default">Default</Button>
                    </Box>
                    <Typography className="titleAddress">
                      Arun Pradeep
                    </Typography>
                    <Typography className="addressBody">
                      Kalathilparambil House, Nileshwar Kanhangad (PO), Kasargod
                      Kerala, 671315 India
                    </Typography>
                    <Typography className="addressPhn">
                      Phone Number: 7686869789
                    </Typography>
                    <Button className="deliveryInstr">
                      Add Delivery Instruction
                    </Button>
                    <Box sx={{ display: "flex" }}>
                      <Button className="deliveryEdit">Edit</Button>
                      <Button className="deliveryRemove">Remove</Button>
                      <Button className="deliveryDefault">
                        Set as Default
                      </Button>
                    </Box>
                  </CardContent>
                </Card>

                <Card className="addressCardNew">
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <img
                        src="/assets/images/ProductImages/addNewAdd.svg"
                        alt="Add New"
                        className="addAddNewIcon"
                      />
                      <Typography className="titleAddNewAddress">
                        Add address
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
      {isTabletOrMobile && (
        <Box>
          <Card className="profileCard">
            <CardContent>
              <Typography className="titlePersonalMobile">
                Personal Details
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <label for="Name" className="label">
                    Name
                  </label>
                  <input type="text" className="input"></input>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                  <label for="Email" className="label">
                    Email Address
                  </label>
                  <input type="email" className="input"></input>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                <label for="number" className="label">
                  Mobile Number
                </label>
                <input type="number" className="input"></input>
              </Box>
              <Typography className="titleCompanyMobile">
                Company Details{" "}
                <span className="titleOptionalMobile">(Optional)</span>
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="text"
                  className="input"
                  placeholder="GSTIN: KSJDCH846658HFH"
                ></input>
                <Button className="companyButtonMobile">Verify</Button>
              </Box>
              <Typography className="titleShippingMobile">
                Shipping Address{" "}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Card className="addressCardMobile">
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                      <Button className="default">Default</Button>
                    </Box>
                    <Typography className="titleAddress">
                      Arun Pradeep
                    </Typography>
                    <Typography className="addressBody">
                      Kalathilparambil House, Nileshwar Kanhangad (PO), Kasargod
                      Kerala, 671315 India
                    </Typography>
                    <Typography className="addressPhn">
                      Phone Number: 7686869789
                    </Typography>
                    <Button className="deliveryInstr">
                      Add Delivery Instruction
                    </Button>
                    <Button className="deliveryEdit">Edit</Button>
                    <Button className="deliveryRemove">Remove</Button>
                  </CardContent>
                </Card>

                <Card className="addressCardMobile">
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                      <Button className="default">Default</Button>
                    </Box>
                    <Typography className="titleAddress">
                      Arun Pradeep
                    </Typography>
                    <Typography className="addressBody">
                      Kalathilparambil House, Nileshwar Kanhangad (PO), Kasargod
                      Kerala, 671315 India
                    </Typography>
                    <Typography className="addressPhn">
                      Phone Number: 7686869789
                    </Typography>
                    <Button className="deliveryInstr">
                      Add Delivery Instruction
                    </Button>
                    <Box sx={{ display: "flex" }}>
                      <Button className="deliveryEdit">Edit</Button>
                      <Button className="deliveryRemove">Remove</Button>
                      <Button className="deliveryDefault">
                        Set as Default
                      </Button>
                    </Box>
                  </CardContent>
                </Card>

                <Card className="addressCardNewMobile">
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <img
                        src="/assets/images/ProductImages/addNewAdd.svg"
                        alt="Add New"
                        className="addAddNewIcon"
                      />
                      <Typography className="titleAddNewAddress">
                        Add address
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default Profile;
