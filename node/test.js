Promise.resolve().then(() => { 
 console.log(0); 
 return 4
}).then((res) => { 
  return res
}).then((res) => {
  console.log(res)
})


Promise.resolve().then(() => { 
 console.log(1); 
}).then(() => { 
 console.log(2); 
}).then(() => { 
 console.log(3); 
}).then(() => { 
 console.log(5); 
}).then(() =>{ 
 console.log(6); 
}) 