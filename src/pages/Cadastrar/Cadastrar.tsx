import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, FormHelperText, Paper } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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

  const expressionEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const expressionFoto: RegExp = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
  let nome_valido
  let email_valido
  let senha_valido
  let confirmarSenha_valido
  let foto_valido

  if (user.nome.length > 0 && user.nome.length <= 255) {
    nome_valido = true
  } else {
    nome_valido = false
  }
  if (expressionEmail.test(user.usuario)) {
    email_valido = true
  } else {
    email_valido = false
  }
  if (user.senha.length >= 8) {
    senha_valido = true
  } else {
    senha_valido = false
  }
  if (confirmarSenha == user.senha && confirmarSenha != '') {
    confirmarSenha_valido = true
  } else {
    confirmarSenha_valido = false
  }
  if (user.foto.length > 0 && user.foto.length <= 500 && expressionFoto.test(user.foto)) {
    foto_valido = true
  } else {
    foto_valido = false
  }

  const [desabilitado, setDesabilitado] = useState(false)

  useEffect(() => {
    if (nome_valido && email_valido && senha_valido && confirmarSenha_valido && foto_valido) {
      setDesabilitado(false)
    } else {
      setDesabilitado(true)
    }
  }, [updatedModel])

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
    <Grid container component='main' sx={{ minHeight: "80vh" }} position='static'>
      <Grid
        item
        xs={false}
        md={6}
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
        md={6}
        component={Paper}
        elevation={6}
        square
        py={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '75%'
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
                {nome_valido ?
                  '' :
                  (user.nome.length == 0 ?
                    <FormHelperText error>* Digite um nome.</FormHelperText> :
                    <FormHelperText error>* Nome muito longo.</FormHelperText>)}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={user.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  id="foto"
                  label="Foto"
                  name="foto"
                  autoComplete="family-name"
                  fullWidth
                />
                {foto_valido ?
                  '' :
                  (user.foto.length == 0 ?
                    <FormHelperText error>* Insira um link.</FormHelperText> :
                    <FormHelperText error>* Link inválido.</FormHelperText>)}
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
                {email_valido ?
                  '' :
                  (user.usuario.length == 0 ?
                    <FormHelperText error>* Digite um e-mail.</FormHelperText> :
                    <FormHelperText error>* E-mail inválido.</FormHelperText>)}
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
                {senha_valido ?
                  '' :
                  (user.senha.length == 0 ?
                    <FormHelperText error>* Digite uma senha.</FormHelperText> :
                    <FormHelperText error>* Senha muito curta.</FormHelperText>)}
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
                {confirmarSenha_valido ?
                  '' :
                  (confirmarSenha.length == 0 ?
                    <FormHelperText error>* Confirme sua senha.</FormHelperText> :
                    <FormHelperText error>* As senhas não são iguais.</FormHelperText>)}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Receber as nossas promoções por email."
                />
              </Grid>
            </Grid>
            <Button
              disabled={desabilitado}
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