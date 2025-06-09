import { useRoutes } from 'react-router-dom'
import Login from '../Login'
import Home from '../Home'

const routes = [
  { path: '/login', element: <Login /> },
  { path: '/', element: <Home /> },
]

export default function AppRoutes() {
  return useRoutes(routes)
}
