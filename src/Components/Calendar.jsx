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
  Toolbar,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useState } from "react";

const appointments = [
  {
    title: "Consultation session",
    name: "Kyle",
    startDate: "2022-04-13T10:00",
    endDate: "2022-04-13T14:00"
  },
  {
    title: "Alpaca brushing session",
    startDate: "2022-04-13T11:30",
    endDate: "2022-04-13T15:00"
  },
  {
    title: "Training session",
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
        <WeekView startDayHour={9} endDayHour={18} />
        <MonthView />

        <Toolbar />
        <ViewSwitcher />
        <Appointments />
        <AppointmentTooltip
            showCloseButton
            showOpenButton
          />
        {/* <AppointmentForm
          readOnly
        /> */}
      </Scheduler>
    </Paper>
  );
};

export default Calendar;
