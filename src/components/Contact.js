import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "1px solid white",
  },
}));
const CssTextField = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <Typography variant="h4" align="center" mb={2}>
          Contact Me
        </Typography>

        <form onSubmit={handleSubmit} className="theme-color">
          <CssTextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
            inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
          />
          <CssTextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <CssTextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
