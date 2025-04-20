"use client";

import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ChatList from "./List";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";

const StyledGridItem = styled(Grid)({
  height: "100vh",
  background: "#0F0F0F",
  borderRight: "2px solid #1B1B1B",
  position: "relative",
  color: "white",
  overflowY: "scroll",
  scrollbarWidth: "none",
});

const Header = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  backgroundColor: "#0F0F0F",
  padding: theme.spacing(2),
  zIndex: 1,
  display: "flex",
  alignItems: "center",
}));

const ChatModuleList = [
  { name: "Shakti hoobahoo", hour: "shakti kr..." },
  { name: "Poonam Pandey", hour: "shakti kr..." },
  { name: "Abhijeet Lokhande", hour: "shakti kr..." },
  { name: "sima shaan", hour: "shakti kr..." },
  { name: "Poonam Panday", hour: "shakti kr..." },
  { name: "Abhijeet Lokhande", hour: "shakti kr..." },
  { name: "Abhijeet Lokhande", hour: "shakti kr..." },
  { name: "sima shaan", hour: "shakti kr..." },
  { name: "sima shaan", hour: "shakti kr..." },
];

const ChatModule = ({ manageSelect }) => {
  const router = useRouter();
  const isTablet = useMediaQuery("(max-width:830px)");

  const handleNameClick = (name) => {
    manageSelect(name);
  };

  return (
    <StyledGridItem item md={6} xs={12} sm={8} lg={5}>
      <Header>
        <IconButton onClick={() => router.back()}>
          <ArrowBackIosIcon sx={{ color: "white", marginRight: "8px" }} />
        </IconButton>
        <Typography sx={{ fontSize: isTablet ? 22 : 20 }}>All Chat</Typography>
      </Header>
      {ChatModuleList.map((notification, index) => (
        <Stack
          key={index}
          direction={"row"}
          mt={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          onClick={() => handleNameClick(notification.name)}
        >
          <ChatList name={notification.name} hour={notification.hour} />
        </Stack>
      ))}
    </StyledGridItem>
  );
};

export default ChatModule;
