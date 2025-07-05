import React from "react";

export const Card = ({ className = "", children, ...props }) => (
  <div className={`bg-white rounded-lg shadow p-4 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
