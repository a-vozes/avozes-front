import './CadastroUsuario.css';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Paper, Button, Typography, TextField, Box } from '@mui/material'
import { Link, useNavigate } from "react-router-dom"
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';

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
                alert("Usuário cadastrado com sucesso")

                //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {
                console.log(`Error: ${error}`)

                //Pode modificar a msg de acordo com o erro 
                alert("Usuário já existente")
            }

        } else {
            alert("Insira no miníno 8 caracteres na senha.")    // Mensagem que indica a quantidade minima de caracteres

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
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>

                    <form onSubmit={cadastrar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.nome}
                            id='nome'
                            label='nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                            required /> {/* Required: indica que o campo deve ser preenchido */}

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.usuario}
                            type="email"
                            id='usuario'
                            label='usuario'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth required />


                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.senha}
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal' type='password'
                            fullWidth required />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            value={confirmarSenha}
                            id='confirmarSenha'
                            label='confirmarSenha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal' type='password'
                            fullWidth required />
                        
                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.foto}
                            id='foto'
                            label='foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
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