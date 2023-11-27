import CalendarRoom from 'components/CalendarRoom/CalendarRoom';
import { response } from 'express';
import React, {FC,useEffect,useState} from 'react';



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

const PageRoomCalendar: FC<PropsRoomCalendar> = () => {
    const [datosSala, setDatosSala] = useState<SalaHorario[]>([]);

    //Uso de fetch para solicitar los datos a la api y luego parsearlo
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://appreservationback.vercel.app/rooms'); 
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
          }
  
          const data = await response.json();

        // Procesar los datos para que coincidan con la estructura de SalaHorario
        const formattedData: SalaHorario[] = data.map((sala: any) => ({
          id: sala.id,
          roomId: sala.sala,
          slotsHorario: sala.slots_tiempo.map((slot: any) => ({
            date: slot.date,
            startTime: slot.start,
            endTime: slot.end,
            price: slot.price.toString(),
          })),
          capacidad: 0, 

          ubicacion: '', 
        }));
        setDatosSala(formattedData);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, []);

      

  return (
    <div>
      <CalendarRoom data={datosSala} />
    </div>
  );
};


export default PageRoomCalendar;