import { app } from './infrastructure/config/app'
import { httpServer } from './infrastructure/config/app'

import connectDB from './infrastructure/config/db'

const startServer = ()=>{
  const port = process.env.PORT || 3002
  app.get('/',(req,res)=>{
    res.send('Hello world')
  })

  httpServer.listen(port,()=>{
    console.log(`server running  at ${port}`);
    // connectDB()
  })
}

startServer()