import {
  Box,
  Button,
  Container,
  FormGroup,
  Input,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BckgroundImage from "../Data/LoginBackground.png";
import SchoolPenLogo from "../Data/SchoolPenLogo.png";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const backgroundImageUrl = BckgroundImage;
  const containerStyle = {
    background: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#7A58E6",
    height: "100vh",
  };
  const paraStyle = {
    color: `var(--Dark-grey, #707070)`,
    fontSize: `20px`,
    paddingTop: "19px",
    fontWeight: "400",
  };
  const btnStyle = {
    width: "50%",
    padding: "15px 0px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  };
  const inputStyle = {
    padding: "14px 27px",
    borderRadius: "12px",
    background: "#EFF3F4",
    width: "100%",
    border: "none",
    marginBottom: "18px",
    color: "#A9A9B1",
  };

  const [activeTab, setActiveTab] = useState("tab1");
  const [role, setrole] = useState("user");
  const [note, setnote] = useState({
    name: "",
    email: "",
    password: "",
  });

  const login = () => {
    
      axios
        .post("http://localhost:5000/login", {
          email: note.email,
          password: note.password,
          role: role,
        })
        .then((response) => {
          if (response.status === 200) {
            // Success
            // Store the user object in local storage
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/main");
          } else {
            alert("Error occured");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    
  };
  // const login = () => {
  //    navigate("/main");
  // }
  const InputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setnote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleTabClick = (tab) => {
    if (tab == "tab2") {
      setrole("admin");
    } else {
      setrole("user");
    }
    setActiveTab(tab);
  };
  return (
    <Layout>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        component="div"
        style={containerStyle}
      >
        <Container
          maxWidth="xs"
          sx={{
            // width: "30%",
            // minHeight: "70%",
            bgcolor: "#fff",
            borderRadius: "20px",
            py: "30px",
            px: "40px !important",
            justifyContent: "space-around",
          }}
        >
          <Box textAlign="center" sx={{ pb: "29px" }}>
            <img
              src={SchoolPenLogo}
              alt="SchoolPen"
              style={{ width: "236px", height: "115px", objectFit: "contain" }}
            />
          </Box>
          <Box sx={{ textAlign: "center", pb: "20px" }}>
            <Typography variant="h3" sx={{ fontSize: "36px" }}>
              {" "}
              Hello Again{" "}
            </Typography>
            <Typography varient="p" style={paraStyle}>
              {" "}
              Welcome back you’ve been missed{" "}
            </Typography>
          </Box>
          <Box sx={{ mb: "29px", background: "#EFF3F4", borderRadius: "12px" }}>
            <Button
              style={btnStyle}
              sx={{
                color: activeTab === "tab1" ? "#FFF" : "#707070",
                fontWeight: activeTab === "tab1" ? "700" : "400",
                background: activeTab === "tab1" ? "#7A58E6" : "transparent",
                "&:hover": {
                  background: activeTab === "tab1" ? "#7A58E6" : "transparent",
                },
              }}
              className={`tab ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => handleTabClick("tab1")}
            >
              User
            </Button>
            <Button
              style={btnStyle}
              sx={{
                color: activeTab === "tab2" ? "#FFF" : "#707070",
                fontWeight: activeTab === "tab2" ? "700" : "400",
                background: activeTab === "tab2" ? "#7A58E6" : "transparent",
                "&:hover": {
                  background: activeTab === "tab2" ? "#7A58E6" : "transparent",
                },
              }}
              className={`tab ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              Admin
            </Button>
          </Box>
          <FormGroup
            onSubmit={(e) => e.preventDefault()}
            className="login-form"
            sx={{ textAlign: "center", w: "100%" }}
          >
            <div>
              {/* {role == "user" ? (
                <input
                  name="name"
                  type="text"
                  value={note.name}
                  onChange={InputEvent}
                  style={inputStyle}
                  placeholder="Enter User Name"
                />
              ) : (
                <li />
              )} */}
              <Input
                name="email"
                type="text"
                value={note.email}
                onChange={InputEvent}
                style={inputStyle}
                placeholder="Enter Your Email"
                disableUnderline
              />
              <Input
                name="password"
                type="password"
                value={note.password}
                onChange={InputEvent}
                style={inputStyle}
                placeholder="Enter password"
                disableUnderline
              />
              <Typography
                sx={{
                  color: "#7A58E6",
                  fontSize: "16px",
                  fontWeight: "700",
                  cursor: "pointer",
                  textAlign: "end",
                  pb: "20px",
                }}
              >
                Forgot password
              </Typography>
            </div>
            <Button
              type="submit"
              onClick={login}
              sx={{
                width: "100%",
                borderRadius: "12px",
                background: "#7A58E6",
                cursor: "pointer",
                border: "none",
                color: "#FFF",
                fontSize: "18px",
                fontWeight: "500",
                textTransform: "capitalize",
                p: "10px 10px",
                "&:hover": {
                  background: "#7A58E6",
                },
              }}
            >
              Login
            </Button>
          </FormGroup>
        </Container>
      </Box>
    </Layout>
  );
};

export default Login;
