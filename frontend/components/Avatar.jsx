import React from "react";
import Image from "next/image";

export default function Avatar({ data, width, height }) {
  const base64Data = data.avatar?.data.toString("base64"); // get base64 data from the binary data
  const src = `data:${data.avatar?.contentType};base64,${base64Data}`; // create image source using base64 data and content type
  return <Image src={src} alt={data._id} width={width} height={height} />;
}
