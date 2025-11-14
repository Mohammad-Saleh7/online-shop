"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ActionAreaCard from "@/components/CardComp";
import products from "@/data/products.json";
import CardComp from "@/components/CardComp";

export default function page() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          bgcolor: "#020c22",
          paddingBottom: "100px",
          color: "white",
        }}
      >
        <Box sx={{ mt: "50px" }}>
          <Typography variant="h4" component={"h4"}>
            All Your Digital Products
          </Typography>
          <Typography
            variant="h4"
            component={"h4"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Is One Click Away.
          </Typography>
        </Box>
        <Typography variant="body1">
          Start Exploring State of the Art Assest Now!
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained">Get Started</Button>
          <Button variant="outlined">Learn More</Button>
        </Box>
      </Box>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ color: "black", fontWeight: "bold" }} variant="h6">
            Brand New
          </Typography>
          <Link
            href={"/products"}
            style={{ color: "black", display: "flex", textDecoration: "none" }}
          >
            View All Collection
            <ArrowRightAltIcon />
          </Link>
        </Box>
        <Grid container spacing={1} mt={5} mb={5}>
          {products.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardComp
                id={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
