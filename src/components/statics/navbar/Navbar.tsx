import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';


function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    let navigate = useNavigate();

    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
       navigate('/login')
    }
    var navbarComponent;

    if(token != ""){
        navbarComponent =  <AppBar position="static">
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
                <Link to='/prods' className='text-decoration-none'>
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        Produtos
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
                <Link to='/formularioProd' className='text-decoration-none'>
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        Cadastrar produto
                    </Typography>
                </Box>
                </Link>
                <Box mx={1} className='text-decoration-none' onClick={goLogout} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
           {navbarComponent}
        </>
    )
}

export default Navbar;