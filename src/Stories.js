import Story from "./Story";

export default function Stories() {
    const lst = [
        {imgurl: 'assets/img/9gag.svg',
        nome: '9gag'},
        {imgurl: 'assets/img/meowed.svg',
        nome: 'meowed'},
        {imgurl: 'assets/img/barked.svg',
        nome: 'barked'}
    ];
    const componentes = lst.map(obj => <Story nome={obj.nome} imgurl={obj.imgurl}/>);
    

    return (
        <div className="stories">
            <Story nome="9gag" imgurl="assets/img/9gag.svg" />
            {componentes}
        </div>
    );
}