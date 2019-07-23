import React, { Component } from 'react';
import axios from 'axios';

// Creamos el context

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class Categorias extends Component {

    token = '7LVXNVTWWBKXAPYBJBS7';

    state = { 
        categorias: []
    };

    handlerGetCategories = async() => {

        const url = `https://www.eventbriteapi.com/v3/categories/`;

        const categorias = await axios.get( url, { params: {token : this.token, locale : 'es_ES' }});

        console.log('categorias', categorias)
    }

    componentDidMount(){
        this.handlerGetCategories();
    }

    render() {
        return (
            <CategoriasContext.Provider
                value={{ categorias : this.state.categorias}}
            >
                { this.props.children }
            </CategoriasContext.Provider>
        );
    }
}

export default Categorias;