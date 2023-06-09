import React, { useState, useEffect, ChangeEvent } from 'react';
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
import { FormHelperText, Paper } from '@mui/material';
import { toast } from 'react-toastify';

export default function SignUp() {
  const navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<string>("")

  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    token: ''
  })

  const [userResult, setUserResult] = useState<User>({
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


  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  let nome_valido = false
  let email_valido = false
  let senha_valido = false
  let confirmarSenha_valido = false
  let foto_valido = false

  if (user.nome == '' || (user.nome.length > 0 && user.nome.length < 255)) {
    nome_valido = true
  }
  if (user.usuario == '' || expression.test(user.usuario)) {
    email_valido = true
  }
  if (user.senha == '' || user.senha.length >= 8) {
    senha_valido = true
  }
  if (confirmarSenha == '' || confirmarSenha == user.senha) {
    confirmarSenha_valido = true
  }
  if (user.foto == '' || (user.foto.length > 0 && user.foto.length < 500)) {
    foto_valido = true
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (nome_valido && email_valido && senha_valido && confirmarSenha_valido && foto_valido) {
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)

        toast.success('Usuário cadastrado com sucesso!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
        });
      } catch (e) {
        toast.error(e, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
        });
      }
    } else {
      toast.error('Informações inválidas.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
    }
  }

  return (
    <Grid container component='main' sx={{ minHeight: "100vh" }} position='static'>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://i.ibb.co/dmTDd6d/gecko-login.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "80% center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            marginY: 8,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '25vw'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#25812D' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography color='primary' component="h1" variant="h5">
            Cadastre-se
          </Typography>

          <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={user.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  autoComplete="given-name"
                  name="nome"
                  id="nome"
                  label="Nome"
                  autoFocus
                  fullWidth
                  required
                />
                {nome_valido ? '' : <FormHelperText error>* Nome muito longo.</FormHelperText>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="foto"
                  label="Foto"
                  name="foto"
                  autoComplete="family-name"
                  fullWidth
                />
                {foto_valido ? '' : <FormHelperText error>* Link da foto muito longo.</FormHelperText>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={user.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  id="usuario"
                  label="Email"
                  name="usuario"
                  autoComplete="email"
                  fullWidth
                  required
                />
                {email_valido ? '' : <FormHelperText error>* E-mail inválido.</FormHelperText>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={user.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  name="senha"
                  label="Senha"
                  type="password"
                  id="senha"
                  autoComplete="new-password"
                  fullWidth
                  required
                />
                {senha_valido ? '' : <FormHelperText error>* Senha muito curta.</FormHelperText>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={confirmarSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                  name="senha"
                  label="Confirmar Senha"
                  type="password"
                  id="senha"
                  autoComplete="new-password"
                  fullWidth
                  required
                />
                {confirmarSenha_valido ? '' : <FormHelperText error>* As senhas não são iguais.</FormHelperText>}
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
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to='/login'>
                  <Typography color='primary'>
                    Já possui uma conta? Faça o login.
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}