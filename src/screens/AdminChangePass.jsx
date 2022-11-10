import * as React from "react";
import { styled, emphasize } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useRef } from "react";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
      cursor: "pointer",
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const Fieldwrapper = styled("div")({
  display: "flex",
});

// const StyledContainer = styled(Container)(() => ({
//   background:'red'
// }))

export default function AdminChangePass() {
  const [expanded, setExpanded] = React.useState(false);
  const [editFirstName, setEditableFirstName] = useState(true);
  const [editLastName, setEditableLastName] = useState(true);
  const [disaleInputFeild, setInputField] = useState(true);
  const inputFname = useRef();
  const inputLname = useRef();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleEditFname = () => {
    inputFname.current.focus();
    setEditableFirstName(false);
    setInputField(false);
  };

  const handleEditLname = () => {
    setInputField(false);
    inputLname.current.focus();
    setEditableLastName(false);
    console.log(disaleInputFeild);
  };

  return (
    <>
      {/* <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Icons" },
          ]}
        />
      </Box> */}
      <Container sx={{ mt: "1rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Breadcrumbs aria-label="breadcrumb">
            {/* <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link> */}
            <StyledBreadcrumb
              component="a"
              href="/admin"
              label="Dashboard"
              icon={<DashboardIcon fontSize="small" />}
            />

            <StyledBreadcrumb
              component="a"
              href="/adminProfile"
              label="Profile"
              icon={<PersonIcon fontSize="small" />}
            />

            <Typography color="text.primary">Change Password</Typography>
          </Breadcrumbs>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "1rem",
        }}
      >
        <Card sx={{ maxWidth: 500, width: "45rem" }}>
          <CardHeader title="Change Password" sx={{ textAlign: "center" }} />

          <CardContent>
            <Fieldwrapper
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mt: "1rem" }}
                >
                  Current Password
                </Typography>
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-read-only-input"
                  InputProps={{
                    readOnly: false,
                  }}
                  variant="filled"
                  inputRef={inputFname}
                  // disabled={disaleInputFeild}
                />
                {/* <IconButton
                  aria-label="Edit lastname"
                  onClick={handleEditFname}
                >
                  <EditIcon />
                </IconButton> */}
              </Box>
            </Fieldwrapper>

            <Fieldwrapper
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mt: "1rem" }}
                >
                  Re-Current Password
                </Typography>
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-read-only-input"
                  InputProps={{
                    readOnly: false,
                  }}
                  variant="filled"
                  inputRef={inputFname}
                  // disabled={disaleInputFeild}
                />
                {/* <IconButton
                  aria-label="Edit lastname"
                  onClick={handleEditFname}
                >
                  <EditIcon />
                </IconButton> */}
              </Box>
            </Fieldwrapper>
            <Fieldwrapper
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mt: "1rem" }}
                >
                  New password
                </Typography>
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-read-only-input"
                  InputProps={{
                    readOnly: false,
                  }}
                  variant="filled"
                  inputRef={inputLname}
                  // disabled={disaleInputFeild}
                />
                {/* <IconButton
                  aria-label="Edit lastname"
                  onClick={handleEditLname}
                >
                  <EditIcon />
                </IconButton> */}
              </Box>
            </Fieldwrapper>
          </CardContent>

          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Button variant="contained">Save</Button>
            </Box>
            {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
          </CardActions>
          {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        </CardContent>
      </Collapse> */}
        </Card>
      </Container>
    </>
  );
}
