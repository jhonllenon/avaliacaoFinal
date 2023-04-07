/*
1° = Crie uma Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
*/

class Aluno {
  constructor(nome, quantidadeDefaltas, notas) {
    this.nome = nome;
    this.quantidadeDefaltas = quantidadeDefaltas;
    this.notas = notas;
  }

  // 2° = Na Classe Aluno crie o método calcularMedia que retorna a média de suas notas.

  calcularMedia() {
    let soma = 0;
    for (const nota of this.notas) {
      soma += nota;
    }
    return soma / this.notas.length;
  }

  // 2° Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

  faltas() {
    this.quantidadeDefaltas++;
  }
} // 2° Crie alguns alunos para testar a sua Classe.

const aluno1 = new Aluno("joao", 0, [7, 8, 9]);
//console.table(aluno1);
const aluno2 = new Aluno("pedro", 0, [6, 7, 8]);
//console.table(aluno2);
const aluno3 = new Aluno("neto", 0, [10, 6, 7]);
//console.table(aluno3);

/* 3° & 4° crie o objeto literal curso que tem como atributos: nome do curso (string), nota de
aprovação (number), faltas máximas (number) e uma lista de estudantes (um array
composto pelos alunos criados no passo 2).*/

/* 4° Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
propriedade lista de estudantes do objeto curso. */

/*const curso = {
  nomeCurso:'',
  notaAprovacao: 0,
  faltasMax: 0,
  listaEstudantes:[aluno1, aluno2, aluno3],
  // adicionar aluno passo 4
  adicionarAluno(nome, quantidadeDefaltas, notas) {
    const adAluno = new Aluno(nome, quantidadeDefaltas, notas);
    this.listaEstudantes.push(adAluno);
    }
};*/
//console.table(curso.listaEstudantes)

/* 5° Crie um método para o objeto curso que receba um aluno (como parâmetro) e
retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de
aprovação.*/

const curso = {
  nomeCurso: "dh",
  notaAprovacao: 7,
  faltasMax: 10,
  listaEstudantes: [aluno1, aluno2, aluno3],
  adicionarAluno(nome, quantidadeDefaltas, notas) {
    const adAluno = new Aluno(nome, quantidadeDefaltas, notas);
    this.listaEstudantes.push(adAluno);
  },

  consultarAluno(alunoAserConsultado) {
    for (const aluno of this.listaEstudantes) {
      if (aluno.nome === alunoAserConsultado) {
        return aluno;
      }
      return null;
    }
    if (
      calcularMedia() >= this.notaAprovacao &&
      Aluno.quantidadeDefaltas < this.faltasMax
    ) {
      return true;
    } else if (
      Aluno.quantidadeDefaltas == this.faltasMax &&
      this.notaAprovacao * 0.1 > this.notaAprovacao
    ) {
      return true;
    } else {
      return false;
    }
  },
  /*
      6° Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
      array de booleanos com os resultados se os alunos aprovaram ou não
     */

  aprovadoReprovado() {
    let aprovadoReprovado = [];
    for (const list of this.listaEstudantes) {
      aprovadoReprovado += list;
    }
    return aprovadoReprovado;
  },
};

curso.adicionarAluno("maria", 0, [6.5, 7.2, 8.3]);
//console.table(curso.listaEstudantes);
const buscarAluno = curso.consultarAluno("maria");
//console.table(buscarAluno)
