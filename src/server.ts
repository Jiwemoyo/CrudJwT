import app from "./app";

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log('La aplicacion se esta ejecutando en el puerto 3000')
})