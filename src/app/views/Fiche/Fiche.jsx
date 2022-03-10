import React from 'react'
import FicheForm from './FicheForm'
import { styled, Box } from '@mui/system'
import {  Card,Grid } from '@mui/material'
import useSettings from 'app/hooks/useSettings'
import Breadcrumb from 'app/components/Breadcrumb/Breadcrumb'
import ImageUpload from './ImageUpload'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))
const FicheRoot = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
}))
const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const Titlediv= styled('div')(({ theme, mode }) => ({
    display:'flex',
    marginBottom:'20px'

}))
const List = () => {
    const { settings } = useSettings()
    const leftSidebar = settings.layout1Settings.leftSidebar

    return (
        <Container>
        <FicheRoot>
              <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Fiche' },
                    ]}
                />
            </div>

            <Grid container spacing={2}>
  <Grid item xs={6}>
  <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <Titlediv>  <Title>BON DE COMMANDE PRECAL NUMÉRIQUE</Title></Titlediv>
                          
                           <FicheForm/>
                        </Card>
  </Grid>
  <Grid item xs={6}>
  <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <Titlediv>  <Title>Display Image</Title></Titlediv>
                          
                           <ImageUpload/>
                        </Card>
  </Grid>
</Grid>
            
                       
           
        </FicheRoot>
        </Container>
    )
}

export default List
