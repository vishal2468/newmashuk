const express = require('express')

const speakersRouter=require('./speakers')
const feedbackRouter=require('./feedback')

const router=express.Router();

module.exports=()=>{
  router.get('/',(request,response)=>{
    response.render('pages/index',{pageTitle:'Welcomee'})
  });
  router.use('/speakers',speakersRouter());
  router.use('/feedback',feedbackRouter());

return router;
}
