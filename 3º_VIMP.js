let proximaSenha = 1;

let fila = [];

function entrarNaFila(nome) {
    let paciente = {
        nome: nome,
        senha: proximaSenha
    };

    fila.push(paciente);

    console.log(`${nome} entrou na fila. Senha: ${proximaSenha}`);

    proximaSenha++;
}

function chamarProximo() {
    if (fila.length === 0) {
        console.log("Não há pacientes na fila.");
        return;
    }

    let paciente = fila.shift();

    console.log(`Chamando ${paciente.nome} - Senha: ${paciente.senha}`);
}

// Casos de teste

entrarNaFila("Ana Souza");
entrarNaFila("Carlos Lima");
entrarNaFila("Beatriz Rocha");

chamarProximo();
chamarProximo();

entrarNaFila("Diego Alves");

chamarProximo();
chamarProximo();
chamarProximo();