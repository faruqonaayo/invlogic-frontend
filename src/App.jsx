import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Authentication from "./features/user/Authentication"
import { action as authenticationAction } from "./features/user/Authentication"

const router = createBrowserRouter([
  {
    path: "/auth/:type",
    element: <Authentication />,
    action: authenticationAction
  }
])

export default function App() {
  return <RouterProvider router={router} />

}