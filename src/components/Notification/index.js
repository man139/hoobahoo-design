"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FollowButton from "./FollowButton";
import ListNotification from "./List";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";

const StyledGridItem = styled(Grid)({
  height: "100vh",
  background: "#0F0F0F",
  borderRight: "2px solid #1B1B1B",
  position: "relative",
  color: "white",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const Header = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  backgroundColor: "#0F0F0F",
  padding: theme.spacing(2),
  zIndex: 1,
  borderBottom: "1px solid #1B1B1B",
}));

const Notification = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();

  const isTablet = useMediaQuery("(max-width:830px)");

  const handleClick = (index) => {
    setActiveIndex(index);
  };
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
    <StyledGridItem item md={7} xs={12} sm={12} lg={7}>
      <Header>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => router.back()}>
            <ArrowBackIosIcon sx={{ color: "white", marginRight: "8px" }} />
          </IconButton>
          <Typography sx={{ fontSize: isTablet ? 22 : 20 }}>
            Notifications
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          spacing={2}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginTop={2}
        >
          <Box
            onClick={() => handleClick(0)}
            sx={{
              borderBottom: activeIndex === 0 ? "2px solid #C171EB" : "none",
              flex: 1,
              textAlign: "center",
            }}
          >
            <Typography>Hoobahoo</Typography>
          </Box>
          <Box
            onClick={() => handleClick(1)}
            sx={{
              borderBottom: activeIndex === 1 ? "2px solid #C171EB" : "none",
              flex: 1,
              textAlign: "center",
            }}
          >
            <Typography>User</Typography>
          </Box>
        </Stack>
      </Header>
      {notificationsList.map((notification, index) => (
        <Stack
          key={index}
          direction={"row"}
          mt={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <ListNotification
            name={notification.name}
            subText={notification.subText}
            hour={notification.hour}
          />
          {notification.hasFollowButton && <FollowButton />}
        </Stack>
      ))}
    </StyledGridItem>
  );
};

export default Notification;
