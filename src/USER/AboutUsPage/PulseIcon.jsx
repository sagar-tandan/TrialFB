import React from "react";

const PulseIcon = ({ icon: Icon }) => {
  return (
    <div className="relative m-4">
      <div className="absolute -inset-4 bg-purple-500/20 rounded-full animate-pulse" />
      <div className="absolute -inset-2 bg-purple-500/30 rounded-full" />
      <Icon className="relative text-purple-500" strokeWidth={1.5} />
    </div>
  );
};

export default PulseIcon;
