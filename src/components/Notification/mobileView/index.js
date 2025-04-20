"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import ListNotification from "../List";
import FollowButton from "../FollowButton";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";

const StyledGridItem = styled(Grid)({
  height: "calc(100vh - 60px)",
  background: "#0F0F0F",
  borderRight: "2px solid #1B1B1B",
  position: "relative",
  color: "white",
  paddingBottom: "16px",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const RowBox = styled(Stack)({
  flexDirection: "row",
  gap: 16,
  alignItems: "center",
});

const NotificationStack = styled(Stack)({
  marginTop: 26,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const MobileNotification = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const items = [
    { icon: <HomeIcon sx={{ fontSize: "20px", color: "white" }} /> },
    { icon: <HomeIcon sx={{ fontSize: "20px", color: "white" }} /> },
    { icon: <HomeIcon sx={{ fontSize: "20px", color: "white" }} /> },
    { icon: <HomeIcon sx={{ fontSize: "20px", color: "white" }} /> },
    { icon: <HomeIcon sx={{ fontSize: "20px", color: "white" }} /> },
  ];

  const notificationsList = [
    {
      name: "sima Shaan",
      subText: "Stared Following You",
      hour: "9h",
      hasFollowButton: true,
    },
    {
      name: "Poonam Pandey",
      subText: "Stared Following You.",
      hour: "10h",
      hasFollowButton: true,
    },
    {
      name: "Abhijeet Lokhande",
      subText: "Liked Your Profile.",
      hour: "10h",
      hasFollowButton: false,
    },
    {
      name: "sima shaan",
      subText: "Stared Following You.",
      hour: "9h",
      hasFollowButton: true,
    },
    {
      name: "Poonam Panday",
      subText: "Stared Following You.",
      hour: "10h",
      hasFollowButton: true,
    },
    {
      name: "Abhijeet Lokhande",
      subText: "Liked Your Profile.",
      hour: "10h",
      hasFollowButton: false,
    },
    {
      name: "Abhijeet Lokhande",
      subText: "Liked Your Profile.",
      hour: "10h",
      hasFollowButton: false,
    },
    {
      name: "sima shaan",
      subText: "Stared Following You.",
      hour: "9h",
      hasFollowButton: true,
    },
  ];

  return (
    <>
      <StyledGridItem item xs={12}>
        <Container>
          <Box
            position="fixed"
            top={0}
            right={0}
            width="100%"
            bgcolor="#0F0F0F"
            boxShadow={2}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={() => router.back()}>
                <ArrowBackIosIcon sx={{ color: "white", marginRight: "8px" }} />
              </IconButton>
              <Typography sx={{ fontSize: 20, margin: 2 }}>
                Notifications
              </Typography>
            </Box>
            <Box>
              <Stack
                width="100%"
                direction="row"
                spacing={2}
                textAlign="center"
                alignContent="center"
                justifyContent="space-between"
                marginTop={2}
              >
                <Box
                  onClick={() => handleClick(0)}
                  sx={{
                    borderBottom:
                      activeIndex === 0 ? "2px solid #C171EB" : "none",
                    flex: 1,
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <Typography>Hoobahoo</Typography>
                </Box>
                <Box
                  onClick={() => handleClick(1)}
                  sx={{
                    borderBottom:
                      activeIndex === 1 ? "2px solid #C171EB" : "none",
                    flex: 1,
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <Typography>User</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>

          {notificationsList.map((notification, index) => (
            <NotificationStack key={index}>
              <ListNotification
                name={notification.name}
                subText={notification.subText}
                hour={notification.hour}
              />
              {notification.hasFollowButton && <FollowButton />}
            </NotificationStack>
          ))}
        </Container>
      </StyledGridItem>
      <Box position="fixed" bottom={0} left={0} width="100%">
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"space-evenly"}
          alignItems="center"
          width={"100%"}
          height={"60px"}
        >
          {items.map((item, index) => (
            <RowBox key={index}>
              <Box>{item.icon}</Box>
            </RowBox>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default MobileNotification;
