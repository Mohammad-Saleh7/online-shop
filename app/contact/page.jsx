"use client";

import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F4F4F4",
        color: "black",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          sx={{ mb: 3, textAlign: "center", fontWeight: 600 }}
        >
          Contact Us
        </Typography>

        <Typography
          sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}
        >
          Send us your message and we&apos;ll get back to you.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
          />

          <Button
            variant="contained"
            type="submit"
            disabled={loading}
            sx={{ mt: 1 }}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </Box>

        {status === "success" && (
          <Alert sx={{ mt: 2 }} severity="success">
            Your message has been sent!
          </Alert>
        )}
        {status === "error" && (
          <Alert sx={{ mt: 2 }} severity="error">
            {errorMsg}
          </Alert>
        )}
      </Container>
    </Box>
  );
}
