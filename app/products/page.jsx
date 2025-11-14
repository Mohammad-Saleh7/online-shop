"use client";

import { Container, Grid } from "@mui/material";
import CardComp from "@/components/CardComp";
import products from "@/data/products";

export default function ProductsPage() {
  return (
    <Container>
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
  );
}
