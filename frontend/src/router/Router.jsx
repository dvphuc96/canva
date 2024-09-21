import { useRoutes } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Home } from "../components/Home";
import { TemplateList } from "../components/TemplateList";
import { ProjectList } from "../components/ProjectList";
import { CreateDesign } from "../components/CreateDesign";
import { Main } from "../pages/Main";

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
    {
      path: "/design/:id/edit",
      element: <Main />,
    },
  ]);
  return routing;
};
