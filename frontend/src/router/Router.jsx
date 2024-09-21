import { useRoutes } from "react-router-dom";
import { Layout } from "../pages/Layout";

export const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Layout />,

    },
  ]);
  return routing;
};
