let popUPText = (text1 , iconType , timeout = 700) => {
    document.getElementById("AddOrRemove").style.display = "flex"
        document.getElementById("AddOrRemove").innerHTML = `<div id="ItemName">${text1}</div> 
        <div class="icon-${iconType}"></div>`
        document.getElementById("AddOrRemove").classList.add("translateAddOrRemove")
        setTimeout(() => {
            document.getElementById("AddOrRemove").classList.remove("translateAddOrRemove")
            document.getElementById("AddOrRemove").style.display = "none";
        },timeout)
}



let Add_Item = document.getElementById("AddItem")
let Clear_All = document.getElementById("ClearAll")
let Remove = document.getElementById("remove-icon")

Add_Item.addEventListener("click" , () => {

    let Name  = document.getElementById("name");
    let Price = document.getElementById("price");
    let amount = document.getElementById("amount");
    if(Name.value === ""){
        Name.style = "Border-color : crimson";
       
    }
    if(Price.value === ""){
        Price.style = "Border-color : crimson";
    }
    if(Name.value !== "" && Price.value !== ""){
        Name.style = "Border-color : #273033";
        Price.style = "Border-color : #273033";

        document.getElementById("DisplayBar").insertAdjacentHTML("afterbegin" , `<div class="elements">
        <div class="ItemInfo">
            <div class="ItemName">${Name.value}</div>
            <div class="ItemAmount">${Price.value}</div>
        </div>
        <div id="remove-icon" onclick="ref()"><img id="remove" src="remove icon.png" alt=""></div>
    </div>`)
        amount.innerHTML= parseInt(amount.innerHTML) + parseInt(Price.value)
        popUPText(Name.value , "done")
        
        Name.value= ""
        Price.value = "" 
    }
})

Clear_All.addEventListener("click" , () => {
    document.getElementById("DisplayBar").innerHTML = ""
    let amount = document.getElementById("amount");
    amount.innerHTML = '00.00';
    popUPText("Cleared All" , "done")

})


let ref = () => {
    let amount = document.getElementById("amount");
    let target_element = event.target;
    console.log(target_element)
    amount.innerHTML= parseInt(amount.innerHTML) - parseInt(target_element.parentNode.previousElementSibling.children[1].innerHTML)
    target_element.parentNode.parentNode.remove()
    popUPText(target_element.parentNode.previousElementSibling.children[0].innerHTML , "delete" , 500)
}
