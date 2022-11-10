import {
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import "./FilterBox.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "react-responsive";

// Accordian MUI
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// RADIO BUTTON
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const category = [
  {
    title: "OIL & FLUIDS",
    select1: "Brake pad",
    select2: "Front break pad",
    select3: "Rear break pad",
    select4: "Accessory kit break pad",
    radio: [
      "Brake pad",
      "Front break pad",
      "Rear break pad",
      "Accessory kit break pad",
    ],
  },
  {
    title: "BREAK SYSTEM",
    select1: "Brake pad",
    select2: "Front break pad",
    select3: "Rear break pad",
    select4: "Accessory kit break pad",
  },
  {
    title: "FRONT BREAK PAD",
    select1: "Brake pad",
    select2: "Front break pad",
    select3: "Rear break pad",
    select4: "Accessory kit break pad",
  },
  {
    title: "REAR BREAK PAD",
    select1: "Brake pad",
    select2: "Front break pad",
    select3: "Rear break pad",
    select4: "Accessory kit break pad",
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FilterBox = () => {
  const [age, setAge] = useState("");
  const [expanded, setExpanded] = useState("panel1");
  const [value, setValue] = useState("female");
  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const handleChangeAccordan = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {isDesktopOrLaptop && (
        <Box className="container">
          <Container>
            <Typography className="title">Filter</Typography>

            {/* ******* Input Model ******* */}
            <FormControl sx={{ m: 1, minWidth: 220, my: 2 }} size="small">
              <InputLabel id="demo-select-small">Model</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Model"
                onChange={handleChangeSelect}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            {/* ******* Input Model Ends ******* */}

            {/* ******* Input Year ******* */}
            <FormControl sx={{ m: 1, minWidth: 220, my: 2 }} size="small">
              <InputLabel id="demo-select-small">Year</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Model"
                onChange={handleChangeSelect}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            {/* ******* Input Year Ends ******* */}

            {/* ******* Input Year ******* */}
            <FormControl sx={{ m: 1, minWidth: 220, my: 2 }} size="small">
              <InputLabel id="demo-select-small">Variant</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Model"
                onChange={handleChangeSelect}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            {/* ******* Input Year Ends ******* */}

            {/* ******* CATEGORY COMPONENT STARTS ******* */}
            <Container className="categoryBoxContainer">
              <Typography className="title">Category</Typography>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  marginTop: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  width: 240,
                  border: "1px #E0E0E0",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search for sub Category"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>

              <Box sx={{ my: "2rem" }}>
                {category.map((object, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{`${object.title}`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                          {object.title}
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChangeRadio}
                        >
                          <FormControlLabel
                            value={object.select1}
                            control={<Radio />}
                            label={object.select1}
                          />
                          <FormControlLabel
                            value={object.select2}
                            control={<Radio />}
                            label={object.select2}
                          />
                          <FormControlLabel
                            value={object.select3}
                            control={<Radio />}
                            label={object.select3}
                          />
                        </RadioGroup>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>

              {/* ******* CATEGORY COMPONENT STARTS ENDS ******* */}
            </Container>
          </Container>
        </Box>
      )}
      {isTabletOrMobile && (
        <>
          <Container>
            <Typography className="titleMobile">Filter</Typography>

            {/* ******* Input Model ******* */}
            <Box sx={{ mt: 1 }}>
              <label for="cars" className="dropdownLabelMobile">
                Model
              </label>
              <select name="cars" id="cars" className="dropdownSelectMobile">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </Box>
            {/* ******* Input Model Ends ******* */}

            {/* ******* Input Year ******* */}
            <Box sx={{ mt: 1 }}>
              <label for="cars" className="dropdownLabelMobile">
                Year
              </label>
              <select name="cars" id="cars" className="dropdownSelectMobile">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </Box>
            {/* ******* Input Year Ends ******* */}

            {/* ******* Input Year ******* */}
            <Box sx={{ mt: 1 }}>
              <label for="cars" className="dropdownLabelMobile">
                Variant
              </label>
              <select name="cars" id="cars" className="dropdownSelectMobile">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </Box>
            {/* ******* Input Year Ends ******* */}

            {/* ******* CATEGORY COMPONENT STARTS ******* */}
            <Container className="categoryBoxContainer">
              <Typography className="titleCatMobile">Category</Typography>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  marginTop: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  width: 240,
                  border: "1px #E0E0E0",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search for sub Category"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>

              <Box sx={{ my: "2rem" }}>
                {category.map((object, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{`${object.title}`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                          {object.title}
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChangeRadio}
                        >
                          <FormControlLabel
                            value={object.select1}
                            control={<Radio />}
                            label={object.select1}
                          />
                          <FormControlLabel
                            value={object.select2}
                            control={<Radio />}
                            label={object.select2}
                          />
                          <FormControlLabel
                            value={object.select3}
                            control={<Radio />}
                            label={object.select3}
                          />
                        </RadioGroup>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>

              {/* ******* CATEGORY COMPONENT STARTS ENDS ******* */}
            </Container>
          </Container>
        </>
      )}
    </>
  );
};

export default FilterBox;
