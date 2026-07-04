const imagen = document.querySelector("#imagen");

imagen.addEventListener("click", function(){

    if(imagen.classList.contains("borde")){
        imagen.classList.remove("borde");
    }else{
        imagen.classList.add("borde");
    }

});