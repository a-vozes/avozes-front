import './CadastroUsuario.css';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Paper, Button, Typography, TextField, Box } from '@mui/material'
import { Link, useNavigate } from "react-router-dom"
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { toast } from 'react-toastify';

function CadastroUsuario() {
    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: "",
            usuario: "",
            foto: "",
            senha: ""
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: "",
            usuario: "",
            foto: "",
            senha: ""
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            history('/login')
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            //Tenta executar o cadastro
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuário cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });

                //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {
                console.log(`Error: ${error}`)

                //Pode modificar a msg de acordo com o erro 
                toast.error('Usuário já cadastrado', {
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

        } else {
            toast.error('Insira no minímo 8 caracteres', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });    // Mensagem que indica a quantidade minima de caracteres

            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }

    /*
        = : atribuição (valor = 9)
        == : op. aritmetico (valor == 9.0)
        === : op. idêntico (valor === 9.0)
    */

    return (
        <Grid className="fundo"container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>

                    <form onSubmit={cadastrar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>CADASTRAR</Typography>

                        <TextField className='registerName'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.nome}
                            id='nome'
                            label='Nome'
                            variant='filled'
                            name='nome'
                            margin='normal'
                            fullWidth
                            required /> {/* Required: indica que o campo deve ser preenchido */}

                        <TextField className='registerName'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.usuario}
                            type="email"
                            id='usuario'
                            label='Usuario'
                            variant='filled'
                            name='usuario'
                            margin='normal'
                            fullWidth required />


                        <TextField className='registerName'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.senha}
                            id='senha'
                            label='Senha'
                            variant='filled'
                            name='senha'
                            margin='normal' type='password'
                            fullWidth required />

                        <TextField className='registerName'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            value={confirmarSenha}
                            id='confirmarSenha'
                            label='Confirmar Senha'
                            variant='filled'
                            name='confirmarSenha'
                            margin='normal' type='password'
                            fullWidth required />
                        
                        <TextField className='registerName'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.foto}
                            id='foto'
                            label='Foto'
                            variant='filled'
                            name='foto'
                            margin='normal'
                            fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Box className='separarBtn'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>                           
                            
                            <Button className="btnCadastrar"type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                            </Box>
                        </Box>
                    </form>

                </Box>
            </Grid>
            <Grid item xs={6} className='imagem'>

            </Grid>
        </Grid>
    )
}

export default CadastroUsuario