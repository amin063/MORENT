import React from "react";
import DetailsRental from "../../components/DetailsRental/detailsRental";
import Top5CarRental from "../../components/Top5CarRental/top5CarRental";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1 flex p-6 bg-gray-100 gap-5">
          <DetailsRental />
          <Top5CarRental />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
