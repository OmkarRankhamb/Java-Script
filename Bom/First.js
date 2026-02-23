
function alertwidth(){
    console.log("screen:");
    console.log(screen.width);
    console.log(screen.availHeight);
    console.log(screen.colorDepth);
    console.log(screen.pixelDepth);
    
    console.log("location::");
    console.log(location.hostname);
    
    
    
    
}

function reload(){
  Location.reload();
    
    
}

function Assigin(){
   window.location.href ="https://www.google.com";
}

function NavigotorDemos() {
    navigator.clipboard.readText().then((e)=>{console.log(e);
    }).catch((r)=>{
        console.log(r);
        
    })

    if(navigator.onLine)
    {
        alert(" you are online");
    }
    else
    {
        alert("conect to internet..")
    }
}

function TrackLocation(){
 let id = navigator.geolocation.watchPosition((v)=>{
    console.log(v.coords.altitude);
    console.log(v.coords.longitude);
    console.log(v.coords.latitude);
    console.log(v.coords.heading);

    console.log(id);
    navigator
    .geolocation.clearWatch(id);

    
    
    
    
    
 });
}