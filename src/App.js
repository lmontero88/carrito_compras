import React from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import styled from "styled-components";
import Blog from './Componentes/Blog';
import Error404 from './Componentes/Error404';
import Inicio from './Componentes/Inicio';
import Tienda from './Componentes/Tienda';

function App() {
  const productos =[
    {id:1, producto:'producto1'},
    {id:2, producto:'producto2'},
    {id:3, producto:'producto2'},
    {id:4, producto:'producto4'},
]
  return (
    <>
      <BrowserRouter>
        <Contenedor>
          <Menu>
            <NavLink to='/'> Inicio</NavLink>
            <NavLink to='/blog'> BLog</NavLink>
            <NavLink to='/tienda'> Tienda</NavLink>
          </Menu>
          <main>
            <Switch>
            <Route path="/" exact={true} component={Inicio}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/tienda">
              <Tienda productos= {productos}/>
            </Route>
            <Route component={Error404}/>

            </Switch>
          </main>
          <aside>
            <h3>Sidebar</h3>
          </aside>

        </Contenedor>
      </BrowserRouter>

    </>
  );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
