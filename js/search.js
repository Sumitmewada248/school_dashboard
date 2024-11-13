async function Search(){

   let Table=`<table width='70%'>
   <tr>
         <th> ID </th>
            <th> Name </th>
            <th> Roll No</th>
            <th> Class</th>
            <th> Total Fees </th>
            <th> Submit Fees </th>
            <th id="last"> Due Fees </th>
   </tr>  
     `
let txtval= document.getElementById("nsearch").value;
let api=`http://localhost:3000/students/?class=${txtval}`;

let Obj= await  fetch(api);
let Data= await Obj.json();               
console.log(Data);

Data.map((key)=>{
Table+=`<tr>
        <td> ${key.id} </td>
                <td> ${key.name} </td>
                <td> ${key.rollno} </td>
                <td> ${key.class} </td>
                <td> ${key.totalfees} </td>
                <td> ${key.submitfees} </td>
        <td id="last"> ${key.duefees} </td>
     </tr>         
   `
})

Table+="</table>";

document.getElementById("showsea").innerHTML=Table;
}