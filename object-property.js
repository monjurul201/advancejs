const student=[
    {id:17,name:'omor sanny'},
    {id:18,name:'amina'},
    {id:19,name:'jamina'},
    {id:77,name:'kamina'},
    {id:88,name:'paibna'},

];
// const names=student.map(s=>s.name);
// console.log(names);
// const bigger=student.find(s=>s.id>40);
// console.log(bigger);
let student1=[];
for(let i=0;i<student.length;i++){
    
     const element =student[i].name;
student1.push(element);
   

}
console.log(student1);