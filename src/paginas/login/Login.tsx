import React from 'react'
import './Login.css';
import { Grid, Box, Typography, TextField, Button} from '@mui/material'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid xs={6} alignItems='center'>
            <Box paddingX={20}>
                <form>
                    <Typography variant='h3' gutterBottom color='textPrimary' align='center'> ENTRAR </Typography>
                    <TextField id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' fullWidth type='password' />
                    <Box marginTop={2} textAlign='center'>
                        <Link to='/home' className='text-decoration-none'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Link>
                    </Box>
                </form>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                    </Box>
                    <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold'}}>Cadastre-se</Typography>
                </Box>
            </Box>
        </Grid>
        <Grid xs={6} style={{backgroundImage: `url(https://media4.giphy.com/media/EoRgG5QnPQVM7978NC/giphy.gif?cid=ecf05e47sn2l6o2xcgw36nvmvq31ly4cersx307gqmosff3v&rid=giphy.gif&ct=g)`, backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover'}}>

        </Grid>
    </Grid>
  )
}

export default Login