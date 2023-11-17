import CalendarRoom from 'components/CalendarRoom/CalendarRoom';
import React, {FC,useState} from 'react';


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
const PageRoomCalendar: FC<PropsRoomCalendar> = ({ data }) => {
    const [fechaSeleccionada, setFechaSeleccionada] = useState<string>(
      new Date().toLocaleDateString()
    );
    const datosEjemplo: SalaHorario[] = [
        {
          id: 1,
          roomId: 'Sala A',
          slotsHorario: [
            
            {
              startTime: '10:00',
              endTime: '11:00',
              price: '10 €',
            },
            {
              startTime: '11:00',
              endTime: '12:00',
              price: '12 €',
            },
            {
              startTime: '12:00',
              endTime: '13:00',
              price: '12 €',
            },
            {
              startTime: '13:00',
              endTime: '14:00',
              price: '13 €',
            },
            {
              startTime: '14:00',
              endTime: '15:00',
              price: '13 €',
            },
            {
              startTime: '15:00',
              endTime: '16:00',
              price: '13 €',
            },

            {
              startTime: '16:00',
              endTime: '17:00',
              price: '13 €',
            },

          ],
          capacidad: 10,
          ubicacion: 'Ubicación A',
        },
        {
          id: 2,
          roomId: 'Sala B',
          slotsHorario: [
            {
              startTime: '09:00',
              endTime: '10:00',
              price: '12€',
            },
            {
              startTime: '11:00',
              endTime: '12:00',
              price: '13€',
            },
            // Agrega objetos similares para cada franja horaria de Sala B
            {
              startTime: '12:00',
              endTime: '13:00',
              price: '12 €',
            },
            {
              startTime: '14:00',
              endTime: '15:00',
              price: '12 €',
            },
            {
              startTime: '16:00',
              endTime: '17:00',
              price: '13 €',
            },
            {
              startTime: '18:00',
              endTime: '19:00',
              price: '13 €',
            },
            {
              startTime: '20:00',
              endTime: '21:00',
              price: '13 €',
            },

          ],
          capacidad: 8,
          ubicacion: 'Ubicación B',
        },
        {
          id: 3,
          roomId: 'Sala C',
          slotsHorario: [
            {
              startTime: '11:00',
              endTime: '12:00',
              price: '80€',
            },
            {
              startTime: '13:00',
              endTime: '14:00',
              price: '90€',
            },
            // Agrega objetos similares para cada franja horaria de Sala C
            {
              startTime: '14:00',
              endTime: '15:00',
              price: '60 €',
            },
            {
              startTime: '16:00',
              endTime: '17:00',
              price: '75 €',
            },
            {
              startTime: '18:00',
              endTime: '19:00',
              price: '50 €',
            },
            {
              startTime: '20:00',
              endTime: '21:00',
              price: '60 €',
            },

            {
              startTime: '22:00',
              endTime: '23:00',
              price: '60 €',
            },

          ],
          capacidad: 12,
          ubicacion: 'Ubicación C',
        },
        {
          id: 4,
          roomId: 'Sala D',
          slotsHorario: [
            {
              startTime: '11:00',
              endTime: '12:00',
              price: '20€',
            },
            {
              startTime: '14:00',
              endTime: '15:00',
              price: '35€',
            },
            // Agrega objetos similares para cada franja horaria de Sala D
            {
              startTime: '12:00',
              endTime: '13:00',
              price: '25 €',
            },
            {
              startTime: '14:00',
              endTime: '15:00',
              price: '20 €',
            },
            {
              startTime: '16:00',
              endTime: '17:00',
              price: '30 €',
            },
            {
              startTime: '18:00',
              endTime: '19:00',
              price: '15 €',
            },
            {
              startTime: '20:00',
              endTime: '21:00',
              price: '40 €',
            },

          ],
          capacidad: 12,
          ubicacion: 'Ubicación D',
        },
      ];
      





  return (
    <div>
    <CalendarRoom data={datosEjemplo} />
    </div>
  );
};


export default PageRoomCalendar;