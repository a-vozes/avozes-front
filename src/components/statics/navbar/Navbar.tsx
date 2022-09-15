import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    const dispatch = useDispatch();

    function goLogout() {
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

    if (token != "") {
        navbarComponent =

            <AppBar position="static">
                <Toolbar className='navbarContainer' variant="dense">

                    <Box style={{ cursor: "pointer" }} >
                        <Link to='/home' >
                            <Typography variant="h5" color="inherit">
                                <img src="https://cdn.discordapp.com/attachments/1016309304040636426/1019972821079822336/avozes-preto-e-branco.png" alt="" width="13%" height="13%" />
                            </Typography>
                        </Link>
                    </Box>


                    <Box mx={1} className='navbarContainer2' style={{ cursor: "pointer" }}>


                        <Link to='/prods' className='navbarlink'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Avós
                                </Typography>

                            </Box>
                        </Link>


                        <Link to='/Categorias' className='navbarlink'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Conselhos
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/formularioCategoria' className='navbarlink'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Novo conselho
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/sobre' className='navbarlink'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                <InfoIcon className="redes" />
                                </Typography>

                            </Box>
                        </Link>

                        <Link to='/carrinho/:id' className='navbarlink'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                <ShoppingCartIcon className="redes" />
                                </Typography>

                            </Box>
                        </Link>

                        <Box mx={1} className='navbarlink' onClick={goLogout} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <LogoutIcon className="redes" />
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>

            </AppBar >
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;