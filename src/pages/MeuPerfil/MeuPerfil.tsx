import { Box, Button, FormHelperText, Grid, Paper, TextField } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { atualizar, busca } from "../../services/Service"
import { useSelector } from "react-redux"
import User from "../../models/User"
import { UserState } from "../../store/token/Reducer"
import { toast } from "react-toastify"
import { Typography } from "@material-ui/core"

function MeuPerfil() {
    const navigate = useNavigate()

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const idUser = useSelector<UserState, UserState['id']>(
        (state) => state.id
    )

    const [user, setUser] = useState<User>({
        id: +idUser,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    useEffect(() => {
        if (token.length > 0) {
            busca(`/usuarios/${idUser}`, setUser, {
                headers: {
                    'Authorization': token
                }
            })
        }
    }, [idUser])

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    const [confirmarSenha, setConfirmarSenha] = useState<string>("")

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
                await atualizar(`/usuarios/atualizar`, user, setUser, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Usuário atualizado com sucesso!', {
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

    const [liberado, setLiberado] = useState(false)

    return (
        <>
            <Grid container display='flex' justifyContent='space-evenly' alignItems='center' marginY={10}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    pb={8}
                    display={{ xs: 'flex', md: 'none' }}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems='center'
                    textAlign='center'
                >
                    <Typography style={{ marginBottom: '30px' }} variant='h4'>{user.nome}</Typography>
                    <img src={user.foto} width='60%' style={{ borderRadius: '50%' }} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
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
                        <Button
                            sx={{ marginBottom: 5 }}
                            variant='contained'
                            color={liberado ? 'secondary' : 'primary'}
                            onClick={() => setLiberado(!liberado)}
                        >
                            {liberado ? 'Cancelar atualização' : 'Atualizar meu perfil'}
                        </Button>
                        <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        disabled={!liberado}
                                        value={user.nome}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                        autoComplete="given-name"
                                        name="nome"
                                        id="nome"
                                        label="Nome"
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
                                        disabled={!liberado}
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
                                        disabled
                                        value={user.usuario}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                        id="usuario"
                                        label="Email"
                                        name="usuario"
                                        autoComplete="email"
                                        type='email'
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
                                        disabled={!liberado}
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
                                        disabled={!liberado}
                                        value={confirmarSenha}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                        name="confirmar_senha"
                                        label="Confirme sua senha"
                                        type="password"
                                        id="confirmar_senha"
                                        fullWidth
                                        required
                                    />
                                    {confirmarSenha_valido || !liberado ?
                                        '' :
                                        (confirmarSenha.length == 0 ?
                                            <FormHelperText error>* Confirme sua senha.</FormHelperText> :
                                            <FormHelperText error>* As senhas não são iguais.</FormHelperText>)}
                                </Grid>
                                <Grid item xs={12} mt={5} display={liberado ? 'flex' : 'none'} justifyContent='center'>
                                    <Button disabled={desabilitado} type='submit' variant='contained'>
                                        Salvar alterações
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    display={{ xs: 'none', md: 'flex' }}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems='center'
                    textAlign='center'
                >
                    <Typography style={{ marginBottom: '30px' }} variant='h4'>{user.nome}</Typography>
                    <img src={user.foto} width='60%' style={{ borderRadius: '50%' }} />
                </Grid>
            </Grid >
        </>
    )
}

export default MeuPerfil