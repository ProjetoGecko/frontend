import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core";
import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { busca, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import { UserState } from '../../../store/token/Reducer';


function DeletarCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<UserState, UserState['tokens']>(
    (state) => state.tokens
)
  const [categoria, setCategoria] = useState<Categoria>()

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado.', {
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
    busca(`/categorias/${id}`, setCategoria, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate('/listar_categorias')
    deleteId(`/categorias/${id}`, {
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
    navigate('/listar_categorias')
  }
  return (
    <>
      <Box m={2} height='80vh'>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a categoria:
              </Typography>
              <Typography color="textSecondary" >
                {categoria?.nome}
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
export default DeletarCategoria;