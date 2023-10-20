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
        <Grid container>
          <Grid xs={12} mt={3}>
            <span>Umang</span>
          </Grid>
          <Grid xs={12}>
            <Link
              class="no-underline pr-1"
              href="https://www.linkedin.com/in/umangpatel30/"
              color="inherit"
            >
              LinkedIn
            </Link>
            <Link
              class="no-underline"
              href="https://github.com/umang070"
              color="inherit"
            >
              Github
            </Link>
          </Grid>
        </Grid>
        <Grid mt={3}>
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
