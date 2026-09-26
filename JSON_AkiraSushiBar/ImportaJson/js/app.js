let comidas = [];

const listaComida = document.getElementById("listaComida");
const status = document.getElementById("status");
const btnBuscar = document.getElementById("btnBuscar");

async function carregarPratos(){
    try{
        status.textContent = "Carregar pratos...";
        const resposta = await fetch('comidas.json');

        //Verifica se houve erro
        if(!resposta.ok){
            throw new Error(
                "Não foi possível carregar o JSON.");
        }

    //Converte a resposta para JSON
    comidas = await resposta.json();
} catch (erro) {
    status.textContent = `Erro: ${erro.message}`;
    }
}

function mostrarComidas(lista){
    listaComida.innerHTML="";
    lista.forEach((comidas) => {
        const card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML=
        `
        <h2>${comidas.nome}</h2>
        <p><strong>Unidade: </strong> ${comidas.unidade}</p>
        <p><strong>Custo: </strong> ${comidas.custo}</p>
        <p><strong>Ingredientes: </strong> ${comidas.ingredientes}</p>
        `;
        listaComida.appendChild(card);
    });
}

btnBuscar.addEventListener("click", () => {
    status.textContent=`${comidas.length} comidas carregadas.`;
    mostrarComidas(comidas);
});

carregarPratos()