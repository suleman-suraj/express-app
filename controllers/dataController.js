const data =require("../data")

//get all data
const getAllData =(req,res)=>{
    res.json(data)
}
//get single data
const getAData =(req,res)=>{
    const aData = data.filter((d)=>d.name===req.params.name)
    res.json(aData)
}

const addPerson =(req,res)=>{
    const person={
        name:req.body.name,
        phone:req.body.phone,
        sex:req.body.sex,
    }
    data.push(person)
    res.send(data)

}
const deleteData=(req,res)=>{
    const id=req.params.id;
    const data=data.some((p)=>p.id===id);

   if (data) {
       res.json({
           msg: "Data deleted ${id}",
           data:data.filter((p)=>p.id !== id),
       });
   }
};

module.exports={getAllData,getAData,addPerson,deleteData};

