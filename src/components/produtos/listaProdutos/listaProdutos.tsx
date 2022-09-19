import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Produtos from "../../../models/Produto";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../services/Service";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Action, addToken } from "../../../store/tokens/Actions";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./listaProdutos.css";

function ListaProdutos() {
  const [prods, setProds] = useState<Produtos[]>([]);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

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
      dispatch(addToken(token))
      navigate("/login");
    }
  }, [token]);

  async function getProds() {
    await busca("/Produtos", setProds, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getProds();
  }, [prods.length]);

  return (
    <>

      {prods.map((prod) => (

        <Box m={2} display="inline-block" justifyContent="center">

          <Card variant="outlined" className='cardProd'>

            <div className='cardProduct'>

              <Box display="flex" justifyContent="center">
                <img src={prod.foto} alt="Img" className='img' />
              </Box>

              <div className='cardProductInfo'>

                <Typography variant="h4" component="h2" className='Nome'>
                  {prod.nome}
                </Typography>
                <Typography variant="body2" component="p" className='Desc'>
                  {prod.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {prod.nascimento}
                </Typography>
                <Typography variant="body2" component="p">
                   {prod.genero}
                </Typography>
                <Typography variant="body2" component="p">
                   R$ {prod.preco}
                </Typography>

                <Typography variant="h6" component="h3" className='Cat'>
                  Categoria: {prod.categoria?.tipoConselho}
                </Typography>

              </div>

              <div>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/formularioProd/${prod.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="marginLeft btn"
                        size="small"
                        color="primary"
                      >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/deletarProdutos/${prod.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
                        deletar
                      </Button>
                    </Box>
                  </Link>

                  <Box display="flex" flexDirection="column" justifyContent="center" mb={1.5}>
                    <Link to={`/carrinho/${prod.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button className="btnComprar" variant="contained" size='small'>
                          Conectar
                        </Button>
                      </Box>
                    </Link>
                  </Box>


                </Box>

              </div>


            </div>


          </Card>

        </Box>

      ))}

    </>
  );
}

export default ListaProdutos;

function dispatch(arg0: Action) {
  throw new Error("Function not implemented.");
}
