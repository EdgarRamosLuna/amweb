import React, { useState, useEffect } from 'react';
import { Button } from '../styles/Content';
import { FromS } from '../styles/Form';
import { Title } from '../styles/HomeStyle';

export default function Form(){
    return(
        <FromS>
            <Title>
                <div className="clients-title">
                    <h1>Cotiza Tu Evento</h1>
                </div>
            </Title>
            <div className="form-cont">
                <div className="form">
                    <form>
                        <div className="form-input">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="" name="" value="" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="nombre">Correo Eletronico</label>
                            <input type="" name="" value="" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="nombre">Tipo de evento</label>
                            <select>
                                <option value="0">Seleeciona un evento</option>
                                <option value="0">Seleeciona un evento</option>
                                <option value="0">Seleeciona un evento</option>
                            </select>
                        </div>
                        <div className="form-input">
                            <label htmlFor="nombre">Comentarios</label>
                            <textarea rows="" cols=""></textarea>
                        </div>
                        <div className="form-input-btn">
                            <Button>Cotizar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </FromS>
    )
}