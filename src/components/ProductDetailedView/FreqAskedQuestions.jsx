import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as AccordanPlus } from "../Utils/AppUtils/accordanPlus.svg";

import "./FreqAskedQuestions.css";

const FreqAskedQuestions = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <>
      {isDesktopOrLaptop && (
        <div >
          <Typography className="freqAskedQuestionTitle">
            Frequently asked questions
          </Typography>
          <Box>
            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<AccordanPlus />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="accordanTitle">
                  When can I expect the delivery of my Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can expect the delivery of your TATA Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114 within 7-10 days after placing the
                  order. You can also check the availability of the product near
                  your area by entering the PIN-code number.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<AccordanPlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordanTitle">
                  Why should I choose TATA for the Tata Wheel Rim, ALLOY WHEEL
                  RIM ASSY 271940100114?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can expect the delivery of your TATA Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114 within 7-10 days after placing the
                  order. You can also check the availability of the product near
                  your area by entering the PIN-code number.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<AccordanPlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordanTitle">
                  I ordered a TATA Tata Wheel Rim, ALLOY WHEEL RIM ASSY
                  271940100114. How can I track its delivery status?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can expect the delivery of your TATA Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114 within 7-10 days after placing the
                  order. You can also check the availability of the product near
                  your area by entering the PIN-code number.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<AccordanPlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordanTitle">
                  Can I track my order for Tata Wheel Rim, ALLOY WHEEL RIM ASSY
                  271940100114 ordered at GoMechanic?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can expect the delivery of your TATA Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114 within 7-10 days after placing the
                  order. You can also check the availability of the product near
                  your area by entering the PIN-code number.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<AccordanPlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordanTitle">
                  Is Tata Wheel Rim, ALLOY WHEEL RIM ASSY 271940100114 from TATA
                  compatible with Safari dicor?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can expect the delivery of your TATA Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114 within 7-10 days after placing the
                  order. You can also check the availability of the product near
                  your area by entering the PIN-code number.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>
      )}
      {isTabletOrMobile && (
        <div style={{marginLeft:"1rem"}} >
          <Typography className="freqAskedQuestionTitleMobile">
            Frequently asked questions
          </Typography>
          <Box>
            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<AccordanPlus />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="accordanTitleMobile">
                  When can I expect the delivery of my Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordanDescriptionMobile">
                  You can expect the delivery of your TATA Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114 within 7-10 days after placing the
                  order. You can also check the availability of the product near
                  your area by entering the PIN-code number.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<AccordanPlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordanTitleMobile">
                  Why should I choose TATA for the Tata Wheel Rim, ALLOY WHEEL
                  RIM ASSY 271940100114?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordanDescriptionMobile">
                  You can expect the delivery of your TATA Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114 within 7-10 days after placing the
                  order. You can also check the availability of the product near
                  your area by entering the PIN-code number.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<AccordanPlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordanTitleMobile">
                  I ordered a TATA Tata Wheel Rim, ALLOY WHEEL RIM ASSY
                  271940100114. How can I track its delivery status?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordanDescriptionMobile">
                  You can expect the delivery of your TATA Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114 within 7-10 days after placing the
                  order. You can also check the availability of the product near
                  your area by entering the PIN-code number.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<AccordanPlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordanTitleMobile">
                  Can I track my order for Tata Wheel Rim, ALLOY WHEEL RIM ASSY
                  271940100114 ordered at GoMechanic?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordanDescriptionMobile">
                  You can expect the delivery of your TATA Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114 within 7-10 days after placing the
                  order. You can also check the availability of the product near
                  your area by entering the PIN-code number.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<AccordanPlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordanTitleMobile">
                  Is Tata Wheel Rim, ALLOY WHEEL RIM ASSY 271940100114 from TATA
                  compatible with Safari dicor?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordanDescriptionMobile">
                  You can expect the delivery of your TATA Tata Wheel Rim, ALLOY
                  WHEEL RIM ASSY 271940100114 within 7-10 days after placing the
                  order. You can also check the availability of the product near
                  your area by entering the PIN-code number.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>
      )}
    </>
  );
};

export default FreqAskedQuestions;
