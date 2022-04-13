import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DateNavigator,
  Toolbar,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useState } from "react";

const appointments = [
  {
    title: "Consultation booked by Kyle",
    name: "Kyle",
    startDate: "2022-04-13T10:00",
    endDate: "2022-04-13T12:00"
  },
  {
    title: "Alpaca brushing session booked by Jack",
    startDate: "2022-04-13T13:30",
    endDate: "2022-04-13T15:00"
  },
  {
    title: "Training session booked by Dom",
    startDate: "2022-04-15T11:00",
    endDate: "2022-04-15T13:00",
  },
];

const Calendar = () => {
  const [data, useData] = useState(appointments);
  return (
    <Paper>
      <Scheduler data={data} height={660}>
        <ViewState
          defaultCurrentDate="2022-04-12"
          defaultCurrentViewName="Week"
        />

        <DayView startDayHour={9} endDayHour={18} />
        <WeekView startDayHour={9} endDayHour={18} excludedDays={[0, 6]}/>
        <MonthView />

        <Toolbar />
        <ViewSwitcher />
        <Appointments />
        <AppointmentTooltip
            showCloseButton
            showOpenButton
          />
        <DateNavigator />
        {/* <AppointmentForm
          readOnly
        /> */}
      </Scheduler>
    </Paper>
  );
};

export default Calendar;
