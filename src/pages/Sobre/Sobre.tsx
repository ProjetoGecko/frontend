import React from 'react'
import './Sobre.css'
import { Grid, Typography } from '@material-ui/core'

function Contato() {

    return (
        <>
            <Grid container>
                <Typography>Sobre</Typography>

                <Grid item container xs={12}>
                    <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis ullam, ut, architecto aperiam similique unde molestiae rerum voluptatem facilis quaerat fugiat possimus perferendis, praesentium itaque non eligendi vel fuga?</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Contato
