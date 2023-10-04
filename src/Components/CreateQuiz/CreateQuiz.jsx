import {
  Avatar,
  Box,
  FormControl,
  FormGroup,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";
import userImg from "./userImg.png";
import edits from "../QuizP1/assets/edit.png";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import React, { useState } from "react";
import UnstyledSelectObjectValues from "./UnstyledSelectObjectValues";
import Questions from "./Questions";
import Layout from "../Layout";
import AddDetails from "../QuizP2/AddDetails";
import AddDetailsWithBth from "../QuizP3/AddDetailsWithBth";
import ProfileWrapper from "../AllComponents/ProfileWrapper";
import LanguageAndDotMenu from "../AllComponents/LanguageAndDotMenu";
import SelectContainer from "../AllComponents/SelectContainer";
import Instructions from "../QuizP4/Instructions";
import AddSubject from "../QuizP4/AddSubject";
import AssignUser from "../UserComponent/AssignUser/AssignUser";
import TotalUser from "../UserComponent/AssignUser/TotalUser";
import UserData from "../UserComponent/UserProfile/UserData";
import UserProfile from "../UserComponent/UserProfile/UserProfile";
import SideDetails from "../QuizP1/Preview/SideDetails";
const style = {
  dflex: {
    display: "flex",
  },
  bellIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const CreateQuiz = ({
  handleOpenPage,
  openPageName,
  openPage,
  handleOpenPageNameUpdate,
}) => {
  const [threeDotMenu, setThreeDotMenu] = useState("preview");
  const handleThreeDotMenu = (menuName) => {
    setThreeDotMenu(menuName);
  };
  const propsForLanguageDotMenu = {
    handleThreeDotMenu,
    handleOpenPageNameUpdate,
  };
  const propsForProfileRow = {
    openPageName,
    handleOpenPage,
    handleOpenPageNameUpdate,
  };
  return (
    <Box
      style={style.dflex}
      sx={{
        width: {
          md: "79%",
          lg: "85%",
        },
        minHeight: "100dvh",
        background: "#F5F6F7",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "63%",
            lg: "74%",
          },
          px: "40px",
          pt: "38px",
        }}
      >
        <ProfileWrapper {...propsForProfileRow} />
        {openPage == "Assign User" ? (
          <AssignUser />
        ) : openPage == "User Profile" ? (
          <UserProfile />
        ) : (
          <Box>
            <LanguageAndDotMenu {...propsForLanguageDotMenu} />
            {threeDotMenu == "subject" ? (
              <AddSubject />
            ) : (
              <Box>
                <SelectContainer />
                {openPage == "Create Exam" ? <Instructions /> : null}
                {/*  question and options componennt */}
                <Questions handleThreeDotMenu={handleThreeDotMenu} />
              </Box>
            )}
          </Box>
        )}
      </Box>
      {/* preview question section */}

      <Box
        sx={{
          width: {
            md: "37%",
            lg: "31%",
          },
          background: "#fff",
          p: "38px 32px",
        }}
      >
        {openPage == "Assign User" ? (
          <TotalUser />
        ) : openPage === "User Profile" ? (
          <UserData />
        ) : openPage === "Create Exam" ? (
          <SideDetails heading="Total Exam" number="1,000" />
        ) : (
          <Box>
            {threeDotMenu === "language" ? (
              <Box>
                <AddDetailsWithBth handleThreeDotMenu={handleThreeDotMenu} />
              </Box>
            ) : threeDotMenu == "subject" ? (
              <Box sx={{ width: "100%" }}>
                <AddDetails handleThreeDotMenu={handleThreeDotMenu} />
              </Box>
            ) : threeDotMenu == "topic" ? (
              <Box sx={{ width: "100%" }}>
                <AddDetails handleThreeDotMenu={handleThreeDotMenu} />
              </Box>
            ) : threeDotMenu == "subtopic" ? (
              <Box>
                <AddDetails />
              </Box>
            ) : openPage == "Create Quiz"? (
              <Box>
                <SideDetails heading="Total Quiz" number="50,000" />
              </Box>
            ):null}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CreateQuiz;
