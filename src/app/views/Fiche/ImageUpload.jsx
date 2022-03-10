import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Files from 'react-files'

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
const Input = styled('input')({
    display: 'none',
  });
const ImageUpload = () => {
    const [state, setState] = useState({
        date: new Date(),
    })
    const [maxWidth, setMaxWidth] = React.useState('lg')

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

    const handleSubmit = (event) => {
       
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }


    function handleMaxWidthChange(event) {
        setMaxWidth(event.target.value)
    }
    
    const {
        username,
        
    } = state
    
          const  onFilesChange=(files)=> {
              console.log(files)
            }
          
           const onFilesError=(error, file)=> {
              console.log('error code ' + error.code + ': ' + error.message)
           }
    return (
        <div>
           
        </div>
    )
}

export default ImageUpload
