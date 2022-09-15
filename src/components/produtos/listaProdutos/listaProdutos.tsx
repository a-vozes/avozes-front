import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

import "./listaProdutos.css";
import { useEffect, useState } from "react";
import Produtos from "../../../models/Produto";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../services/Service";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Action, addToken } from "../../../store/tokens/Actions";
import { TokenState } from "../../../store/tokens/tokensReducer";

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
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Produtos
              </Typography>
              <Typography variant="h5" component="h2" className="color-weight">
                {prod.nome}
              </Typography>
              <Typography variant="body2" component="p">
                {prod.descricao}
              </Typography>
              <Typography variant="body2" component="p">
                {prod.nascimento}
              </Typography>
              <Typography variant="body2" component="p">
                {prod.genero}
              </Typography>
              <Typography variant="body2" component="p">
              Preço: R$ {prod.preco}
              </Typography>
              <Typography variant="body2" component="p">
                {prod.foto}
              </Typography>
              <Typography variant="body2" component="p">
                Categoria: {prod.categoria?.tipoConselho}
              </Typography>
            </CardContent>
            <CardActions>
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
                      className="btnCancelar"
                    >
                      deletar
                    </Button>
                  </Box>
                </Link>

                <Box display="flex" flexDirection="column" justifyContent="center" mb={1.5}>
                            <Link to={`/carrinho/${prod.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' color="secondary">
                                        Comprar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>


              </Box>
            </CardActions>
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
