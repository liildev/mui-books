import { useRoutes } from "react-router-dom"
import { useUserGetMe } from "@/lib/hooks"
import { Layout } from "@/components"
import { Protected } from "./protected"
import { Login, Home, MyList } from "@/pages"
import { ROUTES } from "@/constants"

export const Router = () => {
  useUserGetMe()

  return useRoutes([
    {
      path: ROUTES.sign,
      element: <Login />,
    },
    {
      element: <Protected />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              path: ROUTES.home,
              element: <Home />,
            },
            {
              path: ROUTES.myList,
              element: <MyList />,
            }
          ]
        }
      ]
    }
  ])
}
