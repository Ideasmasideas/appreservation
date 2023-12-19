
import './informacionCarrito.scss';
import React, { useState } from 'react';
import salaA from '../../images/salas/Sala-A.jpg';
import salaB from '../../images/salas/Sala-B.jpg';
import salaC from '../../images/salas/Sala-C.jpg';
import salaD from '../../images/salas/Sala-D.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'
import { es } from 'date-fns/locale';


const salaImages: { [key: number]: string } = {
    1: salaA,
    2: salaB,
    3: salaC,
    4: salaD
}




export const InformacionCarrito = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
        <>


            <div className="container-informacion-carrito">


                <div className="container-salaImage" >
                    <img src={salaD} />
                </div>

                <div className="informacion-reserva">
                    <h3>Sala Suite👑</h3><br />
                    <p>30 Personas</p><br />
                    <p>Karaoke sala, Hospitalet  de LLobregat, Bcn, España. </p>

                </div>


            </div>

            
            <div className="fecha-reserva">
                    
                    <div>
                        <br />
                        <i className="las la-calendar"></i>date <br />
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date: Date | null) => setSelectedDate(date)}
                            id='fechaCarrito'
                            dateFormat="EEEE dd 'de' MMM"
                            locale={es}
                        />
                    </div>

                    <div className='icono-friends'>
                        <i className="las la-user-friends"></i><br /> <p>3 Guest</p>
                    </div>



            </div>
                <div className="detalles-reserva">
                    <p className='primero'>Detalles De Reserva</p><br />

                    <div className="detalles1">
                        <p>Booking Code</p>
                        <p>Date</p>
                        <p>Total</p>
                        <p>Payment Method</p>
                    </div>
                    <div className='detalles2'>
                        <p>@222-333-111</p>
                        <p>
                            <DatePicker
                                id='fechaDetallesReserva'
                                selected={selectedDate}
                                onChange={(date: Date | null) => setSelectedDate(date)}
                                dateFormat="EEEE dd 'de' MMM"
                                locale={es} />
                        </p>
                        <p>€223</p>
                        <p>Tarjeta de credito.</p>
                    </div>
                </div>



        </>
    );
}

export default InformacionCarrito;



