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


module.exports={
    furnitureData,
    displayData
}