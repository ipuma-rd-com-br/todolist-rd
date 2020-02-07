const KEY_CODE_ENTER = 13;
const EVENT_TYPE_CLICK = "click";

let btnAddTarefa = document.getElementById("adicionar-tarefa");
let inputTarefaDigitada = document.getElementById("tarefa-digitada");
let tarefas = document.getElementById("tarefas");

const salvarLocalStorage = tarefas => {
    let tarefasEmJson = JSON.stringify(tarefas)
    localStorage.setItem("listaTarefas", tarefasEmJson)
    console.log("Lista de tarefas salva com sucesso!");
}

const mostrarNaTela = arrayTarefas => {
    arrayTarefas.forEach(textoTarefa => {
        let tarefaNova = `<div class="col-md-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${textoTarefa}
            </div>
            <div class="botao-tarefa">
                 <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
            </div>
        </div>
        </div> `

        tarefas.insertAdjacentHTML('beforeend', tarefaNova)
        let objTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild
        btnCheckTarefaNova.onclick = (event) => {

            tarefas.removeChild(event.target.parentNode.parentNode.parentNode)
            listaTarefas = listaTarefas.filter(valor => valor != textoTarefa )

            salvarLocalStorage(listaTarefas)

        }
    })
}

mostrarNaTela(listaTarefas)

const criarTarefa = (event)=>{
    if (event.keyCode == KEY_CODE_ENTER || event.type == EVENT_TYPE_CLICK) {
        let tarefaDigitada = inputTarefaDigitada.value;
        inputTarefaDigitada.value = "";
        if (tarefaDigitada != "") {
            let tarefaNova = 
               `<div class="col-lg-4">
                    <div class="card-tarefa">
                        <div class="texto-tarefa">
                            ${tarefaDigitada}
                        </div>
                        <div class="botao-tarefa">
                            <img src="img/check.png" class="pointer" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
                        </div>
                    </div>
                </div>`;
            // tarefas.innerHTML += tarefaNova;
            tarefas.insertAdjacentHTML('beforeend', tarefaNova);
            let objTarefaNova = tarefas.lastElementChild;
            let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild;
            btnCheckTarefaNova.onclick = (event)=>{
                event.target.parentNode.parentNode.parentNode.remove();
            }
        } else {
            alert("Digite a tarefa antes de adicionar.");
        }
    }
};

// criar tarefa do vinicius
const criarTarefaComEnter = (event) => {
    if (event.keyCode == 13 || event.type == "click") {
        let valorDigitado = inputTarefa.value
        if (valorDigitado == "") {
            alert("Você deve digitar uma tarefa primeiro!");
            return
        }
        listaTarefas.push(valorDigitado);
        salvarLocalStorage(listaTarefas)
        inputTarefa.value = ""
        let tarefaNova = `<div class="col-md-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${valorDigitado}
            </div>
            <div class="botao-tarefa">
                 <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
            </div>
        </div>
        </div> `
        tarefas.insertAdjacentHTML('beforeend', tarefaNova)
        let objTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild
        btnCheckTarefaNova.onclick = (event) => {
            tarefas.removeChild(event.target.parentNode.parentNode.parentNode)
            listaTarefas = listaTarefas.filter(valor => valor != valorDigitado )
            salvarLocalStorage(listaTarefas)
        }
    }
}


// evento para adicionar tarefa
btnAddTarefa.addEventListener("click", criarTarefa);

// evento para adicionar tarefa com ENTER no input
inputTarefaDigitada.addEventListener("keypress", criarTarefa);