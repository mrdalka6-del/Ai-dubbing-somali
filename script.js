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
