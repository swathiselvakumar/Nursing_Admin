// import React from "react";
import { routeConfig } from "./Routes";
import { Route, Routes } from "react-router-dom";
import SideNavigationbar from "../components/Common/Sidebar";

export default function RouterConfig() {
  return (
    <Routes>
      {routeConfig.map((route) => {
        const { route: path, Component: Comp } = route;
        return route?.isPublic ? (
          <Route path={path} element={<Comp />} />
        ) :
        (route.type==1)?(
          <Route path={path} element={<Comp />} />
        ):
        (
          <Route key={path} element={<SideNavigationbar />}>
            <Route path={path} element={<Comp />} />
          </Route>
        );
      })}
    </Routes> 
  ); 
}
