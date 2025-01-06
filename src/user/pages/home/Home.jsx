import React, { useState } from "react";
import BasicContainer from "../../components/containers/BasicContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import MenuBtn from "../../components/button/MenuBtn";
function Home() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className={`h-full grid grid-cols-10 gap-10 relative `}>
      <Sidebar isMenu={isMenu} setIsMenu={setIsMenu} />
      <BasicContainer />
      <MenuBtn isMenu={isMenu} setIsMenu={setIsMenu} />
    </div>
  );
}

export default Home;
