import React from "react";
import UserListTable from "./UserListTable";
import SimpleCard from "../components/AdminLayout/Layout1/SimpleCard";
import { Container } from "@mui/system";

const AdminUsermanagemet = () => {
  return (
    <Container sx={{ mt: "1rem" }}>
      <UserListTable />
    </Container>
  );
};

export default AdminUsermanagemet;
