import { Card } from "@mui/material";
import React from "react";

const SubCategory = (item) => {
  return (
    <div>
      <Card sx={{ minHeight: 50 }}>
        <p>{item.name}</p>
        <p>{item.description}</p>
      </Card>
    </div>
  );
};

export default SubCategory;
