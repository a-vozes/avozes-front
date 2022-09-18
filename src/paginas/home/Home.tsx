import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ModalProdutos from '../../components/produtos/ModelProdutos/ModalProdutos';
import TabProdutos from '../../components/produtos/TabProdutos/TabProdutos';
import TabCategorias from '../../components/categorias/TabCategorias/TabCategorias';
import Carrossel from '../../components/carrossel/Carrossel';
import Lista from '../../components/lista/Lista';


function Home() {

  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      })
      navigate("/login")

    }
  }, [token])

  return (
    <>
      <Box className='container-home'>
        {<Box className='carrosel'> 
          <Carrossel />
        </Box> }
        <Box className="contBtnEimg">
          <Box className='container-bv-btn'>
            <Box className='marginText'>
              <h2> Dando voz à voz da experiência. </h2>
            </Box>
            <Box className='bv-btn'>
              <Button> CONHEÇA MAIS SOBRE NÓS... </Button>
            </Box>
          </Box>
          <Box className='img-bv-home'>
            <img src="https://cdn.discordapp.com/attachments/988429116711772194/1020023767252074607/chico.png" alt="" />
          </Box>
 
          </Box>
      </Box>
      <Box >
        <TabCategorias />
        </Box>
        <Box >
        <TabProdutos />
        </Box>

      
    </>
  );
}

export default Home;