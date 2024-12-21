import React from "react";
import BasicContainer from "../../components/containers/BasicContainer";
import Sidebar from "../../components/sidebar/Sidebar";
function Home() {
  return (
    <div className="h-full grid grid-cols-10 gap-10 relative">
      <Sidebar />
      <BasicContainer />
    </div>
  );
}

export default Home;
