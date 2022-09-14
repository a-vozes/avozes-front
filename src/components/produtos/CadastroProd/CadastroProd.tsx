import { ChangeEvent, useEffect, useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Select,
    InputLabel,
    MenuItem,
    FormControl,
    FormHelperText,
} from "@material-ui/core";
import "./CadastroProd.css";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { busca, buscaId, post, put }  from "../../../services/Service";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Action, addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';


function CadastroProd() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
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
            });
            navigate("/login");
        }
    }, [token]);

    const [cate, setCategoria] = useState<Categoria>({
        id: 0,
        tipoConselho: "",
    });

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: "",
        descricao: "",
        nascimento: "",
        genero: "", 
        preco: 0, 
        foto: "",
        categoria: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: cate
        });
    }, [cate]);

    useEffect(() => {
        getCategorias();
        if (id !== undefined) {
            findByIdProduto(id);
        }
    }, [id]);
    

    async function getCategorias() {
        await busca("/Categorias", setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function findByIdProduto(id: string){
        await buscaId(`Produtos/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        });
    }


    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
          ...produto,
          [e.target.name]: e.target.value,
          categoria: cate,
        });
      }

      async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
          console.log(produto)
            put(`/Produtos`, produto, setProduto, {
              headers: {
                'Authorization': token
              }
            })
            toast.success('Produto atualizado com sucesso!', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
              });
          } else {
            console.log(produto)
            post(`/Produtos`, produto, setProduto, {
              headers: {
                'Authorization': token
              }
            })
            toast.success('Produto cadastrado com sucesso!', {
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
          back()
        }
    
        function back() {
            navigate("/prods");
          }

          return (
            <Container maxWidth="sm" className="topo">
              <form onSubmit={onSubmit}>
                <Typography
                  variant="h3"
                  color="textSecondary"
                  component="h1"
                  align="center"
                >
                  Cadastro de produto:
                </Typography>
                <TextField
                  value={produto.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                  id="nome"
                  label="Nome"
                  variant="outlined"
                  placeholder="Insira no mínimo 3 caracteres"
                  name="nome"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  value={produto.descricao}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                  id="descricao"
                  label="Descrição"
                  name="descricao"
                  variant="outlined"
                  placeholder="Insira no mínimo 5 caracteres"
                  margin="normal"
                  fullWidth
                />

                <TextField
                  value={produto.nascimento}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                  id="nascimento"
                  label="Nascimento"
                  name="nascimento"
                  variant="outlined"
                  placeholder="Insira no mínimo 5 caracteres"
                  margin="normal"
                  fullWidth
                />

                <TextField
                value={produto.genero}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                  id="genero"
                  label="Gênero"
                  name="genero"
                  variant="outlined"
                  placeholder="Insira no mínimo 5 caracteres"
                  margin="normal"
                  fullWidth
                />

                <TextField
                value={produto.preco}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                  id="preco"
                  label="Preço"
                  name="preco"
                  variant="outlined"
                  placeholder="Insira no mínimo 5 caracteres"
                  margin="normal"
                  fullWidth
                />

                <TextField
                value={produto.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                  id="foto"
                  label="Insira o link da sua foto"
                  name="foto"
                  variant="outlined"
                  placeholder="Insira no mínimo 5 caracteres"
                  margin="normal"
                  fullWidth
                />
        
        
       
        
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    onChange={(e) =>
                      buscaId(`/Categorias/${e.target.value}`, setCategoria, {
                        headers: {
                          'Authorization': token,
                        },
                      })
                    }
                  >
                    {categorias.map(cate => (
                      <MenuItem value={cate.id}>{cate.tipoConselho}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Escolha uma categoria para o produto.</FormHelperText>
                  <Button type="submit" variant="contained" color="primary" className="btn">
                    Finalizar
                  </Button>
                </FormControl>
              </form>
            </Container>
          );
}
export default CadastroProd;

function dispatch(arg0: Action) {
  throw new Error('Function not implemented.');
}
