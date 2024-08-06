import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import UsersPage1 from './pages/UsersPage1/UsersPage1';
import UsersPage2 from './pages/UsersPage2/UsersPage2';
import UserPage from './pages/UserPage/UserPage';
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  errorElement: <h1>...Error</h1>,
  children: [{
    path: '/',
    element: <Home />,
  }
  ]
},
{
  path: '/UsersPage1',
  element: <Layout />,
  errorElement: <h1>...Error</h1>,
  children: [
    {
      path: '/UsersPage1',
      element: <UsersPage1 />
    }
  ]
},
{
  path: '/UserPage2',
  element: <Layout />,
  errorElement: <h1>...Error</h1>,
  children: [{
    path: '/UserPage2',
    element: <UsersPage2 />
  }]
},
{
  path: '/User/:id',
  element: <Layout />,
  errorElement: <h1>...Error</h1>,
  children: [{
    path: '/User/:id',
    element: <UserPage />
  }]
},
{
  path: '/contact',
  element: <Layout />,
  errorElement: <h1>...Error</h1>,
  children: [{
    path: '/contact',
    element: <Contact />
  }]
}
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
