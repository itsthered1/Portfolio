import Head from "next/head";
import Link from "next/link";
import { Stack, HStack, VStack, Image, Grid, GridItem } from "@chakra-ui/react";
import Layout from "../components/layout";

export default function Photo() {
  return (
    <div>
      <Grid
        h="100vh"
        autoRows="repeat(2, 1fr)"
        autoColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={2}
          bgImage="https://hazim.tech/logo.png"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPos="center"
        />
        <GridItem colSpan={2} />
        <GridItem colSpan={2} />
        <GridItem colSpan={4} />
        <GridItem rowSpan={2} />
        <GridItem colSpan={2} />
        <GridItem colSpan={2} />
        <GridItem colSpan={4} bg="gray" />
      </Grid>
    </div>
  );
}