let datos=document.querySelector(".datos");
let botons=document.querySelectorAll(".btn");

botons.forEach(boton =>{ // 1
    boton.addEventListener("click",() =>{
       let boton2 = boton.textContent;
       if (boton.id === "clear") {
        datos.textContent="0";
        return;
        }
       
       if(boton.id === "clearLast"){
        if(datos.textContent.length === 1 || datos.textContent ==="Error") {
            datos.textContent="0";
        } else{
        datos.textContent=datos.textContent.slice(0,-1);
        }
        return;
       }

       if (boton.id === "igual") {
        try{
            datos.textContent=eval(datos.textContent);
        } catch {
            datos.textContent="Error";
        }
        
        return;
       }

       if(datos.textContent==="0" || datos.textContent === "Error") {
        datos.textContent = boton2;
       } else {
       datos.textContent += boton2;
       }
    })
})