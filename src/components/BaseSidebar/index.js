import React from "react";
import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar";

const FixedSidebarLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        sx={{
          width: { xs: "0", sm: "30%", md: "25%" },
          position: "fixed",
          height: "100vh",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "70%", md: "75%" },
          marginLeft: { sm: "30%", md: "25%" }, 
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FixedSidebarLayout;
