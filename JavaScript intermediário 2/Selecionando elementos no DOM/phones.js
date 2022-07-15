function addNewPhone(){
   const phone = document.querySelector("form#phones")
   const newPhone = phone.children[0].cloneNode(true)
   const phonePosition = phone.children.length +1
   newPhone.querySelector("label").innerText ="Telefone" +phonePosition+": "
   phone.appendChild(newPhone)
   console.log(phone.children)
}
function printPhones(){
    let message =""
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone,index)=>{
        message += "Telefone " + (index+1) + ": " +phone.value + "\n"
    })
    alert(message)
}