let ordersNew = document.getElementById("orders-new")
let ordersPacked = document.getElementById("orders-packed")
let ordersTransit = document.getElementById("orders-transit")
let ordersDelivered = document.getElementById("orders-delivered")
let countPara = document.getElementById("countpara")

let homeTable = document.getElementById("homepage-table")
let dis = document.getElementById("display1")
let orderDetails = []
let totalCount = 0


$(document).ready(function(){
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",function(data){
        console.log(data)
        
        for(let i=0;i<data.length;i++){
            // if(ordersNew.checked == true && data[i].orderStatus == "New"){
                console.log("hi")
                let newOrders = 
                    `
                        <tr class="table-row" id="display1">
                            <td class="homepage-secondary"> ${data[i].id} </td>
                            <td class="homepage-primary"> ${data[i].customerName} </td>
                            <td class="homepage-primary"> ${data[i].orderDate}</br>
                                <span class="homepage-secondary"> ${data[i].orderTime}</span>
                            </td>
                            <td class="homepage-secondary">${data[i].amount} </td>
                            <td class="homepage-primary">${data[i].orderStatus} </td>
                        </tr>
                    `
                homeTable.innerHTML += newOrders
            // } 
            
            
        }
        for(let i=0;i<data.length;i++){
            if(data[i].orderStatus == "New"){
                document.getElementsByClassName("table-row")[i].classList.add("new-order")
            }
            else if(data[i].orderStatus == "Packed"){
                document.getElementsByClassName("table-row")[i].classList.add("packed-order")
            }
            else if(data[i].orderStatus == "InTransit"){
                document.getElementsByClassName("table-row")[i].classList.add("transit-order")
            }
            else if(data[i].orderStatus == "Delivered"){
                document.getElementsByClassName("table-row")[i].classList.add("delivered-order")
            }
        }

        document.getElementsByClassName("filter-checkbox")[0].addEventListener('click',function(){
            if(ordersNew.checked == false){
                for(let i=0;i<data.length;i++){
                    document.getElementsByClassName("new-order")[i].classList.add("new-order1")
                    
                }
            }
            if(ordersNew.checked == true){
                for(let i=0;i<data.length;i++){
                    document.getElementsByClassName("new-order")[i].classList.remove("new-order1")
                }
            }


        })

        document.getElementsByClassName("filter-checkbox")[1].addEventListener('click',function(){
            if(ordersPacked.checked == false){
                for(let i=0;i<data.length;i++){
                    document.getElementsByClassName("packed-order")[i].classList.add("packed-order1")
             
                }
            }
            if(ordersPacked.checked == true){
                for(let i=0;i<data.length;i++){
                    document.getElementsByClassName("packed-order")[i].classList.remove("packed-order1")
                }
            }
        })

        document.getElementsByClassName("filter-checkbox")[2].addEventListener('click',function(){
            if(ordersTransit.checked == false){
                for(let i=0;i<data.length;i++){
                    document.getElementsByClassName("transit-order")[i].classList.add("transit-order1")
             
                }
            }
            if(ordersTransit.checked == true){
                for(let i=0;i<data.length;i++){
                    document.getElementsByClassName("transit-order")[i].classList.remove("transit-order1")
                }
            }
        })

        document.getElementsByClassName("filter-checkbox")[3].addEventListener('click',function(){
            if(ordersDelivered.checked == false){
                for(let i=0;i<data.length;i++){
                    document.getElementsByClassName("delivered-order")[i].classList.add("delivered-order1")
             
                }
            }
            if(ordersDelivered.checked == true){
                for(let i=0;i<data.length;i++){
                    document.getElementsByClassName("delivered-order")[i].classList.remove("delivered-order1")
                }
            }
        })

        console.log(document.getElementsByClassName("table-row"))

        document.getElementsByClassName("filter-checkbox")[0].addEventListener('click',function(){
            let totalCount = countCheck()
            console.log(totalCount)
            countPara.innerHTML=totalCount
            
            
        })
        document.getElementsByClassName("filter-checkbox")[1].addEventListener('click',function(){
            let totalCount = countCheck()
            console.log(totalCount)
            countPara.innerHTML=totalCount

            
        })
        document.getElementsByClassName("filter-checkbox")[2].addEventListener('click',function(){
            let totalCount = countCheck()
            console.log(totalCount)
            countPara.innerHTML=totalCount
            
        })
        document.getElementsByClassName("filter-checkbox")[3].addEventListener('click',function(){
            let totalCount = countCheck()
            console.log(totalCount)
            countPara.innerHTML=totalCount
            
        })
        
    })
})


function countCheck(){
    totalCount=0
    if(ordersNew.checked==true){
        totalCount+=3
    }
    if(ordersPacked.checked==true){
        totalCount+=2
    }
    if(ordersTransit.checked==true){
        totalCount+=3
    }
    if(ordersDelivered.checked==true){
        totalCount+=3
    }
    return totalCount
}