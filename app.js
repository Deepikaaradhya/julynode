//list of restaurents
app.get('/restaurants',(req,res) =>{
    db.collection('restaurants').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//query params example
app.get('/restaurant',(req, res) =>{
    var query = {}
    if(req.query.stateId){
        query={state_id:Number(req.query.stateId)}
        console.log(query)
    }else if(req.query.mealtype_id){
        query={"mealTypes.mealtype_id":req.query.mealtype}
    }
    db.collection('restaurants').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})