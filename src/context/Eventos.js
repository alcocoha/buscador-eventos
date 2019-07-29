import React, { Component } from 'react';
import axios from 'axios';
import { token, urlAPI } from '../constants';

// Creamos el context
const EventosContext = React.createContext();

// Creamos el consumer
export const EventosConsumer = EventosContext.Consumer;

class Eventos extends Component {

    ordenar = 'date';

    state = { 
        eventos: []
    };

    handlerGetEventos = async busqueda => {
        const url = `${urlAPI}events/search/`;
        const eventos = await axios.get( url, { params: {
            categories : busqueda.categoria,
            locale : 'es_ES',
            q : busqueda.nombre,
            sort_by : this.ordenar,
            token : token, 
        }});
        console.log('eventos', eventos);
        this.setState({ eventos : eventos.data.events });
    }

    render() {
        return (
            <EventosContext.Provider
                value={{
                    state: this.state, 
                    handlerGetEventos : this.handlerGetEventos
                }}
            >
                { this.props.children }
            </EventosContext.Provider>
        );
    }
}

export default Eventos;