import React, { ChangeEvent, useState, useEffect} from 'react'
import './Login.css';
import { Grid, Box, Typography, TextField, Button } from '@mui/material'
import { Link, useNavigate  } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';

function Login() {

    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0, nome: '',  usuario: '', foto: '', senha: '', token: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=> {
        if(token != '') {
            history('/home')
        }
    }, [token]) 

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuario logado com sucesso!')
        } catch (error) {
            alert('ERRO! Login incorreto, tente novamente!')
        }
    } 

    return (
        <Grid className='containerMenu' container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' align='center'> ENTRAR </Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField  value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' fullWidth type='password' />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                        </Link>
                    </Box>

                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://64.media.tumblr.com/f744d2d984a543e7dfc65f16f7a7c158/c9ceff694b7d0ee4-bc/s500x750/ebb19447948faf22f3d6881a176d71b40df52c99.gifv)`, backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: '300px'
            }}>

            </Grid>
        </Grid >
    )
}

export default Login