import React from "react";
import { Loader } from "@mantine/core";

function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader size="md" />
    </div>
  );
}

export default Spinner;
