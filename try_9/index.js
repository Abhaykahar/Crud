let record = [];

const viewuser = () =>{
    document.getElementById('edit').style.display='none';
    document.getElementById('add').style.display='block';
    let all=JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
    
    let tbl="";
    all.map((val)=>{
        return (
            tbl += `
                <tr>
                    <td>${val.userid}</td>
                    <td>${val.name}</td>
                    <td>${val.phone}</td>
                    <td>
                        <button onclick="deleteuser(${val.userid})">Delete</button>
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

const adduser = () => {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    if (!name || !phone) {
        alert("fill all details..");
        return false;
    }

    let obj = {
        userid: Math.floor(Math.random() * 10000),
        name: name,
        phone: phone,
    }
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
        record.push(obj);
        localStorage.setItem('user', JSON.stringify(record));
    }
    else{
        let old=JSON.parse(localStorage.getItem('user'));
        old.push(obj);
        localStorage.setItem('user',JSON.stringify(old));
    }

    alert("user add sucessfully...");
    document.getElementById('name').value="";
    document.getElementById('phone').value="";
    viewuser();
}

const deleteuser = (id) =>{
    let alldata=JSON.parse(localStorage.getItem('user'));
    let deleteuser=alldata.filter((val)=> val.userid != id);
    localStorage.setItem('user',JSON.stringify(deleteuser));
    alert("delete user sucessfully...");
    viewuser();
}

const edituser = (id) =>{
    document.getElementById('add').style.display='none';
    document.getElementById('edit').style.display='block';
    let all=JSON.parse(localStorage.getItem('user'));
    let edit=all.find((val)=>{
        return val.userid == id;
    })
    document.getElementById('name').value=edit.name
    document.getElementById('phone').value=edit.phone
    document.getElementById('editid').value=id
}

const updateuser = ()=>{
    let name=document.getElementById('name').value;
    let phone=document.getElementById('phone').value;
    let id=document.getElementById('editid').value;
    let alldata=JSON.parse(localStorage.getItem('user'));

    alldata.map((val)=>{
        if(val.userid == id){
            val.name=name
            val.phone=phone
        }
    })
    localStorage.setItem('user',JSON.stringify(alldata));
    alert("update sucessfully...");
    document.getElementById('name').value="";
    document.getElementById('phone').value="";
    document.getElementById('editid').value="";
    viewuser();   
}