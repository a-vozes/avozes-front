import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarCategoria.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Categoria from '../../../models/Categoria'
import { Box } from "@mui/material"
import { useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/Actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function DeletarCategoria() {
  let history = useNavigate();
  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [categoria, setCategoria] = useState<Categoria>()

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
      });
      dispatch(addToken(token))
      history("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/Categorias/${id}`, setCategoria, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    history('/Categorias')
    deleteId(`/Categorias/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Categoria deletada com sucesso', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
  }

  function nao() {
    history('/Categorias')
  }

  return (
    <>

      <Box m={2} display="flex" justifyContent="center">

        <Card variant="outlined" className='cardDelet'>

          <div className='cardProductDelet'>
            <Typography color="textPrimary" gutterBottom>
              Deseja deletar a Categoria de conexão:
            </Typography>
            <Typography color="textSecondary">
              {categoria?.tipoConselho}
            </Typography>
          </div>

          <Box display="flex" justifyContent="start" ml={1.0} mb={2}>

           <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
            </Box>
            <Box mx={2}>
              <Button onClick={nao} variant="contained" size='large' color="secondary">
                Não 
              </Button>
            </Box>


          </Box>

        </Card>

      </Box>

    </>
  );
}
export default DeletarCategoria;

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
