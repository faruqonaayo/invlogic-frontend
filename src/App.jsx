import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./features/authentication/AuthPage";
import { action as authAction } from "./features/authentication/AuthPage";
import AppLayout from "./ui/AppLayout/AppLayout";
import Home from "./ui/Home/Home";
import Dashboard from "./features/project/Dashboard";
import MyProjectsPage from "./features/project/MyProjectsPage";
import CreateNewProject from "./features/project/CreateNewProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/auth/:type",
        element: <AuthPage />,
        action: authAction,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <MyProjectsPage />,
          },
          {
            path: "/dashboard/myprojects",
            element: <MyProjectsPage />,
          },
          {
            path: "/dashboard/project/new",
            element: <CreateNewProject />,
          },

          // {
          //   path: "/dashboard/myprojects/favorites",
          //   element: <MyProjectsPage />,
          // },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
