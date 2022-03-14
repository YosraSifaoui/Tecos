import React,{useState,Fragment} from 'react'
import { styled, useTheme, alpha } from '@mui/system'
import useSettings from 'app/hooks/useSettings'
import Breadcrumb from 'app/components/Breadcrumb/Breadcrumb'
import StatCards from '../dashboard/shared/StatCards'
import SimpleCard from 'app/components/cards/SimpleCard'
import PaginationTable from '../material-kit/tables/PaginationTable'
import SearchIcon from '@mui/icons-material/Search';
// import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
    Grid,
    FormControl,
    NativeSelect 
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
const HeaderRow = styled('div')(({ theme }) => ({
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
    marginBottom:'2%'
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
const List = () => {
    
    const [maxWidth, setMaxWidth] = React.useState('lg')
    const animatedComponents = makeAnimated();
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    const handleChange = (file) => {
    };
    return (
        <Container>
        <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Operations List' },
                    ]}
                />
            </div>
        <Fragment>
    
                <Grid  spacing={3}>
                    <HeaderRow>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Organisation Name</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value="Organisation Name"
    label="Organisation Name"
    onChange={handleChange}
    style={{maxWidth:"50%"}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>


                    </Grid>
                    <Grid item xs={6}>
                    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Organisation User</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value="Organisation User"
    label="Organisation User"
    onChange={handleChange}
    style={{maxWidth:"50%"}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
                           
  </Grid>
  </Grid>   
  </HeaderRow >           
       <Grid  >
                        <StatCards />
                    
            
                    </Grid>
<Grid >
<SimpleCard >
 <Grid item xs>
     <HeaderTable>
     {/* <FormControl fullWidth> */}
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Filter
        </InputLabel> */}
        <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[options[4], options[5]]}
      isMulti
      options={options}
    />
      {/* </FormControl> */}
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
</Grid>
                </Grid>
                
           
        </Fragment>
        
     </Container>
    )
                }

export default List
