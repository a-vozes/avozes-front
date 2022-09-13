import React from 'react';
import {Typography, Box, Grid, Button} from '@mui/material';
import './Home.css';
import ModalProdutos from '../../components/produtos/ModelProdutos/ModalProdutos';
import TabProdutos from '../../components/produtos/TabProdutos/TabProdutos';

function Home() {
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
                  Avozes
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