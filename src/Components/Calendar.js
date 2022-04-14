import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentTooltip,
  DateNavigator,
  Toolbar,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";
import {useState, useEffect} from 'react';
import moment from "moment";
import axios from 'axios';

const apiUrl = "https://skillsforcare-api.herokuapp.com"   

// const appointment_data_from_backend = [
//     {
//       id: 1,
//       name: "Alpaca",
//       email: "llama@kyle.com",
//       type: "Consultation",
//       date: "2022-04-11T12:00",
//       created_at: "2022-04-11T10:43:28.488538Z",
//     },
//     {
//       id: 2,
//       name: "2nd Alpaca",
//       email: "llama@kyle.com",
//       type: "Consultation",
//       date: "2022-04-11T14:00",
//       created_at: "2022-04-11T10:51:40.466445Z",
//     },
//     {
//       id: 3,
//       name: "Lee",
//       email: "e.e@e.com",
//       type: "Consultation",
//       date: "2022-04-12T10:00",
//       created_at: "2022-04-11T10:51:57.462887Z",
//     },
//     {
//       id: 4,
//       name: "Test",
//       email: "tedbooton@gmail.com",
//       type: "Apprenticeships",
//       date: "2022-04-14T12:00",
//       created_at: "2022-04-11T11:20:48.462865Z",
//     },
//     {
//       id: 5,
//       name: "Lee",
//       email: "e.e@e.com",
//       type: "Consultation",
//       date: "2022-04-14T15:30",
//       created_at: "2022-04-11T11:20:58.463284Z",
//     },
//     {
//       id: 6,
//       name: "Kyle",
//       email: "kyle@llama.com",
//       type: "Training",
//       date: "2022-04-13T11:00",
//       created_at: "2022-04-13T11:19:11.034973Z",
//     },
// ];

const mapAppointmentData = (appointment) => ({
  id: appointment.id,
  startDate: moment(appointment.date),
  endDate: moment(appointment.date).add(1, "hour"),
  title: `${appointment.type} booked by ${appointment.name}`,
  type: appointment.type,
  name: appointment.name,
  email: appointment.email
});


const appointment_data = [
  {
    title: "Consultation booked by Kyle",
    name: "Kyle",
    type: "Consultation",
    startDate: "2022-04-13T10:00",
    endDate: "2022-04-13T12:00",
  },
  {
    title: "Alpaca brushing session booked by Jack",
    name: "Jack",
    type: "Alpaca brushing",
    startDate: "2022-04-13T13:30",
    endDate: "2022-04-13T15:00",
  },
  {
    title: "Training session booked by Dom",
    name: "Dom",
    type: "Training",
    startDate: "2022-04-15T11:00",
    endDate: "2022-04-15T13:00",
  },
];

const get_custom_style = (appointment_type) => {
  switch (appointment_type) {
    case "Consultation":
      return { backgroundColor: "#EFA107", borderRadius: "8px" };
    case "Training":
      return { backgroundColor: "#07EFA1", borderRadius: "8px" };
    case "Apprenticeship":
      return { backgroundColor: "#EF07A1", borderRadius: "8px" };
    default:
      return { borderRadius: "8px" };
  }
};

const CustomAppointment = ({ children, style, ...restProps }) => {
  const custom_styles = get_custom_style(restProps?.data?.["type"]);

  return (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        ...custom_styles,
      }}
    >
      {children}
    </Appointments.Appointment>
  );
};

const Calendar = () => {
  
  const [data, setData] = useState([]);
  // const [data, useData] = useState(appointment_data_from_backend.map(mapAppointmentData));
  useEffect(() => {
    axios.get(`${apiUrl}/api/appointment`)
    .then(response_from_api => {
      console.log('response here ---->', response_from_api)

  const data_for_calendar = response_from_api.data.map(data => mapAppointmentData(data))
       setData(data_for_calendar)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);  
  
  // console.log(appointment_data_from_backend.map(data => mapAppointmentData(data)), "<---")
  
  return (
    <Paper>
      <Scheduler data={data} height={660}>
        <ViewState
          defaultCurrentDate={Date.now()}
          defaultCurrentViewName="Month"
        />

        <DayView startDayHour={9} endDayHour={18} />
        <WeekView startDayHour={9} endDayHour={18} excludedDays={[0, 6]} />
        <MonthView />

        <Toolbar />
        <ViewSwitcher />
        <Appointments appointmentComponent={CustomAppointment} />
        <AppointmentTooltip showCloseButton showOpenButton />
        <DateNavigator />
        {/* <AppointmentForm
          readOnly
        /> */}
      </Scheduler>
    </Paper>
  );
};

export default Calendar;
