
const express=require("express")
const multer=require("multer")

const app=express()
const upload=multer({dest:"uploads/"})

app.post("/dub",upload.single("video"),async(req,res)=>{

// halkan AI dubbing ayaa ka dhici lahaa

res.json({
video:"dubbed-video.mp4"
})

})

app.listen(3000,()=>{

console.log("server running")

})
