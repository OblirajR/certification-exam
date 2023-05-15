let password = document.getElementsByClassName("password")
console.log(password)
let logoutMenu = document.getElementsByClassName("logout-menu")
let log = document.getElementById("log") 

let user1 = localStorage.getItem("user")
let pass1 = localStorage.getItem("pass")

console.log(user1)
console.log(pass1)

logoutMenu[0].addEventListener('click',function(){
    localStorage.clear()
    console.log("jiii")
})

// localStorage.clear()
if(user1 == pass1 && user1!=null){
    for(let i=0;i<10;i++){
        password[i].classList.remove("password")
    }
}



