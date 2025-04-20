"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const messages = [
  { from: "user", subMessage: "hello" },
  { from: "friend", subMessage: "hello kese ho?" },
  { from: "user", subMessage: "bahut Khush" },
  { from: "friend", subMessage: "hwi" },
  { from: "user", subMessage: "kya ker rahe ho" },
  { from: "friend", subMessage: "kuch na tum batao" },
  { from: "user", subMessage: "i am eating samosa" },
  { from: "friend", subMessage: "Nice?Really?" },
  { from: "user", subMessage: "yes,Really" },
  { from: "friend", subMessage: "Cool Cool" },
  { from: "user", subMessage: "What are you Up To" },
  { from: "friend", subMessage: "nothing Much" },
  { from: "user", subMessage: "just eating Cookies" },
  { from: "friend", subMessage: "What's your name?" },
];

const StyledGridItem = styled(Grid)({
  height: "100vh",
  background: "#0F0F0F",
  border: "2px solid #1B1B1B",
  paddingInline: "20px",
  paddingBlock: "10px",
  position: "relative",
  color: "white",
});

const HeaderStack = styled(Stack)({
  padding: "15px",
  background: "#0F0F0F",
  position: "sticky",
  top: 0,
});

const MessageBox = styled(Box)(({ theme }) => ({
  padding: "15px",
  overflowY: "auto",
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));
const StyledMessage = styled(Typography)(({ theme, message }) => ({
  color: "white",
  maxWidth: "75%",
  backgroundColor: message.from === "user" ? "#262626" : "#C171EB",
  margin: "5px",
  borderRadius: "10px",
  padding: "7px",
  textAlign: message.from === "friend" ? "right" : "left",
}));

const ChatLayout = ({ selectedName, handleBackClick }) => {
  return (
    <StyledGridItem item sm={12} md={6} xs={12} lg={7}>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 0,
        }}
      >
        <HeaderStack direction="row" alignItems="center" spacing={2}>
          <IconButton onClick={handleBackClick}>
            <ArrowBackIosIcon sx={{ color: "white", marginRight: "8px" }} />
          </IconButton>
          <Image
            src="/assets/profile.svg"
            alt="Profile"
            height={50}
            width={50}
          />
          <Box>
            <Typography
              fontSize={15}
              noWrap
              sx={{
                maxWidth: 150,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {selectedName || "User name"}
            </Typography>
            <Typography
              fontSize={12}
              noWrap
              sx={{
                maxWidth: 150,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              abc_xyz_123
            </Typography>
          </Box>
        </HeaderStack>

        <MessageBox>
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent:
                  message.from === "friend" ? "flex-end" : "flex-start",
              }}
            >
              <StyledMessage message={message}>
                {message.subMessage}
              </StyledMessage>
            </Box>
          ))}
        </MessageBox>

        <Box
          sx={{
            padding: "15px",
            backgroundColor: "#0F0F0F",
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter your text here"
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <ImageIcon sx={{ color: "white", marginRight: "8px" }} />
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                fontFamily: "Arial",
                backgroundColor: "#262626",
                borderRadius: "30px",
                height: "45px",
              },
            }}
          />
        </Box>
      </Container>
    </StyledGridItem>
  );
};

export default ChatLayout;
