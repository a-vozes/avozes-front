import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaCategoria.css';
import { Box } from "@mui/material";
import Categoria from '../../../models/Categoria';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let history = useNavigate();

  useEffect(() => {
    if (token == '') {
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
      history('/login')
    }
  }, [token])


  async function getCategoria() {
    await busca("/Categorias", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getCategoria()
  }, [categorias.length])
  return (
    <>
      {
        categorias.map(categorias => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tipo de conselho
                </Typography>
                <Typography variant="h6" component="h2"  >
                  {categorias.tipoConselho}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioCategoria/${categorias.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarCategoria/${categorias.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  );
}


export default ListaCategoria;

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
