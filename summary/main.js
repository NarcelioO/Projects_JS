const event = new Promise((resolve, reject)=>{
    let name = "Pedro";
    if (name == "Pedro"){
        resolve(name)
    }else{
        reject("Name was not Pedro")
    }

})

event.then((name)=>{
    console.log("ola mundo")
}).catch((err)=>{
    console.log(err)
})