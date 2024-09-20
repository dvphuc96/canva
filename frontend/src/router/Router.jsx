import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";

export const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return routing;
};
