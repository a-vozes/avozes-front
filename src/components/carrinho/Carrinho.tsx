import { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Produto from '../../models/Produto'
import { busca, buscaId, post, put }  from "../../services/Service";
import { addToken } from '../../store/tokens/Actions'
import { TokenState } from '../../store/tokens/tokensReducer'
import './Carrinho.css'

function Carrinho() {


  // Assim como no FormularioPostagem, pegamos o Id do Produto pela URL
  const { id } = useParams<{ id: string }>()

  // Colocar Token com Redux
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  // State para guardar a quantidade escolhida pela P. Usuaria 
  const [quantidadeFinal, setQuantidadeFinal] = useState(0)

  // State para guardar as informações do Produto retornadas pelo Back

  // const [produto, setProduto] = useState<Produtos>({
  //   id: 0,
  //   nome: "",
  //   preco: 0,
  //   quantidade: 0,
  //   imagem: ""
  // })

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

  // Vai disparar a função findByIdProduto sempre que o ID for diferente que Undefined

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

  // Esse Código irá pegar o ID do Produto, e acessar a service que busca as informações por ID 

  // async function findByIdProduto(id: string) {
  //   await buscaId(`produtos/${id}`, setProduto, {
  //     headers: {
  //       'Authorization': token
  //     }
  //   })
  // }

  async function findByIdProduto(id: string){
    await buscaId(`/Produtos/${id}`, setProduto, {
        headers: {
            Authorization: token,
        },
    });
}

  // Função que vai pegar a quantidade escolhida do Produto
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let valor = +e.target.value
    setQuantidadeFinal(valor);
  }

  // Função que mostra o valor total entre a quantidade e o valor unitário do item. Ex.: 2 * R$2 = 4
  function valorTotal() {
    return quantidadeFinal * produto.preco
  }

  // Função que simula a compra Efetuada com sucesso
  function confirmSales() {
    toast.success('Compra Confirmada! Verifique o seu email!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
    navigate("/home")
  }

  return (
    <>
      <Box m={2} display="flex" justifyContent="center">
        <Card variant="outlined" className='card'>

          <div className='cardProduct'>
            <img src={produto.foto} alt="Img" />

            <div className='cardProductInfo'>
              <Typography variant="h5" component="h2">
                {produto.nome}
              </Typography>

              <Typography variant="body2" component="p">
                R$ {produto.nascimento}
              </Typography>

              <Typography variant="body2" component="p">
                R$ {produto.descricao}
              </Typography>

              <Typography variant="body2" component="p">
                R$ {produto.preco}
              </Typography>

              {/* <Typography variant="body2" component="p">
                Quantidade Máx: {produto.quantidade}
              </Typography> */}

              {/* <TextField
                value={quantidadeFinal}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}

                // Propriedade que define o limite minimo e máximo de itens que podem ser comprados
                InputProps={{ inputProps: { min: 1, max: produto.quantidade } }}

                id="quantidade" label="quantidade" type="number" variant="outlined"
                name="quantidade" margin="normal" fullWidth
              /> */}
            </div>

            <div className="cardProductInfo">
              <Typography variant="h5" component="h2">
                Total: R$ {valorTotal()}
              </Typography>

              <Box className="cardProductButton">
                <Box mx={1}>
                  <Button onClick={confirmSales} variant="contained" size='small' color="primary">
                    Confimar Compra
                  </Button>
                </Box>
              </Box>

              <Link to="/" className="cardProductButton">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    Cancelar
                  </Button>
                </Box>
              </Link>
            </div>

          </div>
        </Card>
      </Box>
    </>
  )
}

export default Carrinho

function dispatch(arg0: any) {
    throw new Error('Function not implemented.')
}
