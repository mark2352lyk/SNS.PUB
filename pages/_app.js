import React from "react";
import "antd/dist/antd.css";
import AppHeader from "../conponents/AppHeader";

const AppShell = ({ Component }) => {
  return (
    <>
      <AppHeader />
      <Component />
    </>
  );
};

export default AppShell;