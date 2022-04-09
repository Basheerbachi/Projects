
function addpop(){
    document.getElementById("popup").style.display = "block"

    document.getElementById("no-item").style.display = "none"

    document.getElementById("blur").style.filter="blur(6px)"

}





const task=[]

function addtask(){

    document.getElementById("popup").style.display = "none"


    const name = document.getElementById("popup_input").value 
    console.log(name)

    const tempObj={
        taskname : name
    }

    task.push(tempObj)
    console.log(task)


addtaskonscreen()
}

function addtaskonscreen(){

    const element = document.createElement("div")
    element.setAttribute("class", "child")
    
    element.innerText = task[task.length-1].taskname

    
    

    const parent = document.getElementById("parent")
    parent.appendChild(element)

    document.getElementById("blur").style.filter="blur(0px)"

}


