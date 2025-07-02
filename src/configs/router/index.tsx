import { createBrowserRouter } from "react-router";

import { Home, Universities, University, Program, Paths, Contacts } from "@/pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/universities",
    element: <Universities />,
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
