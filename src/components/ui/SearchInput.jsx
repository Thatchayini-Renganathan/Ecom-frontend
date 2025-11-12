import React from "react"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"

export default function SearchInput() {
  return (
   <TextField
  variant="standard"
  placeholder="Search products..."
  fullWidth
  InputProps={{
    disableUnderline: true,
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon className="mx-3"/>
      </InputAdornment>
    ),
  }}
  sx={{
  backgroundColor: "white",

        borderRadius: "15px",

        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",

        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },

        "& .MuiInputBase-root": {
          height: 48,
          borderRadius: "20px",
        },
        "& .MuiInputBase-input": {
          padding: "0 12px",
        },
      }}

/>

  )
}
