"use client";

import React from "react";

function ArrowLeftIcon() {
  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <svg
      onClick={handleBack}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_18_307)">
        <mask
          id="mask0_18_307"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <path d="M0 0H32V32H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_18_307)">
          <path d="M21 6L11 16L21 26" stroke="black" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_18_307">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowLeftIcon;
