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
