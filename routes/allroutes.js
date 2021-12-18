const router=require('express').Router();
const fs=require('fs')



router.post('/',(req,res)=>{
    //post  route is used for create a new resources
    //its a not idemopotent -non repeatable

    fs.writeFile('a.txt',"hello-world",(err)=>{
        if(err) return console.log(err);
        else return res.send("successfully created a file")
    })

})

router.put('/',(req,res)=>{
    //put route same as post put request are used to update resources.
    //put ensure safe muliple request
    fs.appendFile('a.txt','hello boy',(err,data)=>{
        if(err) return console.log(err);
        else return res.send("suceessfully update data")
    })

})

router.get('/',(req,res)=>{
    //get route is used for getting a data..
    //get request is not used for updating data
    //its ensure a safe multiple request

    fs.readFile('a.txt',(err,data)=>{
        if(err) return console.log(err);
        else return res.send(data.toString())
    })

})





router.delete('/',(req,res)=>{
    //delete route is used for deleting a resources from the server.
        fs.unlink('a.txt',(err,data)=>{
        if(err) return console.log(err);
        else return res.send('sucessfully deleted')
    })

})
router.options('*',(req,res)=>{
    //aa method to request communication options for the resources identified by uri.
    //option does invoke any action or an operation on resources,but it provides
    //neccessary inforamtion for communication with that resoucrces.

})


module.exports=router;