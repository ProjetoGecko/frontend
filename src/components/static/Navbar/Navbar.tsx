import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Actions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../../images/GeckoLogo.png';
import ModalCarr from '../../carrinho/ModalCarr';

function Navbar() {
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState['tokens']>((state) => state.tokens);

    function goLogout() {
        dispatch(addToken(''));
        if(token)toast.success('Usuário deslogado com sucesso!', {
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

    return (
        <AppBar className='navbar' position='static'>
            <Toolbar>
                <Box mx={4}>
                    <Typography className='logonav'><img src={Logo} alt="Logo" width="45px" height="45px"/></Typography>
                </Box>
                <Box display='flex' justifyContent='start'>
                    <Box>
                        <Link to='/'>
                            <Typography className='menunav'>Início</Typography>
                        </Link>
                    </Box>
                    <Box mx={1}>
                        <Typography className='menunav'>   </Typography>
                    </Box>
                    <Box>
                        <Link to='/sobre'>
                            <Typography className='menunav'>Sobre</Typography>
                        </Link>
                    </Box>
                    <Box mx={1}>
                        <Typography className='menunav'>   </Typography>
                    </Box>
                    <Box>
                        <Link to='/listar_produtos'>
                            <Typography className='menunav'>Produtos</Typography>
                        </Link>
                    </Box>
                    <Box mx={1}>
                        <Typography className='menunav'>   </Typography>
                    </Box>
                    <Box>
                        <Link to='/contato'>
                            <Typography className='menunav'>Contato</Typography>
                        </Link>
                    </Box>
                    <Box mx={1}>
                        <Typography className='menunav'>   </Typography>
                    </Box>
                    <Box>
                      <Link to ='/Listar_Categorias'>  
                        <Typography className='menunav'>Categorias</Typography>
                     </Link>  
                    </Box>
                    <Box className='boxcarrinho' marginLeft={96}>
                        <Link to='#'>
                            <ModalCarr/>
                        </Link>
                    </Box>
                    <Box className='boxlog' marginLeft={5} onClick={goLogout}>
                        <Link to={token? '#' : '/login'}>
                            <Typography className='login'>{token? 'Deslogar' : 'Logar'}</Typography>
                        </Link>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}


export default Navbar; 