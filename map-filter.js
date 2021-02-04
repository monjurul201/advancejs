

const number=[3,4,5,6,7,8];
// const output=[];
// for(let i=0; i<number.length;i++){
//     Element=number[i];
//     const result=Element*Element;
//     output.push(result);
// }


// function square(element){
//     return element*element;
// // }
// const result=number.map(function(element ,index,array){
// return element*element;
// })

// const result=number.map (element=> element*element)
// console.log(result);
// console.log(output);
const result=number.map(x=>x*x);
console.log(result);

const result2=number.filter(x=>x>5);
console.log(result2);

//find diye shudu shorto jodi sotto hoy tobe 1 print korbe.
const result3=number.find(x=>x>4);

console.log(result3);
