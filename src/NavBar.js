import { IoPaperPlaneOutline, IoCompassOutline, IoHeartOutline, IoPersonOutline, IoLogoInstagram } from 'react-icons/io5';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    {/* <ion-icon name="logo-instagram"></ion-icon> */}
                    <IoLogoInstagram className='icons'/>
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" alt="logo"/>
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="icones">
                    {/* <IonIcon icon={ addIcons.paperPlaneOutiline } /> */}
                    <IoPaperPlaneOutline className='icons'/>
                    <IoCompassOutline className='icons'/>
                    <IoHeartOutline className='icons'/>
                    <IoPersonOutline className='icons'/>
                    {/* <IonIcon icon={'compass-outline'} />
                    <IonIcon icon={'compass-outline'} />
                    <IonIcon icon={'heart-outline'} />
                    <IonIcon icon={'person-outline'} /> */}

                    {/* 
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>  */}
                </div>

                <div className="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}