import React, { Component } from 'react';
import axios from 'axios';
import { token, urlAPI } from '../constants';

// Creamos el context
const CategoriasContext = React.createContext();

// Creamos el consumer
export const CategoriasConsumer = CategoriasContext.Consumer;

class Categorias extends Component {

    state = { 
        categorias: []
    };

    handlerGetCategories = async() => {
        const url = `${urlAPI}categories/`;
        const categorias = await axios.get( url, { params: { token, locale : 'es_ES' }});
        this.setState({ categorias : categorias.data.categories });
    }

    componentDidMount(){
        this.handlerGetCategories();
    }

    render() {
        console.log('this.state', this.state)
        return (
            <CategoriasContext.Provider
                value={ this.state }
            >
                { this.props.children }
            </CategoriasContext.Provider>
        );
    }
}

export default Categorias;