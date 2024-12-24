import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./features/authentication/AuthPage";
import { action as authAction } from "./features/authentication/AuthPage";
import AppLayout from "./ui/AppLayout/AppLayout";
import Home from "./ui/Home/Home";

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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
