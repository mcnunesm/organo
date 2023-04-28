import './Rodape.css'

const Rodape = () => {
    return (
        <section className='footer'>
            <div className='redes'>
                <a href='#'><img src='/imagens/fb.png' alt='Facebook'></img></a>
                <a href='#'><img src='/imagens/tw.png' alt='Twitter'></img></a>
                <a href='#'><img src='/imagens/ig.png' alt='Instagram'></img></a>
            </div>
            <div className='logo'>
            <img src='/imagens/logo.png' alt='Logo Organo'></img>
            </div>
            <div>
                <p>Desenvolvido por Maria Clara</p>
            </div>
        </section>
    )
}

export default Rodape