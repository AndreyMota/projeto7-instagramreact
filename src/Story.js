export default function Story(props) {
    console.log(props);
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.imgurl} alt={props.nome}/>
            </div>
            <div className="usuario">
                {props.nome}
            </div>
        </div>
    );
}