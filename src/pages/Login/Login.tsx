import React, { ChangeEvent, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"
import { login } from "../../services/Service"
import UserLogin from "../../models/UserLogin"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.generation.org/">
        Generation
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
  let navigate = useNavigate()

  const [token, setToken] = useLocalStorage('token')

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      usuario: '',
      senha: '',
      token: ''
    }
  )

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
    
    console.log(userLogin)
  }

  useEffect(() => {
    if (token != '') {
      navigate('/')
    }
  }, [token])

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      await login(`/usuarios/logar`, userLogin, setToken)

      alert('Usuário logado com sucesso!')
    } catch (error) {
      alert('Dados do usuário inválido. Erro ao logar!')
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="usuario"
                label="Email"
                name="usuario"
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="senha"
                label="Senha"
                type="password"
                id="senha"
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Esqueceu sua senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/cadastrar" variant="body2">
                    {"Não tem conta? cadastre-se"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
