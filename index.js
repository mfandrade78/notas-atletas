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
        this.atletas.forEach(atleta => {
            let notasOrdenadas = [...atleta.notas].sort((a, b) => a - b);
            console.log(`Atleta ${atleta.nome}`);
            console.log(`Notas Obtidas: ${notasOrdenadas}`);
        });
    }

    mediaValida(){
        //método da média que chama a somaDasNotas() e então a divide pelo número de atletas
        //remove maior e menor nota, calcula média das 3 restantes
        this.atletas.forEach(atleta => {
            let notasOrdenadas = [...atleta.notas].sort((a, b) => a - b);
            let notasValidas = notasOrdenadas.slice(1, -1); //remove a primeira e a última
            let media = notasValidas.reduce((total, nota) => total + nota, 0) / notasValidas.length;
            console.log(`Média Válida: ${media.toFixed(2)}`);
        });
    }
}

let jernsVoleiAreia = new Atleta(atletas);
jernsVoleiAreia.notasObtidas();
jernsVoleiAreia.mediaValida();