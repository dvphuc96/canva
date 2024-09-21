import { useRoutes } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Home } from "../components/Home";
import { TemplateList } from "../components/TemplateList";
import { ProjectList } from "../components/ProjectList";
import { CreateDesign } from "../components/CreateDesign";

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
    {
      path: "/design/create",
      element: <CreateDesign />,
    },
  ]);
  return routing;
};
