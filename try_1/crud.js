let data = [
    {
        userid:212,
        name:"Abhay",
        phone:"7584638",
    },
    {
        userid:647,
        name:"kishan",
        phone:"9374972",
    },
];

function viewuser(){
    let tbl ="" ;
    data.map((val)=>{
        return(
            tbl +=
            `   
            <tr>
            <td>${val.userid}</td>
            <td>${val.name}</td>
            <td>${val.phone}</td>
            <td>
                <button onclick="deleatData(${val.userid})">Delete</button>
            </td>
        </tr>
            `
    )
    })
    document.getElementById('record').innerHTML=tbl;

}

viewuser();

function adduser(){
    let formname=document.getElementById('name').value;
    let formphone=document.getElementById('phone').value;

    let obj = {
        userid : Math.floor(Math.random()*1000),
        name : formname,
        phone : formphone
    }
    data.push(obj);
    alert("sucessfully add....")
    document.getElementById('name').value='';
    document.getElementById('phone').value='';
    viewuser();
}

function deleatData(id){
    let d=data.filter((val)=>{
        return val.userid != id
    })
    data=d;
    alert("user delete sucssfully done....");
    viewuser();
}


