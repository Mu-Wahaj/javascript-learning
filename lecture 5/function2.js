

   // forEach loop in arrays

   let array =[
    1,2,3,4,5,6
];
array.forEach((val)=>{
    console.log(val);
})

// practice Question 

let arr=[
    1,2,3,4,5,6
];
arr.forEach((val ,idx ,arr)=>{
    square=val*val
    console.log(square ,idx,arr);
})

let ar =[
    1,2,3,4,5,6
];
function callBack (num){
    sq=num*num
    console.log(sq)
}
ar.forEach(callBack);


//    map method in array


let mapArray =[
    12,3,4,55,654,6
];

 let newarray=mapArray.map((val)=>{
    return val**2;
})
console.log(mapArray);
console.log (newarray);



// filter methhoda in array

let filterarray =[
    1,3,434,54,232,52,23,32
];

 let evennum=filterarray.filter((val)=>{
    return val %2==0;
})
console.log(filterarray);
console.log(evennum);



  // reduce method in array

  let counting= [
    1,2232,2332
  ];

 let result= counting.reduce((res,curr)=>{
             return res**2+curr;
 });
 console.log(counting);
 console.log(result);

//   practice qustion 

let markss =[
    34,56,78,90,91,87,81
];
let passmarks= markss.filter((val)=>{
    return val>80;
})
console.log(markss);
console.log(passmarks);


// question no 2
 let n=prompt("enter the array...")
let userArrayc =[
];
for(let i =1;i<=n;i++){
    userArrayc[i-1]=i;
}
console.log(userArrayc);

let summ =userArrayc.reduce((pre ,cur)=>{
    return pre+cur;
})
console.log(`sum =${summ}`);
let fact =userArrayc.reduce((pre ,cur)=>{
    return pre*cur;
})
console.log(`factorial=${fact}`);
