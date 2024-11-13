async function myed(id){
    let name=document.getElementById("name").value;
    let course=document.getElementById("course").value;
    let class1=document.getElementById("class").value;
    let city=document.getElementById("city").value;
    let submit=document.getElementById("submit").value;
    let fees=document.getElementById("fees").value;

    let api=`http://localhost:3000/students/${id}`;
  
    fetch(api, {
      method: "PATCH",
      headers: {
          "Content-Type" : "application/json"
        },
      body: JSON.stringify(
        {
           "name":name,
          "rollno":course,
          "class":class1,
          "totalfees":city, 
          "submitfees":submit, 
          "duefees":fees  
        }
      )
    })
    .then(json => {
      alert("Data updated!!!");
    });
  }


  async function editDisplay(myid)
{
  let api=`http://localhost:3000/students/${myid}`;

  let Obj= await fetch(api);
  let Data=await Obj.json();
  document.getElementById("show").style.display="block";
  myForm=`

    
          Edit Name: <input type="text" id="name" value="${Data.name}">
          <br>
           Edit Roll No: <input type="text" id="course" value="${Data.rollno}">
          <br>
           Edit Class: <input type="text" id="class" value="${Data.class}">
          <br>
           Edit Total Fees: <input type="text" id="city" value="${Data.totalfees}">
          <br>
           Edit submit Fees: <input type="text" id="submit" value="${Data.submitfees}">
          <br>
           Edit Due Fees: <input type="text" id="fees" value="${Data.duefees}">
          <br>
          <button onclick="myed(${Data.id})"> Edit Save! </button>
  `
  document.getElementById("show").innerHTML=myForm;
}

async function displayed(){
    let table=`<table width='70%' >
        <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Roll No</th>
            <th> Class</th>
            <th> Total Fees </th>
            <th> Submit Fees </th>
            <th> Due Fees </th>
            <th id="last">  </th>
            </tr>
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
                <td id="last" ><a href="#" onclick="editDisplay(${key.id})"> <ion-icon name="create-outline"></ion-icon> </a>
          </td>
                </tr> `
            })
        table+="</table>"
        document.getElementById("ed").innerHTML=table;
        }
        displayed();