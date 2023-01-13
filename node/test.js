<<<<<<< HEAD
const arr = [9, 2, 3]

console.log(arr.shift());

console.log(arr);
=======
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
>>>>>>> fb895d37b6e6bef6cc30d44c1bd1f45c553f374a
