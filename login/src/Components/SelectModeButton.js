import "./SelectModeButton.css";
import React, { useState, useEffect } from "react";

export default function SelectModeButton({
  onClick,
  children,
  label,
  currentTab,
}) {
  const currentValue = label === currentTab ? true : false;

  const [isSelected, setIsSelected] = useState(currentValue);

  useEffect(() => {
    setIsSelected(currentValue);
  }, [currentTab]);

  const selectHandler = () => {
    onClick(label);
  };

  return (
    <button
      style={
        isSelected ? { backgroundColor: "#fff" } : { backgroundColor: "#eee" }
      }
      className="button"
      onClick={selectHandler}
    >
      {children}
    </button>
  );
}
