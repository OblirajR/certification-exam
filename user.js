let userdetails = []
let userTable = document.getElementById("parts")


$(document).ready(function(){
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",function(user){
    console.log(user)
    
    for(let i=0;i<user.length;i++){
        let details = 
            `<div class="userslist">
                <tr class="table-row" id="display1">
                    <td class="homepage-secondary"> ${user[i].id} </td>
                    <td class="homepage-primary"> 
                        <img src="${user[i].profilePic}" alt="Profile pic"/>
                    </td>
                    <td class="homepage-primary productName" id="pname"><h4> ${user[i].fullName} </h4></td>
                    <td class="homepage-secondary"> ${user[i].dob} </td>
                    <td class="homepage-secondary">${user[i].gender} </td>
                    <td class="homepage-secondary">${user[i].currentCity},${user[i].currentCountry}</td>
                </tr>
            </div>
            `
        userTable.innerHTML += details
        
    }


    })

})


const search = () =>{
    let searchbox = document.getElementById("searchbox").value.toUpperCase();
    let tableuser = document.getElementById("user-table")
    let tr = tableuser.getElementsByTagName("tr")

    console.log("hello")

    for(var i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[2]
        console.log(td)
        if(td){
            
            let textvalue = td.textContent || td.innerHTML
            console.log(textvalue)
            console.log(textvalue.toUpperCase().indexOf(searchbox))
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                tr[i].style.display = ""
                console.log("hello1")

            }else{
                tr[i].style.display = "none"
                console.log("hello2")
            }
        }
    }

    // let searchbox = document.getElementById("searchbox").value.toUppercase()    
    

}

let reset = document.getElementById("reset")
let tableuser = document.getElementById("user-table")
let tr = tableuser.getElementsByTagName("tr")

reset.onclick = function(){
    for(var i=0;i<tr.length;i++){
        console.log("hiee")
       
        tr[i].style.display = ""
    }
}