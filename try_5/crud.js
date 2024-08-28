
    let up=[
    {
        userid:256,
        name:"Monik",
        phone:"8378268",
    },
    {
        userid:937,
        name:"jatin",
        phone:"8997927",
    },
    ];

    function viewuser(){
        let tbl='';
        up.map((val)=>{
            return (
                tbl +=
                `
                <tr>
                    <td>${val.userid}</td>
                    <td>${val.name}</td>
                    <td>${val.phone}</td>
                    <td><button onclick="deletedata(${val.userid})">Delete</button>
                    ||
                    <button onclick="edituser(${val.userid})">Edit</button></td>
                </tr>
                `
            )
        })
        document.getElementById('record').innerHTML=tbl;
    }
    viewuser();


    function adduser(){
        let fname=document.getElementById('name').value;
        let fphone=document.getElementById('Phone').value;
        let id = document.getElementById('editid').value;

        let obj ={
            userid:Math.floor(Math.random()*10000),
            name:fname,
            phone:fphone,
        }

        if(!fname || !fphone){
            alert("plese enter detils...");
            return false;
        }
    

        if(id){
            let ed = up.map((val)=>{
                if(val.userid == id){
                    return{
                        ...val,
                        name:fname,
                        phone:fphone,
                    }
                }
                return val;
            })
            up=ed;
            alert("edit succesfully....")
            viewuser();
        }else{
            up.push(obj)
            alert("add succesfully Add...");
            viewuser();
        }
        document.getElementById('name').value='';
        document.getElementById('Phone').value='';
    }

    function deletedata(id){
        let a=up.filter((val)=>{
            return val.userid != id
        })
        up=a;
        alert("delete succesfully...");
        viewuser();
    }


    function edituser(id){
        let edit=up.filter((val)=>{
            return val.userid === id;
        })[0];
        document.getElementById('name').value   = edit.name;
        document.getElementById('Phone').value  = edit.phone;
        document.getElementById('editid').value = id;
    }
