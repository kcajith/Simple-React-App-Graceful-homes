import React from "react";

export const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={() => onOpenChange(false)}>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ className = "", children }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
