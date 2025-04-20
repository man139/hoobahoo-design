"use client";

import React from "react";
import {
  Container,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

const ListNotification = ({ name, subText, hour }) => {
  const isTablet = useMediaQuery("(max-width:830px)");
  const isMobile = useMediaQuery("(max-width:425px)");

  return (
    <Container>
      <Stack
        direction="row"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Stack direction="row" alignItems="center">
          <Image
            src={"/assets/profile.svg"}
            alt="logo"
            height={isMobile ? 45 : 50}
            width={isMobile ? 45 : 50}
            style={{ paddingRight: "12px" }}
          />

          <Stack direction="row" alignItems="center">
            <Typography
              fontSize={isMobile ? 12 : isTablet ? 13 : 15}
              fontWeight={"bold"}
            >
              {`${name} ${subText} ${hour}`}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ListNotification;
