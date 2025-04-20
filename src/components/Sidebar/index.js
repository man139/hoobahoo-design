"use client";
import React from "react";
import { Box, Container, Stack, styled, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

const SidebarContainer = styled(Box)({
  height: "100vh",
  background: "#0F0F0F",
  borderRight: "2px solid #1B1B1B",
  paddingLeft: "2%",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingBottom: "3%",
});

const LogoImage = styled(Image)({
  height: "15vh",
  width: "15vw",
});

const RowBox = styled(Stack)({
  marginBlock: 4,
  flexDirection: "row",
  gap: 16,
  alignItems: "center",
});

const ButtonText = styled(Box)(({ isTablet }) => ({
  marginLeft: 0,
  marginTop: "20px",
  borderRadius: "30px",
  height: "7vh",
  width: isTablet ? "16vw" : "13vw",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(90deg, #784436, #68407D) border-box",
  border: "2px solid transparent",
}));

const items = [
  {
    text: "Home",
    icon: <HomeIcon />,
    href: "/home",
  },
  {
    text: "Explore",
    icon: <HomeIcon />,
    href: "/explore",
  },
  {
    text: "Create a Hoobahoo",
    icon: <HomeIcon />,
    href: "/create",
  },
  {
    text: "Notifications",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    text: "Chat",
    icon: <HomeIcon />,
    href: "/chat",
  },
];

const Sidebar = () => {
  const isTablet = useMediaQuery("(max-width:830px)");

  return (
    <SidebarContainer>
      <Container sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Box>
          <Box>
            <LogoImage src={"/assets/hoobahooLogo.svg"} alt="hoobahoo-logo" width={40} height={40} />
          </Box>
          {items.map((item, index) => (
            <Link key={index} href={item.href} style={{ textDecoration: "none" }}>
              <RowBox>
                <Box>
                  {React.cloneElement(item.icon, { sx: { fontSize: "30px", color: "white" } })}
                </Box>
                <Typography sx={{ fontSize: isTablet ? "14px" : "18px", color: "white" }}>
                  {item.text}
                </Typography>
              </RowBox>
            </Link>
          ))}
          <ButtonText isTablet={isTablet}>Get Premium</ButtonText>
        </Box>
        <Stack direction="row" alignItems="center" marginBottom={2} spacing={2}>
          <Image src={"/assets/profile.svg"} alt="profile" height={50} width={45} />
          <Box>
            <Typography fontSize={15} noWrap sx={{ maxWidth: 150, overflow: "hidden", textOverflow: "ellipsis" }}>
              User name
            </Typography>
            <Typography fontSize={12} noWrap sx={{ maxWidth: 150, overflow: "hidden", textOverflow: "ellipsis" }}>
              abc_xyz_123
            </Typography>
          </Box>
        </Stack>
      </Container>
    </SidebarContainer>
  );
};

export default Sidebar;
