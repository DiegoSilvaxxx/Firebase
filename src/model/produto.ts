export class Produto {

    id : string;
    nomeProduto: string;
    preco: number;
    categoria: string;
    descricao: string;

    constructor(){
        
    }

    //dados do firebase
    setDados(abj : any) {
        this.nomeProduto = abj.nomeProduto;
        this.preco = abj.preco;
        this.categoria = abj.categoria;
        this.descricao = abj.descricao;

    }

}
