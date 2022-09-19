import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './paginas/home/Home';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics//footer/Footer';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import { Provider } from 'react-redux';
import store from './store/Store';

import CadastroProd from './components/produtos/CadastroProd/CadastroProd';
import DeletarProdutos from './components/produtos/deletarProdutos/deletarProdutos';
import ListaProdutos from './components/produtos/listaProdutos/listaProdutos';
import Carrinho from './components/carrinho/Carrinho';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />

        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path='/Categorias' element={<ListaCategoria />} />
            <Route path="/formularioCategoria" element={<CadastroCategoria />} />
            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/prods" element={<ListaProdutos />} />
            <Route path="/carrinho/:id" element={<Carrinho />} />
            <Route path="/formularioProd" element={<CadastroProd />} />
            <Route path="/formularioProd/:id" element={<CadastroProd />} />
            <Route path="/deletarProdutos/:id" element={<DeletarProdutos />} />


          </Routes>
        </div>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;