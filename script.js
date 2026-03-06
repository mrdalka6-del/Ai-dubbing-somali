
async function upload(){

let file=document.getElementById("video").files[0]

if(!file){
alert("Video geli")
return
}

document.getElementById("status").innerText="AI ayaa shaqeynaya..."

let form=new FormData()
form.append("video",file)

let res=await fetch("/dub",{method:"POST",body:form})

let data=await res.json()

document.getElementById("status").innerText="Dubbing waa diyaar"

window.open(data.video)

}
