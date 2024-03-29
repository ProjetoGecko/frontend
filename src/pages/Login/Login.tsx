﻿import React, { ChangeEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { Avatar, Button, TextField, Paper, Box, Grid, Typography } from '@mui/material'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addId, addToken } from '../../store/token/Actions'
import User from "../../models/User";
import { toast } from "react-toastify";

export default function Login() {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const [userLogin, setUserLogin] = useState<UserLogin>({
    usuario: "",
    senha: "",
  });

  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (user.token != "") {
      dispatch(addToken(user.token))
      dispatch(addId(user.id.toString()))
      navigate("/");
    }
  }, [user.token]);

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/usuarios/logar`, userLogin, setUser);

      toast.success('Login efetuado com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
    });
    } catch (error) {
      toast.error('Erro ao efetuar login. Verifique os dados do usuário.', {
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
    <Grid container component="main" sx={{ minHeight: "80vh" }} position='static'>
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
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "center",
            width: '75%'
          }}
          className="main-login"
        >
          <Avatar sx={{ m: 1, bgcolor: "#25812D" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color='secondary'>
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
              type='email'
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
            <Grid container display='flex' flexDirection='column' alignItems='center' gap={3} mt={2}>
              <Grid item xs>
                <Link to="#">
                  <Typography color='primary'>
                    Esqueceu sua senha?
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs>
                <Link to="/cadastrar">
                  <Typography color='primary'>
                    Não tem conta? Cadastre-se.
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Typography color='secondary' variant="body2" align="center" sx={{ mt: 5 }}>
              {"Copyright © "}
              <Link to="https://www.generation.org/" style={{ color: '#55A630' }}>
                Generation
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
