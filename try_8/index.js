let data = [
    {
        userid:1,
        name:"krish",
        phone:"7463653",
    },
    {
        userid:2,
        name:"gurav",
        phone:"9894766",
    },
];

const viewuser = () =>{
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
                <button onclick="edituser(${val.userid})">Edit</button>

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

    let obj = {
        userid:Math.floor(Math.random()*1000),
        name:fname,
        phone:fphone,
    }

    if(!fname || !fphone ){
        alert("valid details");
        return false;
    }

    if(id){
        let ed=data.map((val)=>{
            if(val.userid == id){
                val.name=fname;
                val.phone=fphone
            }
            return val;
        })
        alert("edit sucessfully...");
        document.getElementById('editid').value="";
        viewuser();

    }
    else{
        data.push(obj);
        alert("add user sucessfully...");
        viewuser();
    }

 

    document.getElementById('name').value="";
    document.getElementById('phone').value="";
}

const deletedata = (id) => {
    let d=data.filter((val)=>{
        return val.userid != id
    })
    data=d;
    alert("delete sucessfully ...");
    viewuser();
}

const edituser = (id) =>{
    let edit=data.find((val)=>{
        return val.userid === id;
    })
    document.getElementById('name').value=edit.name;
    document.getElementById('phone').value=edit.phone;
    document.getElementById('editid').value=id;
}

