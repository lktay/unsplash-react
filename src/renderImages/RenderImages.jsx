import React from "react";
import { Stack } from "@mui/material";

const RenderArtists = ({ item }) => {
  return (
    <Stack
      justifyContent="space-around"
      alignItems="center"
      direction="column"
      marginBottom={6}
    >
      <h1>{item.name}</h1>
      <img
        height="400px"
        src={item.url}
        alt={item.name}
      />
      <p>{item.description}</p>
    </Stack>
  );
};

export default RenderArtists;
