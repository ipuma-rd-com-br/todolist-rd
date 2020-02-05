let btnAddTarefa = document.getElementById("adicionar-tarefa");
let inputTarefaDigitada = document.getElementById("tarefa-digitada");
let tarefas = document.getElementById("tarefas");

btnAddTarefa.onclick = 
    ()=>{
        let tarefaDigitada = inputTarefaDigitada.value;
        let tarefaNova = 
        `<div class="col-lg-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${tarefaDigitada}
            </div>
            <div class="botao-tarefa">
                <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
            </div>
        </div>
        </div>`;
        tarefas.innerHTML += tarefaNova;
    };
