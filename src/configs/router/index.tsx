import { createBrowserRouter } from "react-router";

import { Home, ExploreTopics, University, Program, Paths, Contacts } from "@/pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore-topics",
    element: <ExploreTopics />,
  },
  {
    path: "/university",
    element: <University />,
  },
  {
    path: "/program",
    element: <Program />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/paths",
    element: <Paths />,
  },
]);

export default routes;
