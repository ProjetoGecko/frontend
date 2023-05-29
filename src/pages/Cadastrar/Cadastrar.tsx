import React , {useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignUp() {
  const navigate = useNavigate();
  const [confirmarSenha,setConfirmarSenha] = useState<string>("")
  const [user, setUser] = useState<User>(
      {
          id: 0,
          nome: '',
          usuario: '',
          foto: '',
          senha: '',
          token: ''
      })

  const [userResult, setUserResult] = useState<User>(
      {
          id: 0,
          nome: '',
          usuario: '',
          foto: '',
          senha: '',
          token: ''
      })

  useEffect(() => {
      if (userResult.id != 0) {
          navigate("/login")
      }
  }, [userResult])


  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
      setConfirmarSenha(e.target.value)
  }


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

      setUser({
          ...user,
          [e.target.name]: e.target.value
      })

  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      if(confirmarSenha == user.senha){
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
      alert('Usuario cadastrado com sucesso')
      }else{
          alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
      }
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#88bb29' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastrar
          </Typography>

          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={user.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  autoComplete="given-name"
                  name="nome"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="foto"
                  label="Foto"
                  name="foto"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={user.usuario} 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  required
                  fullWidth
                  id="usuario"
                  label="Email"
                  name="usuario"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={user.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  required
                  fullWidth
                  name="senha"
                  label="Senha"
                  type="password"
                  id="senha"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  value={confirmarSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                  required
                  fullWidth
                  name="senha"
                  label="Confirmar Senha"
                  type="password"
                  id="senha"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Receber as nossas promoções por email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#88bb29' }}
              
            >
              Cadastrar
            </Button>
            <Grid p={6} container justifyContent="flex-end">
              <Grid item>
                <Link to='/login' className='text-decorator-none'>
                  Já possui uma conta? Faça o login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}