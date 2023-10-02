const validation = (error) => {
   const errors = {}

if(!error.name){
    errors.name = 'Minimo un caracter'
}
if(error.name.length > 25){
    errors.name= "Maximo 25 caracteres"    
}
if((!/^(http|https):\/\/[^ "]+$/.test(error.background_image))){
    errors.background_image = 'La imagen no es una URL válida'
}
if((!/^[a-zA-Z0-9\s.,!?()-]*$/.test(error.description))){
    errors.description = "La descripcion no es válida"
}
   if((!/^(0([.]\d+)?|([1-4]([.]\d+)?)|(5([.]0)?))$/.test(error.rating))){
    errors.rating = 'Debe ser decimal entre 0.0-5.0'
   }
   return errors
}

export default validation;
