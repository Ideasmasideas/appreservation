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
              startTime: '12:00',
              endTime: '13:00',
              price: '13€',
            },
            // Agrega objetos similares para cada franja horaria de Sala B
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
              startTime: '14:00',
              endTime: '15:00',
              price: '90€',
            },
            // Agrega objetos similares para cada franja horaria de Sala C
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