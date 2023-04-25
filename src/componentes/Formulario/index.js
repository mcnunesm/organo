import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('form foi submetido')
}

const Formulario = () => {
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder='Digite seu nome' obrigatorio={true}></CampoTexto>
                <CampoTexto label="Cargo" placeholder='Digite seu cargo' obrigatorio={true}></CampoTexto>
                <CampoTexto label="Imagem" placeholder='Digite o nedereço da imagem'></CampoTexto>
                <ListaSuspensa label="Time" itens={times} obrigatorio={true}></ListaSuspensa>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario