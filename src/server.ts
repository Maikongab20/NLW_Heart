import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
   const user = {
        Nome :"maikon",
        Perfil: "www.google.com",
        address:{
            rua: "rua dos limoeiro",
            Numero: 51,
            complemento: null
        }

    }
    return response.json(user);
})


app.listen(3333, () => {console.log(`server is runing`)})