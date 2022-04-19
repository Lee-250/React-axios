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
  TodayButton,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "../calendar.css"

const apiUrl = "https://skillsforcare-api.herokuapp.com";

const mapAppointmentData = (appointment) => ({
  id: appointment.id,
  startDate: moment(appointment.date),
  endDate: moment(appointment.date).add(1, "hour"),
  title: `${appointment.type} booked by ${appointment.name}`,
  type: appointment.type,
  name: appointment.name,
  email: appointment.email,
});


const CustomAppointment = ({ children, style, ...restProps }) => {
  const appointment_type = restProps?.data?.["type"];
  const appointment_style_class_name = ["Appointment", appointment_type].join('-')

  return (
    <Appointments.Appointment
      {...restProps}
      className={appointment_style_class_name}
    >
      {children}
    </Appointments.Appointment>
  );
};

const Calendar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/appointment`)
      .then((response_from_api) => {
        const data_for_calendar = response_from_api.data.map((data) =>
          mapAppointmentData(data)
        );
        setData(data_for_calendar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Paper id="Appointments-view">
      <Scheduler data={data} height={660}>
        <ViewState
          defaultCurrentDate={Date.now()}
          defaultCurrentViewName="Month"
        />

        <DayView startDayHour={9} endDayHour={18} />
        <WeekView startDayHour={9} endDayHour={18} excludedDays={[0, 6]} />
        <MonthView />

        <Toolbar />
        <TodayButton />
        <ViewSwitcher />
        <Appointments appointmentComponent={CustomAppointment} />
        <AppointmentTooltip showCloseButton />
        <DateNavigator />
      </Scheduler>
    </Paper>
  );
};

export default Calendar;
