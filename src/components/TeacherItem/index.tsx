import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/67006002?s=460&u=9a2ccd94aa661b28bc8cb1a2e6da0217f30b7dad&v=4" alt="Renato Santos"/>
                <div>
                    <strong>Renato Santos</strong>
                    <span>React e React-native</span>
                </div>
            </header>

            <p>
                Entusiasta de novas tecnologias
                <br/><br/>
                Cada dia um novo aprendizado sobre novas tecnologias e assim sempre evoluindo para tornar o mundo melhor. Então sempre codando e aprendendo!!!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$200,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;