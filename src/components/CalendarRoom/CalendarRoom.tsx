import React, { FC, useState } from 'react';
import moment from 'moment';
import "./NavBarCalendarRoom/NavBarCalendarRoom";
import { es } from 'date-fns/locale';
import './CalendarRoom.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'
import salaA from '../../images/salas/Sala-A.jpg';
import salaB from '../../images/salas/Sala-B.jpg';
import salaC from '../../images/salas/Sala-C.jpg';
import salaD from '../../images/salas/Sala-D.jpg';
import MenuBar from 'shared/MenuBar/MenuBar';
import NavBarCalendarRoom from './NavBarCalendarRoom/NavBarCalendarRoom';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>

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
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date>(new Date());
  const [mostrarMenuBar, setMostrarMenuBar] = useState(false);


  const [fechaActual, setFechaActual] = useState<Date>(new Date());

  const handleFechaChange = (date: Date) => {
    setFechaSeleccionada(date);
    // Lógica para actualizar los datos de acuerdo a la fecha seleccionada
  };
  
  
  const handlePrevDay = () => {
    const prevDay = new Date(fechaActual.getTime() - 24 * 60 * 60 * 1000);
    setFechaActual(prevDay);
    const prevDayFormatted = moment(prevDay).format('YYYY-MM-DD');
    setFechaSeleccionada(prevDay);
    // Lógica para actualizar los datos de acuerdo a la fecha seleccionada
  };
  



  const handleNextDay = () => {
    const nextDay = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000);
    setFechaActual(nextDay);
    const nextDayFormatted = moment(nextDay).format('YYYY-MM-DD');
    setFechaSeleccionada(nextDay);
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
      <div className="filtros">
      <i className="las la-sliders-h"></i>
        <a href="">Filtro</a>
      </div>
      <div className='inputDate' >
        <button onClick={handlePrevDay}>{'<'}</button>  
        <DatePicker
          id='fechaSelector'
          selected={fechaSeleccionada}
          onChange={handleFechaChange}
          dateFormat="EEEE dd 'de' MMM"
          locale={es}
          
        />
        
        <i className="las la-calendar-minus"></i>
        <button onClick={handleNextDay}>{'>'}</button>
        

      </div>

      <div className="NavCalendarRoom">
        <NavBarCalendarRoom />
        
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
                    
                    <p>{horario.price} €/ Pers.</p>
                  
                  
                  <MenuBar className='reservar' showIcon={false}/>
                  {/*<button className="reservar">Reservar Sala</button>*/}
                  
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