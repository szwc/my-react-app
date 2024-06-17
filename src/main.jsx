import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root, { loader as rootLoader, action as rootAction } from './routes/root'
import ErrorPage from './error-page'
import Contact, {
  loader as contactLoader,
  action as contactAction
} from './routes/contact'
import EditContact, { action as editAction } from './routes/edit'
import { action as destroyAction } from './routes/destroy'
import Index from './routes/index'
import Demo from './routes/Demo'
import Count from './routes/hooks/useState'
import EffectCount from './routes/hooks/useEffect'
import LifeCircleDemo from './routes/lifeCircle'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // element: <div>hello world</div>,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // {
      //   path: "contacts",
      //   element: <Contact />,
      //   loader: contactLoader,
      //   action: contactAction,
      // },
      // {
      //   path: "contacts/:contactId",
      //   element: <Contact />,
      //   loader: contactLoader,
      //   action: contactAction,
      // },
      // {
      //   path: "contacts/:contactId/edit",
      //   element: <EditContact />,
      //   loader: contactLoader,
      //   action: editAction,
      // },
      // {
      //   path: "contacts/:contactId/destroy",
      //   action: destroyAction,
      //   errorElement: <div>Oops! There was an error.</div>,
      // },
      {
        path: 'demo',
        element: <Demo />
      },
      {
        path: 'state',
        element: <Count />
      },
      {
        path: 'effect',
        element: <EffectCount />
      },
      {
        path: 'life',
        element: <LifeCircleDemo />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
