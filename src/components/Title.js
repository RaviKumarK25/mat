import React from "react";

export default function Title({ children }) {
  return (
    <h2 className="text-xl dark:text-white text-secondary font-semibold text-center">
      {children}
    </h2>
  );
}
