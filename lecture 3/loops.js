// console.log("apna colege");
// console.log("apna colege");
// console.log("apna colege");
// console.log("apna colege");
// console.log("apna colege");
// 
        // looops

        //      for loop

        // for(let a = 1 ; a<= 10000 ; a++ ){
        //     console.log("apna colege");
        // }

        // sum of first 5 n0



        // let sum = 0;
        // let n = prompt("enter a No");
        // for (let a = 1 ; a=n ; a++){
        //     sum = sum + a ;
          
        // }
        // console.log("sum of first 5 n0 : " , sum);



        //  infinite loop  
        // let i=1
        // for( ; i>=0 ; i++)
        // {
            
        //     console.log(i);
        // }


        // while loop

        //     print 1 to 5 numbers
        // while(a<=5){
                //         // document.write(`<h1> this counting :  ${a} </h1> ` );
                //         console.log(a);
                //         a++;
                // }
                
                
                // dp while loop
        //         let a = 10;

        //   do{
        //         console.log("wahaj");
        //         a++;
        //   }  while(a<=5);


        //      for of loop
                
        //    let a= "wahaj"

        //    for(let b of a){
        //         console.log("Name Spelling :" + b);
        //    }
                
                //  for-in-loop
          
                // let student = {
                //      Name :"wahaj",
                //      Age : 19,
                //      isPAss : true,
                // }
                //  for(let val in student){
                //         console.log("key =" , val , "value = " , student[val]);
                //  }

                        //     practice exe


                        // Q No 1 : print even no from 0 to 100

                        // let a = 0;
                        // for(; a <= 100 ; a++){
                        //         console.log(a);
                        // }
                          
                //       for( a= 0 ; a <= 100 ; a++){
                //                   if(a% 2=== 1) {  
                //                  console.log("Even No = " , a);
                //                 } 
                //          }
                          
                          // Q No 2 : gusee No from the user 

                          let gameNo = 26;
                          let gusse= prompt("gusse a no :")
                          
                          for(;gameNo != gusse ;){
                                  document.write("User NO <br/>: " , gusse )
                                  gusse=prompt("you gusse incorrect no please try again:");
                          }
                 document.write("you enter correct No : " );