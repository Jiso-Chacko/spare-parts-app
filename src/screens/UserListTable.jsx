import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Card,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState, useEffect, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const subscribarList = [
  {
    id: 1,
    fname: "john",
    lname: "doe",
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABCFintechLTD.com",
  },
  {
    id: 2,
    fname: "kessy",
    lname: "bryan",
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "MyFintechLTD.com",
  },
  {
    id: 3,
    fname: "kessy",
    lname: "bryan",
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "MyFintechLTD.com",
  },
  {
    id: 4,
    fname: "james",
    lname: "cassegne",
    name: "james cassegne",
    date: "8 january, 2019",
    amount: 5000,
    status: "close",
    company: "CollboyTechLTD.com",
  },
  {
    id: 5,
    fname: "lucy",
    lname: "brown",
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABCFintechLTD.com",
  },
  {
    id: 6,
    fname: "lucy",
    lname: "brown",
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABCFintechLTD.com",
  },
  {
    id: 7,
    fname: "lucy",
    lname: "brown",
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABCFintechLTD.com",
  },
  {
    id: 8,
    fname: "lucy",
    lname: "brown",
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABCFintechLTD.com",
  },
  {
    id: 9,
    fname: "lucy",
    lname: "brown",
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABCFintechLTD.com",
  },
];

const CardRoot = styled(Card)(() => ({
  height: "100%",
  padding: "20px 24px",
}));

const CardTitle = styled("div")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize",
  //   marginBottom: !subtitle && '16px',
}));

const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showModalAdd, setshowModalAdd] = useState(false);
  const [showModalEdit, setshowModalEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const fnameRef = useRef();

  const handleEditUser = (id) => {
    console.log(fnameRef.current.innerHTML);
    console.log(id);
    setshowModalEdit(true);
    setOpenEdit(true);
    setOpen(false);
  };

  useEffect(() => {
    console.log(fnameRef.current.value);
  }, [handleEditUser]);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAddNewUser = () => {
    setshowModalAdd(true);
    setOpen(true);
    // console.log(openEdit, open);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  return (
    <Container>
      <CardRoot elevation={6}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CardTitle>User management</CardTitle>
          <Button variant="contained" onClick={handleAddNewUser}>
            Add New User
          </Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New User</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="First name"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Last name"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} sx={{ color: "red" }}>
                Cancel
              </Button>
              <Button onClick={handleClose} sx={{ color: "green" }}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box width="100%" overflow="auto">
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Start Date</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="right">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscribarList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subscriber, index) => (
                  <TableRow key={index}>
                    <TableCell
                      align="left"
                      ref={fnameRef}
                      value={subscriber.fname}
                    >
                      {subscriber.name}
                    </TableCell>

                    <TableCell align="center">{subscriber.company}</TableCell>
                    <TableCell align="center">{subscriber.date}</TableCell>
                    <TableCell align="center">{subscriber.status}</TableCell>
                    <TableCell align="center">${subscriber.amount}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={(index) => handleEditUser(index)}>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </StyledTable>

          <Dialog open={openEdit} onClose={handleCloseEdit}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="First name"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Last name"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEdit} sx={{ color: "red" }}>
                Cancel
              </Button>
              <Button onClick={handleCloseEdit} sx={{ color: "green" }}>
                Save
              </Button>
            </DialogActions>
          </Dialog>

          <TablePagination
            sx={{ px: 2 }}
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            count={subscribarList.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ "aria-label": "Next Page" }}
            backIconButtonProps={{ "aria-label": "Previous Page" }}
          />
        </Box>
      </CardRoot>
    </Container>
  );
};

export default PaginationTable;
