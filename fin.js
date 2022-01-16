let alien={
    name:'Atish',
    depart:'ECE',
    NCC:{
        drill:'good',
        comm:'OK'
    },
    VCC:{
        rill:5,
        komm:true
    }
}

//let alien1 = new alien();

for (let key in alien) {
  //  console.log(key)
    if (typeof alien[key]=== 'object') {
     //   console.log(key)
        for (let key2 in alien[key]) {
          //  console.log(key,key2)
            console.log(key2, alien[key][key2])
        }
    }
    else console.log(key, alien[key])
}


