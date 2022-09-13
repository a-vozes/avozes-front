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

function ListaProdutos() {
  const [prods, setProds] = useState<Produtos[]>([]);
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  async function getProds() {
    await busca("/prods", setProds, {
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
                {prod.categoria?.tipoConselho}
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
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaProdutos;