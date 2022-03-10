import React,{useState,Fragment} from 'react'
import { styled, useTheme, alpha } from '@mui/system'
import useSettings from 'app/hooks/useSettings'
import Breadcrumb from 'app/components/Breadcrumb/Breadcrumb'
import { Span } from 'app/components/Typography'
import SimpleCard from 'app/components/cards/SimpleCard'
import PaginationTable from '../material-kit/tables/PaginationTable'
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel'

import {
    Button,
    Grid,
    Radio,
    RadioGroup,
    FormControl,
    TextField,
} from '@mui/material'


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
const Div = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection:'row',
    padding:'20px 20px 20px 20px'
    
 }))
 const DivSearch = styled('div')(({ theme }) => ({ 
     flex:1,
     display:'flex',
    justifyContent:'flex-end',
 }))
 const HeaderTable = styled('div')(({ theme }) => ({ 
    display:'flex',
    marginBottom:'%'
}))
 const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '80%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      borderBottom:'1px solid rgba(52, 49, 76, 0.54)',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
 const SelectName = styled('div')(({ theme }) => ({
   
 }))
const ListOrganisation = () => {
    const [maxWidth, setMaxWidth] = React.useState('lg')
    
  
    function handleChange(event) {
        setMaxWidth(event.target.value)
    }
    return (
        <Container>
        <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Organisation List' },
                    ]}
                />
            </div>
        <Fragment>
          <Div>
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
  <Grid item xs={3}>
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Organisation Name</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value="Organisation Name"
    label="Organisation Name"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
  </Grid>
  {/* <DivLogin> */}
  <Grid item xs={3}>
   
  <TextField id="outlined-basic" label="User name" variant="outlined" style={{alignSelf:'center'}} />
                      </Grid>
  <Grid item xs={3}>
  <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          style={{marginLeft:"-49%"}}
          // autoComplete="current-password"
        />
                      </Grid>
                      {/* </DivLogin> */}
  <Grid item xs={3}>
  <Button color="primary" variant="contained" type="submit" style={{marginLeft:"-63%", width:"50%", marginTop:"10px"}}>
                  <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                      Submit
                  </Span>
              </Button>  
              </Grid>
</Grid>
</Div>
<SimpleCard >
 <Grid item xs>
     <HeaderTable>
     <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Groupe By</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value="Group By"
    label="Groupe By"
    onChange={handleChange}
    style={{maxWidth:"365px"}}

>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
                           <DivSearch>
                           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
                           </DivSearch>
                           </HeaderTable>

                           </Grid>
                          
         <PaginationTable />

     </SimpleCard> 
{/* </Grid> */}
                
           
        </Fragment>
        
     </Container>
    )
                }
              
export default ListOrganisation
