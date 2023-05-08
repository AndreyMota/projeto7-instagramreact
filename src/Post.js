import React from 'react';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { IoBookmarkOutline } from 'react-icons/io5'

export default function Post(props) {
    function aumenta() {
        setCurt(curt + 1);
        curtiu();
    }
    let [curt, setCurt] = React.useState(64);
    return (
        <div data-test="post" className="post">
            <div className="topo">
              <div className="usuario">
                <img src="assets/img/meowed.svg" alt="meowed"/>
                meowed
              </div>
              <div className="acoes">
                <HiEllipsisHorizontal className="icon-post"/>
              </div>
            </div>

            <div className="conteudo">
              <img onClick={curtiu} data-teste="post-image" src={props.imgurl} alt="gato-telefone"/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <AiOutlineHeart onClick={aumenta} data-test="like-post" className='icon-post kkr' />
                  <AiFillHeart className='heart-fill hidden kkrf'/>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <IoBookmarkOutline data-test="save-post" className="icon-post" />
                </div>
              </div>

              <div className="curtidas">
                <img src="assets/img/respondeai.svg" alt="respondeai"/>
                <div className="texto">
                  Curtido por <strong>respondeai</strong> e <strong>outras {curt} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}

function curtiu(descurtiu, curto) {
    console.log(descurtiu);
    let aparece = true
    let kkrf = document.querySelector('.kkrf');
    console.log(kkrf.classList);
    kkrf.classList.forEach(x => {
        if (x === 'hidden') {
            aparece = false}})

    if (aparece) {
        kkrf.classList.add('hidden')
        //descurtiu(curto -1);
    }
    kkrf.classList.toggle('hidden');

}



