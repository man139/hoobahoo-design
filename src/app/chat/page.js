
"use client";

import React, { useState } from "react";
import {Grid, useMediaQuery } from "@mui/material";
import ChatModule from "@/components/ChatScreen";
import ChatLayout from "@/components/ChatScreen/ChatLayout";

export default function Chat() {
  const [selectedName, setSelectedName] = useState("");
  const isTablet = useMediaQuery("(max-width:830px)");

  const manageSelect = (name) => {
    setSelectedName(name);
  };

  const handleBackClick = () => {
    setSelectedName("");
  };

  return (
    <Grid container>
      {isTablet ? (
        selectedName ? (
          <ChatLayout
            selectedName={selectedName}
            handleBackClick={handleBackClick}
          />
        ) : (
          <ChatModule manageSelect={manageSelect} />
        )
      ) : (
        <>
          <ChatModule manageSelect={manageSelect} />
          {selectedName && <ChatLayout selectedName={selectedName} />}
        </>
      )}
    </Grid>
  );
}
