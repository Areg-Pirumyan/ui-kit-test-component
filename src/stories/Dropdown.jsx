import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "@mui/icons-material/Done";
import { FcGoogle } from "react-icons/fc";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import { Typography } from "@mui/material";

export default function Dropdown() {
  const menuItems = [
    {
      title: "Variant 1",
      value: "1",
    },
    {
      title: "Variant 2",
      value: "2",
    },
    {
      title: "Variant 3",
      value: "3",
    },
  ];

  const [loading, setLoading] = React.useState(true);
  
  const [defaultVariant, setDefaultVariant] = React.useState("");
  const [googleVariant, setGoogleVariant] = React.useState("");
  const [radioVariant, setRadioVariant] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDefaultVariant(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setGoogleVariant(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setRadioVariant(typeof value === "string" ? value.split(",") : value);
  };


  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gridGap: "50px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          input={<OutlinedInput label="Select" />}
          value={defaultVariant}
          onChange={handleChange}
          sx={{ maxWidth: "300px", width: "100%" }}
          renderValue={(selected) => selected.join(", ")}
          onOpen={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          }}
        >
          {loading ? (
            <Box
              sx={{
                padding: "10px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            menuItems.map((item, index) => (
              <MenuItem
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={index}
                value={item.title}
              >
                <ListItemText primary={item.title} />
                {defaultVariant == item.title && <DoneIcon color="success" />}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          input={<OutlinedInput label="Select" />}
          value={googleVariant}
          onChange={handleChange2}
          sx={{ maxWidth: "300px", width: "100%" }}
          renderValue={(selected) => selected.join(", ")}
          onOpen={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          }}
        >
          {loading ? (
            <Box
              sx={{
                padding: "10px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            menuItems.map((item, index) => (
              <MenuItem
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={index}
                value={item.title}
              >
                <Box
                  sx={{
                    display: "flex",
                    gridGap: "10px",
                    alignItems: "center",
                  }}
                >
                  <FcGoogle />
                  <ListItemText primary={item.title} />
                </Box>
                {googleVariant == item.title && <DoneIcon color="success" />}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">Select</InputLabel>
        <Select
          sx={{ maxWidth: "300px", width: "100%" }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={radioVariant}
          onChange={handleChange3}
          onOpen={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          }}
          input={<OutlinedInput label="Select" />}
          renderValue={(selected) => selected.join(", ")}
        >
          {loading ? (
            <Box
              sx={{
                padding: "10px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            menuItems.map((item) => (
              <MenuItem
                key={item.title}
                value={item.title}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gridGap: "70px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gridGap: "10px",
                    alignItems: "center",
                  }}
                >
                  <Radio checked={radioVariant.indexOf(item.title) > -1} />
                  <ListItemText
                    sx={{ fontWeight: "bold" }}
                    primary={item.title}
                  />
                </Box>
                <Typography sx={{ color: "#AFAFC2" }}>
                  Best for Business owners and company administrators
                </Typography>
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
