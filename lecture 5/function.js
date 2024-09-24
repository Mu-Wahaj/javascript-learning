

    //   Arrow functions
const mul =(a,b)=>{
    // return a*b;
    console.log(a*b);

}


    //  parctice qusetions 
    // NO 1

    function vowels(str){
        
        let count = 0;
        for(let char of str){
            if(char ==="a"|| char==="e"||char ==="i"||char ==="o"||char ==="u"){
                count++;
            }
        }
        return count;
    }

      vowels("apna college");

    // bu arroow function

    const ArrowVowels=(string) =>{
        let count = 0;
        for(let char of string){
            if(char ==="a"|| char==="e"||char ==="i"||char ==="o"||char ==="u"){
                count++;
            }
        }
        return count;
    }
    ArrowVowels("wahaj");

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