import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PaletteIcon from "@mui/icons-material/Palette";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import "../css/ThemeModal.css";

export default function ThemeModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const themes = [
    "default",
    "aether",
    "bento",
    "bingsu",
    "blueberry dark",
    "botanical",
    "bouquet",
    "cafe",
    "carbon",
    "comfy",
    "darling",
    "deku",
    "dev",
    "ez mode",
    "honey",
    "joker",
    "laser",
    "menthol",
    "miami",
    "nebula",
    "vscode",
  ];
  const [theme, setTheme] = useState(localStorage.getItem("theme-tt") || "default");
  useEffect(() => {
    document.body.className = theme.replace(/ /g, "");
    localStorage.setItem("theme-tt", theme.replace(/ /g, ""));
  }, [theme]);
  return (
    <div>
      <div className="theme-icon">
        <PaletteIcon onClick={handleOpen} />
      </div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box className="theme-modal">
          <div className="modal-title">
            Choose a theme
            <PaletteIcon />
          </div>
          {themes.map((th, idx) => (
            <div
              key={idx}
              className="theme"
              onClick={() => {
                setTheme(th);
                setOpen(false);
              }}
              onMouseEnter={() => setTheme(th)}
            >
              {th === theme && <CheckCircleOutlineRoundedIcon />}
              {th}
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
