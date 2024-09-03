import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import formRoutes from '../ qa _system/src/routes';
const PORT = 3000;

const app = express();
 


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

