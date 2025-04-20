"use client";
import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import Notification from "@/components/Notification";
import MobileNotification from "@/components/Notification/mobileView";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:425px)");

  return (
    <Grid container>
      {isMobile ? <MobileNotification /> : <Notification />}
    </Grid>
  );
}
