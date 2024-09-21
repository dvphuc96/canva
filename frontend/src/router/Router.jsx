import { useRoutes } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Home } from "../components/Home";
import { TemplateList } from "../components/TemplateList";
import { ProjectList } from "../components/ProjectList";

export const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/templates",
          element: <TemplateList />,
        },
        {
          path: "/projects",
          element: <ProjectList />,
        },
      ],
    },
  ]);
  return routing;
};
