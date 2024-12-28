import { baseUrl } from "./baseUrl.js";
getData();
let form =document.getElementById("admin-form");
form.addEventListener("submit",function(){
event.preventDefault();
let title= form.title.value;
let author=form.author.value;
let status=form.status.value;
let verify=form.verify.value;
let days=form.days.value;
let image=form.image.value;
let category=form.category.value;
let fiction= form.fiction.value;
let comedy=form.comedy.value;
let technical=form.technical.value;
let formObj={title,author,status,verify,days,image,fiction,comedy,technical,isAvailable: true,
  isVerified: false,
  borrowedDays: null,
  imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg",category
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
    .then((formObj)=>{
        console.log(formObj);
    }).catch((err)=>{
        console.log(err);
    });
}



