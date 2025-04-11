import axios from 'axios';
import GlobalApi from './GlobalApi';

const getAppointmentsByName = (doctorName) => {
    const response = await GlobalApi.getAppointmentsByName(doctorName);
    return response.data;
}

export default getAppointmentsByName;

