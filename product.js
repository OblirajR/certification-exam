
let productTable = document.getElementById("product-table")
let ordersExpired = document.getElementById("orders-expired")
let ordersLowstock = document.getElementById("orders-lowstock")
let productArr=[]
let countSpan = document.getElementById("countspan")

$(document).ready(function(){
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",function(datalist){
    console.log(datalist)
    

    for(let i=0;i<datalist.length;i++){
        productArr.push(datalist[i])
        let productlist = 
            `
                <tr class="table-row" id="display1">
                    <td class="homepage-secondary"> ${datalist[i].id} </td>
                    <td class="homepage-primary">   ${datalist[i].medicineName}     </td>
                    <td class="homepage-secondary"> ${datalist[i].medicineBrand} </td>
                    <td class="homepage-primary" >${datalist[i].expiryDate}</td>
                    <td class="homepage-secondary">${datalist[i].unitPrice} </td>
                    <td class="homepage-secondary">${datalist[i].stock}</td>
                    
                </tr>
            
            `
        productTable.innerHTML += productlist
        
    }

    for(let i=0;i<datalist.length;i++){
        // function test() {
            var q = new Date();
            var date = new Date(q.getFullYear(),q.getMonth(),q.getDate());
            // var mydate = new Date(document.getElementById('dval').value);
            var mydate = new Date(datalist[i].expiryDate)
            // console.log(datalist[i].expiryDate)
            // console.log(mydate)

            

            if(date > mydate){
                document.getElementsByClassName("table-row")[i].classList.add("expired")
                console.log("expired")
            }

            if(datalist[i].stock < 100){
                document.getElementsByClassName("table-row")[i].classList.add("lowstack")
            }
        // }
    }
    document.getElementsByClassName("filter-checkbox")[0].onclick = function(){
        console.log("click")
        if(ordersExpired.checked == false){
            for(let i=0;i<datalist.length;i++){
                document.getElementsByClassName("expired")[i].classList.add("expiredtab")
         
            }
        }
        if(ordersExpired.checked == true){
            for(let i=0;i<datalist.length;i++){
                document.getElementsByClassName("expired")[i].classList.remove("expiredtab")
            }
        }
       
    }
    
    document.getElementsByClassName("filter-checkbox")[1].addEventListener('click',function(){
        console.log("clicked 1")
        if(ordersLowstock.checked==false){
            for(let i=0;i<datalist.length;i++){
                document.getElementsByClassName("lowstack")[i].classList.add("lowstacktab")
                console.log("low")
            }
        }
        if(ordersLowstock.checked==true){
            for(let i=0;i<datalist.length;i++){
                document.getElementsByClassName("lowstack")[i].classList.remove("lowstacktab")
                console.log("low 67")
            }
        }
    })
    document.getElementsByClassName("filter-checkbox")[0].addEventListener('click',function(){
        console.log(countSpan)
        if(ordersExpired.checked==true && ordersLowstock.checked==true){
            countSpan.innerText = 29
        }
        else if(ordersExpired.checked==true){
            countSpan.innerText = 27
        }
        else if(ordersLowstock.checked==true){
            countSpan.innerText = 14
        }
        else{
            countSpan.innerHTML = 12
        }
    })
    document.getElementsByClassName("filter-checkbox")[1].addEventListener('click',function(){
        console.log(countSpan)
        if(ordersExpired.checked==true && ordersLowstock.checked==true){
            countSpan.innerText = 29
        }
        else if(ordersExpired.checked==true){
            countSpan.innerText = 27
        }
        else if(ordersLowstock.checked==true){
            countSpan.innerText = 14
        }
        else{
            countSpan.innerHTML = 12
        }
    })


    })

    
})
console.log(productArr)

