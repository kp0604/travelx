import { React, useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { addItems } from "../features/citySlice";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [cities, setCities] = useState([]);

  const dispatch = useDispatch();

  const getCityObj = async () => {
    let res = await fetch("city.json");
    let data = await res.json();
    setCities(data.cities);
  };

  useEffect(() => {
    getCityObj();
  }, []);

  const PaperSug = function (props) {
    return (
      <Paper
        {...props}
        sx={{ borderRadius:0, "& .MuiAutocomplete-listbox": {
            padding: "0px 0px",
        },
        }}
        elevation={0}
        placement="bottom-start"
      />
    );
  };

  return (
    <div>
      <Autocomplete
        freeSolo
        PaperComponent={PaperSug}
        sx={{
          "& .MuiAutocomplete-endAdornment": {
          top: "calc(50% - 20px)"
        }}}
        onChange={(value) => dispatch(addItems(value))}
        multiple
        id="tags-filled"
        options={cities.map((city) => city.name)}
        forcePopupIcon={true}
        popupIcon={<SearchIcon fontSize="large"/>}
        renderOption={(props, option) => {
          return (
            <Typography
              {...props}
              sx={{ backgroundColor: "#e3f2fd", marginBottom: 0.2 }}
              variant="h6"
              component="h2"
            >
              {option}
            </Typography>
          );
        }}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              sx={{
                borderRadius: "0",
                backgroundColor: "#e3f2fd",
                fontSize: 15,
              }}
              deleteIcon={
                <ClearSharpIcon
                  sx={{ paddingLeft: "10px"}}
                />
              }
              variant="filled"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  border: 6,
                  borderColor: "whitesmoke",
                  borderRadius: 0,
                },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": { border: 6, borderColor: "#e3f2fd" },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": { border: 6, borderColor: "#e3f2fd" },
              },
            }}
            placeholder="Search cities..."
          />
        )}
      />
    </div>
  );
};

export default Search;
