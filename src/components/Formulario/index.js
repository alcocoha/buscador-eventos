import React, { Component } from 'react';
import { CategoriasConsumer } from '../../context/Categorias';

class Formulario extends Component {
    state = {
        nombre : '',
        categoria : '',
    }

    handlerSelectOptions = values => {
        return values.map(value => 
            <option key={value.id} value={value.id} data-uk-form-select>{value.name_localized}</option>
        );
    }

    render() {
        return (
            <form>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por Nombre o Categoría
                    </legend>
                </fieldset>
                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                        <input
                            name="nombre"
                            className="uk-input"
                            type="text"
                            placeholder="Nombre de evento o ciudad"
                        />
                    </div>
                    <div className="uk-margin" uk-margin="true">
                        <select
                            className="uk-select"
                            name="categoria"
                        >
                            <CategoriasConsumer>
                                {
                                    value => this.handlerSelectOptions(value.categorias)
                                }
                            </CategoriasConsumer>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            className="uk-button uk-button-danger"
                            value="Buscar Evento"
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Formulario;