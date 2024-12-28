import { baseUrl } from "./baseUrl.js";

let form =document.getElementById("admin-form");
form.addEventListener("submit",function(){
event.preventDefault();
let title= form.title.value;
let author=form.author.value;
let status=form.status.value;
let verify=form.verify.value;
let days=form.days.value;
let category=form.category.value;
let fiction= form.fiction.value;
let comedy=form.comedy.value;
let technical=form.technical.value;
let formObj={title,author,status,verify,days,image,fiction,comedy,technical,isAvailable: true,
  isVerified: false,
  borrowedDays: null,category
};
//POST request to the JSON server with the entered data
fetch(`${baseUrl}/books`,{
method:"POST",
headers:{
    "content-type":"application/json"
},
body:JSON.stringify(formObj)
}).then(()=>{
    alert("Book Added Successfully")

}).catch((err)=>{
    alert("error on adding book",err)
})
});
function getData(){
    fetch(`${baseUrl}/books`)
    .then((response)=>response.json)
    .then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}
getData();
 function displayData(){
    

 }


