import { Container, styled, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const StyledContainer = styled(Container)((isMobile) => ({
  backgroundColor: "#C171EB",
  height: "6%",
  borderRadius: "7px",
  padding: "1%",
  marginRight: "7px",
  width: "20%",
  textAlign: "center",
}));
const FollowButton = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  return (
    <StyledContainer isMobile={isMobile}>
      <Typography fontSize={"13px"}>Follow</Typography>
    </StyledContainer>
  );
};

export default FollowButton;
