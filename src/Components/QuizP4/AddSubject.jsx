import React, { useState, useEffect } from "react";
import ProfileWrapper from "../QuizP1/MainContant/ProfileWrapper";
import DropDown from "../QuizP1/MainContant/DropDown";
import AccordianAdd from "./AccordianAdd";
import { Box, TextField } from "@mui/material";
import axios from "axios";
import { State } from "../Context/Provider";
const AddSubject = ({ toggleMenu, close }) => {
  const { subjects } = State();
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          p: "0px 48px",
          borderRadius: "12px",
          mt: "32px",
          fontWeight: "700",
        }}
      >
        {subjects.map((data, i) => {
          const { subject, topics } = data;
          // const subTopicName = Object.keys(topics);
          // const tTopic = new Array(topics)
          // console.log(topics.subtopics);
          // console.log(tTopic)

          return (
            <AccordianAdd
              key={i}
              subject={subject}
              topics={topics}
              // SubSubject={subTopicName}
              // topics={["Element", "Chemical Reactions", "Organic chemistry"]}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default AddSubject;
