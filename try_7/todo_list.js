let list=[
    {
        userid:123,
        name:"vikash",
        phone:"785362573",
    },
    {
        userid:124,
        name:"firoj",
        phone:"908266725",
    },
];

const viewuser = () =>{
    tbl="";
    list.map((val)=>{
        return(
            tbl += `
                    <tr>
                        <td>${val.userid}</td>
                        <td>${val.name}</td>
                        <td>${val.phone}</td>
                        <td>
                        
                        <button onclick="deletedata(${val.userid})">Delete</button>
                        ||
                        <button onclick="editdata(${val.userid})">Edit</button>
                        </td>
                    </tr>
            `
        )
    })
    document.getElementById('record').innerHTML=tbl;
}

viewuser();

const adduser = () =>{
    let fname=document.getElementById('name').value;
    let fphone=document.getElementById('phone').value;
    let id=document.getElementById('editid').value;

    if(!fname || ! fphone){
        alert("enter details...");
        return false;
    }

    let obj = {
        userid:Math.floor(Math.random()*10000),
        name:fname,
        phone:fphone,
    }

    if(id){
        let ed=list.map((val)=>{
            if(val.userid == id){
               val.name=fname;
               val.phone=fphone;
            }
            return val;
        })
        alert("Edit successfully..");
        document.getElementById('editid').value="";
        viewuser();
    }
    else{
    list.push(obj);
    alert("add user successfully....");
    viewuser();
    }

    document.getElementById('name').value='';
    document.getElementById('phone').value=''; 
}

const deletedata = (id) => {
    let d=list.filter((val)=>{
        return val.userid != id;
    })
    list=d;
    alert("delete successfully...");
    viewuser();
}

const editdata = (id) =>{
    let edit=list.find((val)=>{
        return val.userid === id;
    });
    document.getElementById('name').value=edit.name;
    document.getElementById('phone').value=edit.phone;
    document.getElementById('editid').value=id;

}