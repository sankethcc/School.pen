import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function AccordianAdd({ subject, SubSubject, topics }) {
  return (
    <Box sx={{}}>
      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderBottom: "none",
            marginBottom: "-1px",
            display: "flex",
            justifyContent: "space-between",
            width: "0",
          }}
        >
          <Typography sx={{ fontSize: "28px", color: "#707070", fontWeight:'700'}}>
            {subject}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: "45px" }}>
          <Typography>
            {SubSubject.map((itemVal, index) => (
              <Accordion
                sx={{
                  border: "none",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  textWrap: "nowrap",
                  "::before": {
                    background: "transparent",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    borderBottom: "none",
                    marginBottom: "-1px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "0",
                  }}
                >
                  <Typography sx={{ fontSize: "28px", color: "#707070" }}>
                    {itemVal}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ borderLeft: "1px solid #BEBEBE", marginLeft:'50px' }}>
                  {topics.map((topic, index) => (
                    <Typography sx={{ fontSize: "24px", color: "#707070", fontWeight:'400' }}>
                      {topic}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
