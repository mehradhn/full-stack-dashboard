import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";

function Products() {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  console.log("🚀 ~ file: index.jsx:19 ~ Products ~ data", data);
  return (
    <Box margin="1.5rem 2.5rem ">
      <Header title="PRODUCTS" subtitle="see your products" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridAutoColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& dev": {
              gridColumn: isNonMobile ? undefined : "span4",
            },
          }}
        ></Box>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default Products;
