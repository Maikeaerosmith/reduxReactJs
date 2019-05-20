import React from "react";
import Sidebar from "../../components/Sidebar";
import Video from "../../components/Video";

export default function Main() {
  return (
    <div className="container">
      <Video />
      <Sidebar />
    </div>
  );
}
