let data=[
    {
        userid:234,
        name:"krish",
        phone:"8493792",
    },
    {
        userid:235,
        name:"meet",
        phone:"8475957",
    },
];

function viewuser(){
    let tbl="";
    data.map((val)=>{
        return (
            tbl += `
            
                <tr>
                    <td>${val.userid}</td>
                    <td>${val.name}</td>
                    <td>${val.phone}</td>
                    <td>
                    <button onclick="deletedata(${val.userid})">Delete</button>
                     </td>
                </tr>
            `
        )
    })
    document.getElementById('record').innerHTML=tbl;
}
viewuser();

// function adduser(){
//     formname=document.getElementById('name').value;
//     formphone=document.getElementById('phone').value;

//     let obj = {
//         userid:Math.floor(Math.random()*1000),
//         name:formname,
//         phone:formphone,
//     };
//     data.push(obj);
//     alert("sucessfully add user....");
//     document.getElementById('name').value='';
//     document.getElementById('phone').value='';
//     viewuser();
// };

function adduser(){
    formname=document.getElementById('name').value;
    formphone=document.getElementById('phone').value;

    let obj = {
        userid:Math.floor(Math.random()*1000),
        name:formname,
        phone:formphone,
    };
    data.push(obj);
    alert("sucessfully add user....");
    document.getElementById('name').value='';
    document.getElementById('phone').value='';
    viewuser();
}


// function deletedata(id){
//     let d=data.filter((val)=>{
//         return val.userid != id
//     })
//     data=d;
//     viewuser();
// }

function deletedata(id){
    let d=data.filter((val)=>{
        return val.userid !=id
    })
    data=d;
    viewuser();
}


