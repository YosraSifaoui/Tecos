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
import { toast } from "react-toastify";
import Joi from "joi-browser";

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

const FicheForm = () => {
    // const [state, setState] = useState({
    //     date: new Date(),
    // })
    const [maxWidth, setMaxWidth] = React.useState('lg')
    const [file, setFile] = useState(null);
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [polar_coords, setPolar_coords] = useState("");
    const [fileImage, setFileImage] = useState(null);
    const [filePdf, setFilePdf] = useState(null);
    const [returnedImage, setReturnedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [inferenceTime, setInferenceTime] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [errors, setErrors] = useState({ });

    const [data, setData] = useState({ image: null,
        imageCrop: null,
        entite: "",
        entiteSelected: "",
        client: "",
        nbcc: "",
        axa: "",
        axb: "",
        ecarta: "",
        ecartb: "",
        hauteura: "",
        hauteurb: "",
        nez: "",
        formSide: "droite",});

   
  
   
      const handleResetButton = () => {
        document.getElementById("image").value = "";
        setData({
          data: {
            image: null,
            imageCrop: null,
            entite: "",
            entiteSelected: "",
            client: "",
            nbcc: "",
            axa: "",
            axb: "",
            ecarta: "",
            ecartb: "",
            hauteura: "",
            hauteurb: "",
            nez: "",
            formSide: "droite",
          }
          
        });
        setPolar_coords("")
          setFileImage(null) 
          setFilePdf(null)
          setReturnedImage(null)
          setLoading(false)
          setInferenceTime(null)
          setErrorMessage(null)
          setErrors({})
      };
    // useEffect(() => {
    //     ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
    //         console.log(value)

    //         if (value !== state.password) {
    //             return false
    //         }
    //         return true
    //     })
    //     return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    // }, [state.password])
    const handleChangeFile = (file) => {
        setFile(file);
      };
    const handleSubmit = (event) => {
       
    }

    function handleMaxWidthChange(event) {
        setMaxWidth(event.target.value)
    }

    const handleImageChange = (event) => {
        setReturnedImage(null);
        const data = { ...data };
        data[event.target.name] = event.target.files[0];
        data["imageCrop"] = null;
        setData({ data });
        try {
          if (event.target.files[0].name.match(/.(pdf)$/i)) {
           
            setFileImage(null)
            setReturnedImage(null)
            setFilePdf( URL.createObjectURL(event.target.files[0]));

          } else {
            setFileImage(
              URL.createObjectURL(event.target.files[0]),
            );
          setFilePdf( null);
          setReturnedImage(null)
          }
    
          if (!event.target.files[0].name.match(/.(jpg|jpeg|png|tif|pdf|bmp)$/i)) {
            data[event.target.name] = null;
            setData["image"](null)
            setFileImage(null)
            setFilePdf( null);
            setData(data)
            toast.warning("Seuls les jpg, jpeg, png, tiff et pdf sont autorisés", {
              theme: "colored",
            });
          }
        } catch (ex) {
          setData["image"](null)
          setFileImage(null)
          setFilePdf( null);

          data[event.target.name] = null;
          setData( data );
          toast.warning("Sélectionner un fichier (image/pdf)");
        }
      };

    //   const handleKeyPress=(e) =>{
    //     if (e.key === 'Enter') {
    //         console.log('do validate');
    //       }
    // }   
   const validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
      };
   const handleChange = (event) => {
        const errors = { ...errors };
        const errorMessage =validateProperty(event.target);
        if (errorMessage) errors[event.target.name] = errorMessage;
        else delete errors[event.target.name];
        const data = { ...data };
        data[event.target.name] = event.target.value;
        setData(data)
        setErrors(errors)
      };
   const addClient = () => {
    const data = { ...data };
    data["client"] = (parseInt(data["client"]) + 4113000000).toString();
    setData(data);
      };
    
     const handleEnter = (event) => {
        if (event.keyCode === 13) {
          const form = event.target.form;
          const index = Array.prototype.indexOf.call(form, event.target);
          if (index === 4) addClient();
          form.elements[index + 1].focus();
          event.preventDefault();
        }
      };
     return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container   spacing={3}  rowSpacing={3}>
  <Grid item xs>
  {/* <InputLabel htmlFor="max-width">
Image                            </InputLabel> */}


<FileUploader handleChange={handleImageChange} name="file" types={fileTypes} value="image" />

     

  </Grid>
  <Grid item xs={6} style={{marginBottom:"20px"}}>
 <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">D/G</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
name="formSide"    
label="D/G"
    value={data["formSide"]}
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

  </Grid>
 
</Grid>

                   
<Grid container spacing={3}  rowSpacing={3}>
  <Grid item xs>
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Entité</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={data["entite"]}
    label="Entité"
    name="entite"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

</Grid>
<Grid item xs>
    <TextField id="outlined-basic" 
    label="Client" variant="outlined" style={{alignSelf:'center'}}
    name="client"
    value={data["client"]}
     onKeyDown={handleEnter}
     onChange={handleChange}/>

  </Grid>
  
   <Grid item xs>
   <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">NBCC</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={data["nbcc"]}    label="NBCC"
    name="nbcc"
    onChange={handleChange}  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
                         </Grid> 
</Grid>
<Grid container spacing={3}>
  <Grid item xs> 
   <TextField id="outlined-basic" label="A" variant="outlined" style={{alignSelf:'center'}} 
   value={data["axa"]}
   name="axa"
   onChange={handleChange}/>
</Grid>
  <Grid item xs>
  <TextField id="outlined-basic" label="B" variant="outlined" style={{alignSelf:'center'}}
  value={data["axb"]} 
  name="axb"
  onChange={handleChange}/>

  </Grid>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs> 
  <TextField id="outlined-basic" label="Ecart OD" variant="outlined" style={{alignSelf:'center'}}
  value={data["ecarta"]} 
  name="ecarta"
  onChange={handleChange}/>
</Grid>
  <Grid item xs>
  <TextField id="outlined-basic" label="Ecart OG" variant="outlined" style={{alignSelf:'center'}}
  value={data["ecartb"]}
  name="ecartb"
  onChange={handleChange}/>
  </Grid>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs>
    <TextField id="outlined-basic" label="Hauteur OD" variant="outlined" style={{alignSelf:'center'}}
    value={data["hauteura"]} 
    name="hauteura"
    onChange={handleChange}/></Grid>
  <Grid item xs>
  <TextField id="outlined-basic" label="Hauteur OG" variant="outlined" style={{alignSelf:'center'}}
  value={data["hauteurb"]} 
  name="hauteurb"
  onChange={handleChange}/>
  </Grid>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs>
<TextField id="outlined-basic" label="Nez" variant="outlined" style={{alignSelf:'center'}} 
value={data["nez"]}
name="nez"
onChange={handleChange}/></Grid>
                        </Grid>
<FooterDiv>
                <Button  variant="outlined" type="submit" style={{marginRight:'10px'}} onClick={handleResetButton}>
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

export default FicheForm
