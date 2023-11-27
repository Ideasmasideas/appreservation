import React, { FC, useState } from 'react';
import moment from 'moment';
import './CalendarRoom.scss';
import salaA from '../../images/salas/Sala-A.jpg';
import salaB from '../../images/salas/Sala-B.jpg';
import salaC from '../../images/salas/Sala-C.jpg';
import salaD from '../../images/salas/Sala-D.jpg';

export interface SalaHorario {
  id: number;
  roomId: string;
  slotsHorario: {
    date?: string;
    startTime: string;
    endTime: string;
    price: string;
  }[];
  capacidad: number; // Nuevo campo agregado
  ubicacion: string; // Nuevo campo agregado
}
export interface PropsRoomCalendar {
  data: SalaHorario[];
}

const CalendarRoom: FC<PropsRoomCalendar> = ({ data }) => {

  const [fechaActual, setFechaActual] = useState<Date>(new Date());
  const [fechaSeleccionada, setFechaSeleccionada] = useState<string>(
    moment().format('YYYY-MM-DD')
  );


  const handleFechaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFechaSeleccionada(e.target.value);
    // Lógica para actualizar los datos de acuerdo a la fecha seleccionada
  };

  const handlePrevDay = () => {
    const prevDay = new Date(fechaActual.getTime() - 24 * 60 * 60 * 1000);
    setFechaActual(prevDay);
    const prevDayFormatted = moment(prevDay).format('YYYY-MM-DD');
    setFechaSeleccionada(prevDayFormatted);
    // Lógica para actualizar los datos de acuerdo a la fecha seleccionada
  };

  const handleNextDay = () => {
    const nextDay = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000);
    setFechaActual(nextDay);
    const nextDayFormatted = moment(nextDay).format('YYYY-MM-DD');
    setFechaSeleccionada(nextDayFormatted);
    // Lógica para actualizar los datos de acuerdo a la fecha seleccionada
  };

  const salaImages: { [key: number]: string } = {
    1: salaA,
    2: salaB,
    3: salaC,
    4: salaD
  }

  return (

    
    
    <div>
      <div className='inputDate' >
        <button onClick={handlePrevDay}>{'<'}</button>
        <input
          type="date"
          id="fechaSelector"
          value={fechaSeleccionada}
          onChange={handleFechaChange}
        />
        <button onClick={handleNextDay}>{'>'}</button>
      </div>

      <div className="sala-horario-container">
        {data.map((sala) => (
          <div key={sala.id} className="sala-item">
            <div className="horarios-disponibles">
              <div className="salaImage">

                <h3>{sala.roomId}</h3>
                {/*<p className='sala-capacidad'>{sala.capacidad}</p>*/}
                <p className='sala-ubicacion'>{sala.ubicacion}</p>
                <img src={salaImages[sala.id]} alt={`Sala ${sala.roomId}`} />

              </div>
              {sala.slotsHorario.map((horario, index) => (
                <div key={index} className="horario-slot">
                  {horario.startTime} - {horario.endTime}
                  <br />
                  {horario.price}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarRoom;