import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Menu, MenuItem, AppBar, Toolbar, Typography } from '@mui/material'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { UserState } from '../../../store/token/Reducer'
import { addToken } from '../../../store/token/Actions'
import Logo from '../../../images/GeckoLogo.png'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { busca } from '../../../services/Service'
import User from '../../../models/User'

function Navbar() {
    let navigate = useNavigate()

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const idUser = useSelector<UserState, UserState['id']>(
        (state) => state.id
    )

    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: '',
        token: ''
    })

    async function getUser() {
        try {
            await busca(`/usuarios/${idUser}`, setUser, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (e) {

        }
    }

    useEffect(() => {
        getUser()
    }, [idUser])

    function goLogout() {
        dispatch(addToken(''))
        if (token) toast.success('Usuário deslogado com sucesso.', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        })
        navigate('/login')
    }

    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null)
    const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null)
    const open2 = Boolean(anchorEl2)
    const open1 = Boolean(anchorEl1)
    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl2(event.currentTarget)
    }
    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl1(event.currentTarget)
    }
    const handleClose2 = () => {
        setAnchorEl2(null)
    }
    const handleClose1 = () => {
        setAnchorEl1(null)
    }
    
    return (
        <AppBar className='navbar' position='static'>
            <Toolbar style={{ height: '100%' }}>
                <Box display='flex' justifyContent='space-between' alignItems='center' height='100%' width='100%'>

                    <Box display={{ xs: 'flex', md: 'none' }}>
                        <Button
                            color='primary'
                            id="basic-button"
                            aria-controls={open2 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open2 ? 'true' : undefined}
                            onClick={handleClick2}
                        >
                            <MenuIcon style={{ color: '#F6F4EB' }} />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl2}
                            open={open2}
                            onClose={handleClose2}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <Link to='/'>
                                <MenuItem onClick={handleClose2}>
                                    <Typography color='textPrimary' className='menunav'>Início</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/sobre'>
                                <MenuItem onClick={handleClose2}>
                                    <Typography color='textPrimary' className='menunav'>Sobre</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/listar_produtos'>
                                <MenuItem onClick={handleClose2}>
                                    <Typography color='textPrimary' className='menunav'>Produtos</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/contato'>
                                <MenuItem onClick={handleClose2}>
                                    <Typography color='textPrimary' className='menunav'>Contato</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>

                    <Box display={{ xs: 'flex', md: 'none' }}>
                        <img src={Logo} alt="Logo" width="45px" height="45px" />
                    </Box>

                    <Box display={{ xs: 'none', md: 'flex' }} justifyContent='start' alignItems='center'>
                        <Box marginRight={3}>
                            <img src={Logo} alt="Logo" width="45px" height="45px" />
                        </Box>
                        <Link to='/'>
                            <Box mx={1}>
                                <Typography className='menunav'>Início</Typography>
                            </Box>
                        </Link>
                        <Link to='/sobre'>
                            <Box mx={1}>
                                <Typography className='menunav'>Sobre</Typography>
                            </Box>
                        </Link>
                        <Link to='/listar_produtos'>
                            <Box mx={1}>
                                <Typography className='menunav'>Produtos</Typography>
                            </Box>
                        </Link>
                        <Link to='/contato'>
                            <Box mx={1}>
                                <Typography className='menunav'>Contato</Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Button
                            color='primary'
                            id="basic-button1"
                            aria-controls={open1 ? 'basic-menu1' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open1 ? 'true' : undefined}
                            onClick={handleClick1}
                        >
                            <Box display={{ xs: 'none', md: 'flex' }}>
                                <Typography className='menunav-nome' style={{ marginRight: 16 }}>
                                    {token.length != 0 ? user.nome : ''}
                                </Typography>
                            </Box>
                            <Box display={token.length != 0 ? 'none' : 'flex'}>
                                <AccountCircleIcon fontSize={'large'} style={{ color: '#F6F4EB' }} />
                            </Box>
                            <Box display={token.length != 0 ? 'flex' : 'none'}>
                                <img src={user.foto} width={40} height={40} style={{ borderRadius: '50%' }} />
                            </Box>
                        </Button>
                        <Menu
                            hidden={token.length != 0 ? false : true}
                            id="basic-menu1"
                            anchorEl={anchorEl1}
                            open={open1}
                            onClose={handleClose1}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button1',
                            }}
                        >
                            <Link to='/Carrinho'>
                                <MenuItem onClick={handleClose1}>
                                    <Typography color='textPrimary'>Meu Carrinho</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/meu_perfil'>
                                <MenuItem onClick={handleClose1}>
                                    <Typography color='textPrimary'>Meu Perfil</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/meus_produtos'>
                                <MenuItem onClick={handleClose1}>
                                    <Typography color='textPrimary'>Meus Produtos</Typography>
                                </MenuItem>
                            </Link>
                            <Divider />
                            <MenuItem onClick={() => {
                                handleClose1()
                                goLogout()
                            }}>
                                <Typography>Sair</Typography>
                            </MenuItem>
                        </Menu>
                        <Menu
                            hidden={token.length != 0 ? true : false}
                            id="basic-menu1"
                            anchorEl={anchorEl1}
                            open={open1}
                            onClose={handleClose1}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button1',
                            }}
                        >
                            <Link to='/login'>
                                <MenuItem onClick={handleClose1}>
                                    <Typography color='textPrimary' className='menunav'>Login</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>

                </Box>
            </Toolbar>
        </AppBar>
    )
}


export default Navbar 