import React, { ChangeEvent, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"
import { login } from "../../services/Service"
import UserLogin from "../../models/UserLogin"
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { makeStyles } from "@material-ui/core/styles"
import { ClassNames } from "@emotion/react"

export default function Login() {
  const useStyles = makeStyles({
    root: {
      // input label when focused
      "& label.Mui-focused": {
        color: "#25812D"
      },
      // focused color for input with variant='outlined'
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#25812D"
        },
        "&:hover fieldset": {
          borderColor: "#25812D"
        }
      },
      "&.MuiButton-root": {
        backgroundColor: '#25812D',
        "&.MuiButton-contained": {
          color: "#F6F4EB"
        },
        "&:active": {
          backgroundColor: '#1f6d26'
        },
        "&:hover": {
          backgroundColor: '#1f6d26'
        }
      },
      "&.MuiLink-root": {
        textDecoration: 'none',
        "&:link": {
          color: '#1f6d26'
        },
        "&:visited": {
          color: '#1f6d26'
        },
        "&:hover": {
          color: '#283E30'
        },
        "&:active": {
          color: '#283E30'
        }
      },
      "&.MuiTypography-root": {
        color: '#1f6d26'
      }
    }
  })

  const classes = useStyles()

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
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://i.ibb.co/dmTDd6d/gecko-login.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '80% center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
        sx={{ 
          backgroundColor: '#F4F8D4',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#25812D' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.root}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
               className={classes.root}
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Email"
              name="usuario"
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            />
            <TextField
               className={classes.root}
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
               className={classes.root}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.root}>
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/cadastrar" variant="body2" className={classes.root}>
                  Não tem conta? Cadastre-se
                </Link>
              </Grid>
            </Grid>
            <Typography variant="body2" align="center" sx={{ mt: 5 }} className={classes.root}>
              {'Copyright © '}
              <Link href="https://www.generation.org/" className={classes.root}>
                Generation
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
