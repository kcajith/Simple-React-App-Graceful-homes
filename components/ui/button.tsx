import React from "react";

export const Button = ({ className = "", children, ...props }) => (
  <button className={`rounded px-4 py-2 font-semibold shadow ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
