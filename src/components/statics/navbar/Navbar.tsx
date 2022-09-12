import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar className='navbarContainer' variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Avozes
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decoration-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                        <Link to='/sobre' className='text-decoration-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/Categorias' className='text-decoration-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Categorias
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/formularioCategoria' className='text-decoration-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar categorias
                            </Typography>
                        </Box>
                        </Link>
                       <Link to='/login' className='text-decoration-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                
                                <Link to = '/login'>
                                    <Typography variant="h6" color="inherit">
                                        Logout
                                    </Typography>
                                </Link>
                            </Box>
                       </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;