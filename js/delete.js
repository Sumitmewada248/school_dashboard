function mydel(myid)
{
  let api=`http://localhost:3000/students/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted!!!");
  })
  
}

async function display(){
    let table=`<table width='70%' >
        <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Roll No</th>
            <th> Class</th>
            <th> Total Fees </th>
            <th> Submit Fees </th>
            <th> Due Fees </th>
            <th id="last"> </th>
            `
        let api="http://localhost:3000/students";
        let mydata= await fetch(api);
        let data=await mydata.json();
        data.map((key)=>{
            table+=`<tr>
                <td> ${key.id} </td>
                <td> ${key.name} </td>
                <td> ${key.rollno} </td>
                <td> ${key.class} </td>
                <td> ${key.totalfees} </td>
                <td> ${key.submitfees} </td>
                <td> ${key.duefees} </td>
                <td id="last"><a href="#" onclick="mydel(${key.id})"><ion-icon name="trash-outline"></ion-icon></a></td>
                </tr> `
            })
        table+="</table>"
        document.getElementById("remo").innerHTML=table;
        }
        setInterval(display,1000);