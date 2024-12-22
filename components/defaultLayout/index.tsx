import React from "react";

const Defaultlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto max-w-7xl  px-6 flex-grow overflow-x-hidden">
      {children}
    </div>
  );
};

export default Defaultlayout;
