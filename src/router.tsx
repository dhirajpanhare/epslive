import { createBrowserRouter } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import FeaturesPage from "@/pages/FeaturesPage"
import SolutionPage from "@/pages/SolutionPage"
import ContactPage from "@/pages/ContactPage"
import NotFoundPage from "@/pages/NotFoundPage"
import AiPage from "@/pages/FeaturesPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/agenticAi",
    element: <AiPage/>,
  },
  {
    path: "/solution",
    element: <SolutionPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
