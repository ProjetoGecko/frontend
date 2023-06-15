import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { Grid } from '@mui/material'

function MeuPerfil() {

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    return(
        <>
            <Grid container display='flex' justifyContent='space-evenly' alignItems='center' marginY={10}>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </>
    )
}

export default MeuPerfil