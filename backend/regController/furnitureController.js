const furniModel=require("../models/furnitureModel")


const furnitureData=async(req,res)=>{

   const {name,price,image,catagory,massage}=req.body;

    try {
        const data=await furniModel.create({
            name:name,
            price:price,
            image:image,
            catagory:catagory,
            status:false,
            about:massage

        })
        res.status(201).json("Data Save in mongoDB!!")
    } catch (error) {
        console.error("error",error)
        res.status(401).json("data is not inserted in mongoDb!!")

    }
}

const displayData=async(req,res)=>{

   try {
    await furniModel.find().then((data)=>{
         res.status(201).json({mydata:data})    
    })
   } catch (error) {
    console.error("error",error)
    res.status(401).json({massage:"data is not found"})
   }
}

const delData=async(req,res)=>{
    const {id}=req.body;
    try {
       furniModel.findByIdAndDelete(id).then((responc)=>{
        res.status(201).json("data successfully delete!!")
       })
    } catch (error) {
    res.status(401).json({massage:"data is not found"})
        
    }
}
const editData=async(req,res)=>{
    const {id}=req.body;
    try {
       furniModel.findById(id).then((data)=>{
        res.status(201).json(data)
       })
    } catch (error) {
    res.status(401).json({massage:"data is not found"})
        
    }
}
const udateData=async(req,res)=>{
    const {id,name,price,about,catagory}=req.body;
      try {
            await furniModel.findByIdAndUpdate(id,{id,name,price,about,catagory}).then((respnc)=>{
                res.status(201).json("data successfully updated!!")
            })
      } catch (error) {
        console.error("error",error)
    res.status(401).json({massage:"error"})
        
      }
   
}
const doubleBedData=async(req,res)=>{
    try {
        await furniModel.find({catagory:"Double Bed"}).then((data)=>{
             res.status(201).json({mydata:data})    
        })
       } catch (error) {
        console.error("error",error)
        res.status(401).json({massage:"data is not found"})
       }
}
const starData=async(req,res)=>{
    const {id,ratting,status}=req.body;
   try {
        await furniModel.findByIdAndUpdate(id,{ratting:ratting,status:status}).then((responc)=>{
            res.status(201).json(responc);
        })
   } catch (error) {
    console.error("error",error)
        res.status(401).json({massage:"data is not found"})
   }
}
const singleBedData=async(req,res)=>{
    try {
        await furniModel.find({catagory:"Single Bed"}).then((data)=>{
             res.status(201).json({mydata:data})    
        })
       } catch (error) {
        console.error("error",error)
        res.status(401).json({massage:"data is not found"})
       }
}
const bardrobedataData=async(req,res)=>{
    try {
        await furniModel.find({catagory:"wardrobe"}).then((data)=>{
             res.status(201).json({mydata:data})    
        })
       } catch (error) {
        console.error("error",error)
        res.status(401).json({massage:"data is not found"})
       }
}
const dresserData=async(req,res)=>{
    try {
        await furniModel.find({catagory:"Dresser"}).then((data)=>{
            res.status(201).json({mydata:data})    
       })
    } catch (error) {
        console.error("error",error)
        res.status(401).json({massage:"data is not found"}) 
    }
}
const studytableData=async(req,res)=>{
    try {
        await furniModel.find({catagory:"Study table"}).then((data)=>{
            res.status(201).json({mydata:data})    
       })
    } catch (error) {
        console.error("error",error)
        res.status(401).json({massage:"data is not found"}) 
    }
}
const addCardData=async(req,res)=>{
    try {
        const {id}=req.body;
        await furniModel.findById(id).then((responc)=>{
            res.status(201).json(responc);
        })
    } catch (error) {
        console.error("error",error)
        res.status(401).json({massage:"data is not found"}) 
    }
}
module.exports={
    furnitureData,
    displayData,
    delData,
    editData,
    udateData,
    doubleBedData,
    starData,
    singleBedData,
    bardrobedataData,
    dresserData,
    studytableData,
    addCardData
}