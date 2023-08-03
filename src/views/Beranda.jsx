import React from "react";
import { useParams } from "react-router-dom";

export default function Beranda() {
  const { id } = useParams();
  return <section className="p-5">beranda</section>;
}
