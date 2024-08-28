let data = [
    {
        userid:111,
        name:"rutvik",
        phone:"87468365",
    },
    {
        userid:123,
        name:"akshit",
        phone:"84958938",
    },
];

function viewuser(){
    let tbl="";
    data.map((val)=>{
        return (
           tbl+= `
                    <tr>
                    <td>${val.userid}</td>
                    <td>${val.name}</td>
                    <td>${val.phone}</td>
                    <td>
                    <button onclick="deletedata(${val.userid})">Delete</button>
                    ||
                    <button onclick="edituser(${val.userid})">edit</button>
                    
                    </td>
                    </tr>
           `
        )
    })
    document.getElementById('record').innerHTML=tbl;
}
viewuser();

function adduser(){
    let fname=document.getElementById('name').value;
    let fphone=document.getElementById('phone').value;

    if(!fname || !fphone){
        alert("plese enter detils...");
        return false;
    }

    let obj = {
        userid:Math.floor(Math.random()*1000),
        name:fname,
        phone:fphone,
    }
    data.push(obj);
    alert("add sucessfully ...");
    viewuser();
    document.getElementById('name').value='';
    document.getElementById('phone').value='';
}

function deletedata(id){
    let d=data.filter((val)=>{
        return val.userid != id
    });
    data=d;
    alert("delete sucessfulyy...");
    viewuser();
}


