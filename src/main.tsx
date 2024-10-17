import ReactDOM from 'react-dom/client'
import './Style Global/index.css'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>,
)
