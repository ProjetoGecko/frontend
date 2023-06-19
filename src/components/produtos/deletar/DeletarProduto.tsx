import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent, Box } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { busca, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';

function DeletarProduto() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  const [produto, setProduto] = useState<Produto>()

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
      navigate("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    busca(`/produtos/${id}`, setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate('/listar_produtos')
    deleteId(`/produtos/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Produto deletado com sucesso.', {
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
    navigate('/listar_produtos')
  }
  return (
    <>
      <Box m={2} height='80vh'>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o produto:
              </Typography>
              <Typography color="textSecondary" >
                {produto?.nome}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box className="marginLeft">
                <Button onClick={nao} variant="contained" size='large' style={{ backgroundColor: '#973838', color: 'white' }}>
                  Não
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' style={{ backgroundColor: '#215f20', color: 'white' }}>
                  Sim
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarProduto;