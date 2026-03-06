async function start(){

let file=document.getElementById("video").files[0]

if(!file){
alert("Video geli")
return
}

document.getElementById("status").innerText="Video waa la upload gareynayaa..."

let formData=new FormData()
formData.append("file",file)

let response=await fetch("https://api.openai.com/v1/audio/transcriptions",{

method:"POST",

headers:{
"Authorization":" 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 "
},

body:formData

})

let data=await response.json()

document.getElementById("status").innerText="Hadalka waa la turjumay: "+data.text

}
