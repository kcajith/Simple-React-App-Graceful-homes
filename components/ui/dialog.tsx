import React from "react";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={() => onOpenChange(false)}>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export const DialogContent: React.FC<{className?: string, children: React.ReactNode}> = ({ className = "", children }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
