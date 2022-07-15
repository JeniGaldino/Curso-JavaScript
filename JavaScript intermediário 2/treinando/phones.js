function addNewClass(){
   const classes = document.querySelector("form#classes")
   const newClass = classes.children[0].cloneNode(true)
   newClass.querySelector("label").innerText ="Class: "
   classes.appendChild(newClass)
   console.log(classes.children)
}
function printClass(){
    let message =""
    const classes = document.querySelectorAll("input[name='classe']")
    classes.forEach((classe,index)=>{
        message += "Class: " + (index+1)+ "- " +classe.value + "\n"
    })
    alert(message)
}