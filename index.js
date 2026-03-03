let atletas = [
    //array dos atletas que contém seus nomes e notas
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

class Atleta{
    //classe Atleta
    constructor(atletas){
        //construtor da classe Atleta
        this.atletas = atletas;
    }

    notasObtidas(){
        //método para as notas obtidas
        let notas = notas.sort();
        //ordenamento das matrizes de notas
        for(let i = 0; i < this.atletas.length; i++){
            //laço de repetição para exibir o nome do atleta e suas notas
            console.log(`Atleta: ${this.atletas[i].nome} - Notas Obtidas: ${this.atletas[i].notas}`);
            //concatenação do nome do atleta e suas notas obtidas
        }
    }

    somaDasNotas(){
        //método para somar as notas e depois ser chamado no método de média
        let soma = 0;
        for(let i = 0; i < this.atletas.length; i++){
            let notas = this.atletas[i].notas;
            this.notas.forEach(function(nota){
                soma += nota;
            })
            console.log(soma);
        }
    }

    mediaValida(){
        //método da média que chama a somaDasNotas() e então a divide pelo número de atletas
        let soma = this.somaDasNotas();
        let media = soma / this.atletas.length;
        for(let i = 0; i < this.atletas.length; i++){
            console.log(`Média Válida: ${media}`);
        }
    }
}