let proximaSenha = 1;
let fila = [];

function entrarNaFila (nome) {
fila.push({
nome: nome,
senha: proximaSenha
});
proximaSenha++;
console.log("======== NOVO PACIENTE NA FILA ========")
console.log(`${nome} foi adicionado(a) na fila\n`)
}

function chamarProximo(){
if (fila.length > 0){
let chamada = fila.shift();
console.log("======== CHAMADA DE PACIENTE ========")
console.log(`Paciente ${chamada.nome} (senha ${chamada.senha}), favor comparecer ao consultório\n`)
} 
else {
console.log("Não há mais pacientes na fila.")
 }
}

//Casos de teste
entrarNaFila("Ana Souza")
entrarNaFila ("Carlos Lima")
entrarNaFila ("Beatriz Rocha")

chamarProximo()
chamarProximo()

entrarNaFila ("Diego Alves")

chamarProximo()
chamarProximo()
chamarProximo()