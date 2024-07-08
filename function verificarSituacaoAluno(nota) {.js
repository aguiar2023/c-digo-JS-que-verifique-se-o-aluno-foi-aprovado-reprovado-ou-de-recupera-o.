function verificarSituacaoAluno(nota) {
  if (isNaN(nota) || nota < 0) {
    return "Nota inválida. Por favor, insira uma nota entre 0 e 10.";
  } else if (nota >= 10) {
    return "Parabéns! Você foi aprovado com nota 10! ";
  } else if (nota >= 7) {
    return "Parabéns! Você foi aprovado com nota " + nota + ".";
  } else if (nota >= 4) {
    return "Você está em recuperação com nota " + nota + ". Estude mais para melhorar!";
  } else {
    return "Você foi reprovado com nota " + nota + ". Infelizmente, você não atingiu a nota mínima para aprovação.";
  }
}

// Exemplo de uso
const notaAluno = 8.5;
const resultado = verificarSituacaoAluno(notaAluno);
console.log(resultado); // Resultado: "Parabéns! Você foi aprovado com nota 8.5."
