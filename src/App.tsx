

import './styles/global.scss';
import './styles/sidebar.scss';

import {MoviesProvider} from './useContextMovies'
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';





export function App() {
 
  return (
    <MoviesProvider> 
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SideBar />
          <Content  />         
        </div>
    </MoviesProvider>
  )
}