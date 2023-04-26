import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'



const Formulario = (props) => {

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
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder='Digite seu nome' 
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}>
                </CampoTexto>
                <CampoTexto 
                    label="Cargo" 
                    placeholder='Digite seu cargo' 
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}>
                </CampoTexto>
                <CampoTexto 
                    label="Imagem" 
                    placeholder='Digite o nedereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}>
                </CampoTexto>
                <ListaSuspensa 
                    label="Time" itens={times} 
                    obrigatorio={true}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}>
                </ListaSuspensa>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario