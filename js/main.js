
async function display() {
    let table = `
        <table width='70%'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Class</th>
                <th>Total Fees</th>
                <th>Submit Fees</th>
                <th id="last">Due Fees</th>
            </tr>
    `;
    
    let api = "http://localhost:3000/students";
    let mydata = await fetch(api);
    let data = await mydata.json();
    
    data.forEach((key) => {
        table += `
            <tr>
                <td>${key.id}</td>
                <td>${key.name}</td>
                <td>${key.rollno}</td>
                <td>${key.class}</td>
                <td>${key.totalfees}</td>
                <td>${key.submitfees}</td>
                <td id="last">${key.duefees}</td>
                <td id="last">
                    <button onclick="submitFees(${key.id}, ${key.submitfees}, ${key.duefees}) ">Check Fees</button>
                </td>
            </tr>
        `;
    });
    
    table += "</table>";
    document.getElementById("demo").innerHTML = table;
}

async function submitFees(id, submitfees, duefees) {
    let newfees = duefees - submitfees;

    if (newfees <= 0) {
        newfees = 0;
        alert("You have submitted all your fees!");
    } else {
        alert("Your fees are still due .Please submit fees!");
    }

    let api = `http://localhost:3000/students/${id}`;
    fetch(api, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "duefees": newfees
        })
    })
    .then(response => response.json())
    .then(json => {
        display();
    })
}
display();
