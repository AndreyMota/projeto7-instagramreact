import Post from "./Post"

export default function Posts() {
    const lst = ["assets/img/dog.svg", "assets/img/gato-telefone.svg", "assets/img/gato-telefone.svg"];
    return (
        <div className="posts">
            {lst.map(x => <Post imgurl={x} />)}
        </div>
    );
}