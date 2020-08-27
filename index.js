const findOppositeNumber = (n,firstNumber) =>{
   if(n <4 || n > 20  || n%2 !=0 || firstNumber < 0 || firstNumber >= n){
       console.log("Error")
   }else{
        if(firstNumber < n/2){
           return firstNumber+n/2
        }else{
           return firstNumber-n/2
    }
   }
}
console.log(findOppositeNumber(10,2))
console.log(findOppositeNumber(10,6))

const merge2String = (s1,s2) =>{
    s1 =  s1.split("")
    s2 =  s2.split("") 
    let s3 = []
    let i = 0 
    while(i < s1.length){
         for(let k = 0 ; k < s2.length ; k++){
           s3.push(s1[i]) 
           s3.push(s2[k])
           i++
         }
      
     }
    return s3.filter(number=> number != undefined)

}
console.log(merge2String("abc","xyz"))
console.log(merge2String("abc","xyzt"))


