import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControl,
    Checkbox,
} from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { FileUploader } from "react-drag-drop-files";

const SelectName = styled('div')(({ theme }) => ({
   
}))
const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
const FooterDiv = styled('div')(() => ({
   display:'flex',
   flex:1,
   justifyContent:'flex-end'
}))

const FormAdd = () => {
    const [state, setState] = useState({
        date: new Date(),
    })
    const [maxWidth, setMaxWidth] = React.useState('lg')
    const [file, setFile] = useState(null);
    const fileTypes = ["JPG", "PNG", "GIF"];

    const handleChange = (file) => {
        setFile(file);
      };
    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])
    const handleChangeFile = (file) => {
        setFile(file);
      };
    const handleSubmit = (event) => {
       
    }

    function handleMaxWidthChange(event) {
        setMaxWidth(event.target.value)
    }
    const entite=[1,2,3]    
    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>

                   
<Grid container spacing={3}  rowSpacing={3}>
  <Grid item xs>
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
<Grid item xs>
    <TextField id="outlined-basic" label="Adress" variant="outlined" style={{alignSelf:'center'}} />

  </Grid>
  
   <Grid item xs>
   <TextField id="outlined-basic" label="Contact 1" variant="outlined" style={{alignSelf:'center'}} />

                         </Grid> 
</Grid>
<Grid container spacing={3}  rowSpacing={3}>
  <Grid item xs>
  <TextField id="outlined-basic" label="Contact 2" variant="outlined" style={{alignSelf:'center'}} />


</Grid>
<Grid item xs>
<TextField id="outlined-basic" label="User name" variant="outlined" style={{alignSelf:'center'}} />

  </Grid>
  
   <Grid item xs>
   <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          // autoComplete="current-password"
        />
                         </Grid> 
</Grid>
<FooterDiv>
                <Button  variant="outlined" type="submit" style={{marginRight:'10px'}}>
                    {/* <Icon>send</Icon> */}
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Reset
                    </Span>
                </Button>
                <Button color="primary" variant="contained" type="submit">
                    {/* <Icon>send</Icon> */}
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Submit
                    </Span>
                </Button>
                </FooterDiv>
            </ValidatorForm>
        </div>
    )
}

export default FormAdd
