const validation = (error) => {
   const errors = {}

if(!error.name){
    errors.name = 'Minimo un caracter'
}
if(error.name.length > 25){
    errors.name= "Maximo 25 caracteres"    
}
if((/[^a-zA-Z0-9\s]+/.test(error.name))){
    errors.name = 'Caracteres inválidos'
}

if((!/^(http|https):\/\/[^ "]+$/.test(error.background_image))){
    errors.background_image = 'La imagen no es una URL válida'
}
if((!/^[a-zA-Z0-9\s.,!?()-]*$/.test(error.description))){
    errors.description = "La descripcion no es válida"
}
if(error.description < 5){
    errors.description = "La descripcion es muy corta"
}
   if((!/^(0([.]\d+)?|([1-4]([.]\d+)?)|(5([.]0)?))$/.test(error.rating))){
    errors.rating = 'Debe ser decimal entre 0.0-5.0'
   }
if((/[^a-zA-Z0-9\s]+/.test(error.platforms))){
    errors.platforms = 'Caracteres inválidos'
}
if((!/[ ,]/.test(error.platforms))){
    errors.platforms = 'Separalos por coma.'
}
if((/[^a-zA-Z0-9\s]+/.test(error.genres))){
    errors.genres = 'Caracteres inválidos'
}
if((!/[ ,]/.test(error.genres))){
    errors.genres= 'Separalos por coma.'
}

   return errors
}

export default validation;
