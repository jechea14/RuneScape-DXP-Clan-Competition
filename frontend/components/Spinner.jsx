import React from "react";
import { Loader } from "@mantine/core";

function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center mt-7 space-y-3">
      <h1>
        {" "}
        Server usage has been turned down to save usage time. Please wait...{" "}
      </h1>
      <Loader size="md" />
    </div>
  );
}

export default Spinner;
