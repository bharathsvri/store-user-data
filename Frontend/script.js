const name = document.getElementById("name");
const age = document.getElementById("age");
const fatherName = document.getElementById("fatherName");
const motherName = document.getElementById("motherName");
const mobile = document.getElementById("mobile");
const mailId = document.getElementById("mailId");
const password = document.getElementById("password");

const userdata = async()=>{
    const res = await fetch("http://localhost:3000/user");
    const user = await res.json();
    const data = user.data;
}
// userdata();

const addUserData = async() =>{
    console.log(name.value,age.value,fatherName.value,motherName.value,mobile.value,mailId.value,password.value);
    const res = await fetch("http://localhost:3000/user",{
        method:"POST",
        body:JSON.stringify({
            name:name.value,
            age:Number(age.value),
            fatherName:fatherName.value,
            motherName:motherName.value,
            mobile:Number(mobile.value),
            mailId:mailId.value,
            password:password.value
        }),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    }).then(res=>res.json()).then(json=> console.log(json)
    )
}

const submit = ()=>{
    if(name.value !="" && age.value !="" && fatherName.value !="" && motherName.value !="" && mobile.value !="" && mailId.value !="" && password.value !=""){
        addUserData()
    }
    
}