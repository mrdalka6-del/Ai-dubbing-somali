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
"Authorization":"Bearer YOUR_API_KEY"
},

body:formData

})

let data=await response.json()

document.getElementById("status").innerText="Hadalka waa la turjumay: "+data.text

}
