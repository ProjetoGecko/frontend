import React, { ChangeEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addId, addToken } from '../../store/token/Actions'
import User from "../../models/User";

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
    foto: '',
    senha: '',
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

      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário inválido. Erro ao logar!");
    }
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="main-login"
        >
          <Avatar sx={{ m: 1, bgcolor: "#25812D" }}>
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
                  Não tem conta? Cadastre-se
                </Link>
              </Grid>
            </Grid>
            <Typography variant="body2" align="center" sx={{ mt: 5 }}>
              {"Copyright © "}
              <Link href="https://www.generation.org/">Generation</Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
