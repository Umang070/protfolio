import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Facebook, Instagram, GitHub } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box className="footer">
      <Container>
        <Grid mt={2}>
          <Typography variant="body2">
            {"©"} {new Date().getFullYear()}{" "}
            <span color="inherit">Umang Patel</span>
            <span color="inherit">{" - "}Contact</span>
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}
