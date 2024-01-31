import React, { useState, useEffect } from "react";

const WindowHeightCalculator = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    window.addEventListener("resize", updateWindowHeight);

    return () => {
      window.removeEventListener("resize", updateWindowHeight);
    };
  }, []);

  return { windowHeight };
};

export default WindowHeightCalculator;
