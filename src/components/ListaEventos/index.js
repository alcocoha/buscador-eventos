import React from 'react';
import { EventosConsumer } from '../../context/Eventos';
import Evento from '../Evento';


const ListaEventos = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                {
                    value => {
                        console.log('value---', value.state.eventos)
                        return value.state.eventos.map(evento => <Evento key={evento.id} evento={evento}/>);
                    }
                }
            </EventosConsumer>
        </div>
    )
}

export default ListaEventos
