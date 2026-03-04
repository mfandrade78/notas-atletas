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
        let objAtletas = this.atletas;
        for (let i = 0; i < objAtletas.length; i++){
            let notasComputadas = [...objAtletas[i].notas].sort((a, b) => a - b);
            console.log(`Atleta: ${objAtletas[i].nome}`);
            console.log(`Notas Obtidas: ${notasComputadas.join(",")}`);
        }
    }

    mediaValida(){
        //método da média que chama as notasComputadas em notasObtidas() e então a divide pelo número de notas válidas
        //remove maior e menor nota
        this.atletas.forEach(atleta => {
            let media = notasObtidas.reduce((total, nota) => total + nota, 0) / notasObtidas.length;
            //reduce para somar o total com a nota, depois ele divide pelo número de notas válidas
            console.log(`Média Válida: ${media}`);
        });
    }

    infoCompleta(){
        let objAtletas = this.atletas;
        for(let i = 0; i < objAtletas.length; i++){
            console.log(`\nAtleta: ${objAtletas[i].nome}`);
            console.log(`Notas Obtidas: ${notasObtidas.join(",")}`);
            console.log(`Média Válida: ${media}`);
        }
    }
}

let jernsVoleiAreia = new Atleta(atletas);
jernsVoleiAreia.infoCompleta();