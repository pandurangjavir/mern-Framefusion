import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages/index';
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Home from './components/Home';
import Projects from './components/Projects'
import Templates from './components/Template';
import CreateDesign from './components/CreateDesign';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Projects',
        element: <Projects />
      },
      {
        path: '/Template',
        element: <Templates />
      }
    ]
  },
  {
    path: '/design/create',
    element: <CreateDesign />
  },
  {
    path: '/design/:id/edit',
    element: <Main />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
