import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@mui/material';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


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
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="container"
          >
            <Grid alignItems="center" item xs={6}>
              <Box paddingX={20}>
                <Typography
                  variant="h3"
                  gutterBottom
                  color="textPrimary"
                  component="h3"
                  align="center"
                  className="titulo-h3"
                >
                  Avozes Vai corinthians
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="textPrimary"
                  component="h5"
                  align="center"
                  className="titulo-h5"
                >
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box marginRight={1}>
                  <ModalProdutos />
                </Box>
                <Button variant="outlined" className="btn">
                  Ver Produtos
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6}>
            <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
            </Grid>
            <Grid xs={12} className="produtos">
              <TabProdutos />
            </Grid>
          </Grid>
        </>
      );
    }
    
export default Home;