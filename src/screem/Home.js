import React from "react";
import Table from "../components/Table";
const Home = ({ data }) => {
  return (
    <div>
      <Table data={data} />
    </div>
  );
};
export default Home;
