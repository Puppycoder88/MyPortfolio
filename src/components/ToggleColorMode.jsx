/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, RadioGroup, Radio, FormControlLabel } from "@mui/material";

export default function ThemeTogglePanel({ mode, setMode }) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <RadioGroup
        row
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <FormControlLabel value="light" control={<Radio />} label="Light" />
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
      </RadioGroup>
    </Box>
  );
}

ThemeTogglePanel.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
};
