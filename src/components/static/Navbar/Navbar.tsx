import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Menu, MenuItem, AppBar, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Actions';
import Logo from '../../../images/GeckoLogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { busca } from '../../../services/Service';
import User from '../../../models/User';
import Carrinho from '../../../pages/Carrinho/Carrinho';

function Navbar() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

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
        dispatch(addToken(''));
        if (token) toast.success('Usuário deslogado com sucesso.', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });;
        navigate('/login');
    }

    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
    const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
    const open2 = Boolean(anchorEl2);
    const open1 = Boolean(anchorEl1);
    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };


    return (
        <AppBar className='navbar' position='static'>
            <Toolbar style={{ height: '100%' }}>
                <Box display='flex' justifyContent='space-between' alignItems='center' height='100%' width='100%'>

                    <Box display={{ xs: 'block', md: 'none' }}>
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
                            <MenuItem onClick={handleClose2}>
                                <Link to='/'>
                                    <Typography color='textPrimary' className='menunav'>Início</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose2}>
                                <Link to='/sobre'>
                                    <Typography color='textPrimary' className='menunav'>Sobre</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose2}>
                                <Link to='/listar_produtos'>
                                    <Typography color='textPrimary' className='menunav'>Produtos</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose2}>
                                <Link to='/contato'>
                                    <Typography color='textPrimary' className='menunav'>Contato</Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box display={{ xs: 'block', md: 'none' }}>
                        <img src={Logo} alt="Logo" width="45px" height="45px" />
                    </Box>

                    <Box display={{ xs: 'none', md: 'flex' }} justifyContent='start' alignItems='center'>
                        <Box marginRight={3}>
                            <img src={Logo} alt="Logo" width="45px" height="45px" />
                        </Box>
                        <Box mx={1}>
                            <Link to='/'>
                                <Typography className='menunav'>Início</Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Link to='/sobre'>
                                <Typography className='menunav'>Sobre</Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Link to='/listar_produtos'>
                                <Typography className='menunav'>Produtos</Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Link to='/contato'>
                                <Typography className='menunav'>Contato</Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Link to='/meus_produtos'>
                                <Typography className='menunav'>Meus Produtos</Typography>
                            </Link>
                        </Box>
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
                            <Box display={{ xs: 'none', md: 'block' }}>
                                <Typography className='menunav-nome' style={{ marginRight: 16 }}>
                                    {token.length != 0 ? user.nome : ''}
                                </Typography>
                            </Box>
                            <Box display={token.length != 0 ? 'none' : 'block'}>
                                <AccountCircleIcon fontSize={'large'} style={{ color: '#F6F4EB' }} />
                            </Box>
                            <Box display={token.length != 0 ? 'block' : 'none'}>
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
                            <MenuItem>
                                <Link to='/Carrinho'>
                                <Typography color='textPrimary'>Meu carrinho</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose1}>
                                <Link to='/meu_perfil'>
                                    <Typography color='textPrimary'>Meu Perfil</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose1}>
                                <Link to='/meus_produtos'>
                                    <Typography color='textPrimary'>Meus Produtos</Typography>
                                </Link>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose1}>
                                <Typography onClick={goLogout}>Sair</Typography>
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
                            <MenuItem onClick={handleClose1}>
                                <Link to='/login'>
                                    <Typography color='textPrimary' className='menunav'>Login</Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                </Box>
            </Toolbar>
        </AppBar>
    );
}


export default Navbar; 