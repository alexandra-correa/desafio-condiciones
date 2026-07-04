const boton = document.querySelector("#verificar");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", function(){

    const sticker1 = Number(document.querySelector("#sticker1").value);
    const sticker2 = Number(document.querySelector("#sticker2").value);
    const sticker3 = Number(document.querySelector("#sticker3").value);

    const total = sticker1 + sticker2 + sticker3;

    if(total <= 10){
        resultado.innerHTML = `Llevas ${total} stickers`;
    }else{
        resultado.innerHTML = "Llevas demasiados stickers";
    }

});