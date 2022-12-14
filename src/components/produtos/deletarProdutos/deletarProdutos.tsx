import { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material';
import './deletarProdutos.css';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { toast } from 'react-toastify';
import { Action, addToken } from '../../../store/tokens/Actions';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarProdutos() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [prod, setProds] = useState<Produto>();

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado!', {
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

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/Produtos/${id}`, setProds, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate('/prods')
    deleteId(`/Produtos/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Conexão deletada com sucesso.', {
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

  function nao() {
    navigate('/prods')
  }

  return (
    <>
      <Box m={2} display="flex" justifyContent="center">

        <Card variant="outlined" className='cardDelet'>

          <div className='cardProductDelet'>

            <Typography color="textSecondary" gutterBottom>
              Deseja deletar o cadastro do avô/avó abaixo?
            </Typography>
            <Typography color="textSecondary" >
              {prod?.nome}
            </Typography>

          </div>

          <Box display="flex" justifyContent="start" ml={1.0} mb={2}>

          <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
            </Box>
            <Box mx={2}>
              <Button onClick={nao} variant="contained" size='large' color="secondary">
                Não 
              </Button>
            </Box>

          </Box>
        </Card>
      </Box>
    </>
  );
}
export default DeletarProdutos;

function dispatch(arg0: Action) {
  throw new Error('Function not implemented.');
}
