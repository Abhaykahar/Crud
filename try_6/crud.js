let data=[
    {
        userid:123,
        name:"parena",
        phone:"83784738",
    },
    {
        userid:124,
        name:"abhishek",
        phone:"83784738",
    },
];


function viewuser(){
    let tbl="";
    data.map((val)=>{
        return(
            tbl += `
            
            <tr>
                <td>${val.userid}</td>
                <td>${val.name}</td>
                <td>${val.phone}</td>
                <td>
                    <button onclick="deletedata(${val.userid})">Delete</button>
                    || 
                    <button onclick="Editdata(${val.userid})">Edit</button>
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
    let id=document.getElementById('editid').value;

    if(!fname || !fphone){
        alert("Enter details");
        return false;
    }

    let obj ={
        userid:Math.floor(Math.random()*10000),
        name:fname,
        phone:fphone,
    }

    if(id){
        let ed=data.map((val)=>{
            if(val.userid == id){
                return {
                    ...val,
                    name:fname,
                    phone:fphone,
                }
            }
            return val;
        })
        data=ed;
        alert("Edit successfully....");
        viewuser();
        
    }else{
        data.push(obj)
        alert("successfully Add user....");
        viewuser();
    }

   
    document.getElementById('name').value='';
    document.getElementById('phone').value='';
}

function deletedata(id){
    let d=data.filter((val)=>{
        return val.userid != id;
    })
    data=d;
    alert("Delete successfully....");
    viewuser();
}

function Editdata(id){
    let edit=data.filter((val)=>{
        return val.userid === id;
    })[0];
    document.getElementById('name').value=edit.name;
    document.getElementById('phone').value=edit.phone;
    document.getElementById('editid').value=id;
}