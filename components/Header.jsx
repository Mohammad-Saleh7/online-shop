"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import ShopButton from "./ShopButton";
import Link from "next/link";
import { Button } from "@mui/material";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#020c22" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href={"/"}>
            <Image src="/navlogo.png" width={80} height={80} alt="navlogo" />
          </Link>
          <Box
            sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 2 }}
          >
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              sx={{ color: "white" }}
            >
              Contact
            </Button>
            <ShopButton />

            <Tooltip>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Travis Howard"
                  sx={{ width: "32px", height: "32px" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
