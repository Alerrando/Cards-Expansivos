const painels = document.querySelectorAll(".painel")

painels.forEach((painel) => {
    painel.addEventListener("click", () =>{
        removerActivateClasses();
        painel.classList.add("active");
    })
})

function removerActivateClasses(){
    painels.forEach(painel => {
        painel.classList.remove("active");
    })
}