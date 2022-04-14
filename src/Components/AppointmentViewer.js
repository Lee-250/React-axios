
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import datePicker from './DatePicker';

const AppointmentViewer = () => {

    const currentDate = '2022-04-12';
    const appointments = [
      { title: 'Training', startDate: '2022-04-12T10:00' },
      { title: 'Apprenticeship', startDate: '2022-04-12T10:30', endDate: '2022-04-12T11:30' },
      { title: 'Consultation', startDate: '2022-04-12T12:35' },
    ];
    return (
        <div>
            <datePicker/>
            <Paper>
                <Scheduler
                data={appointments}
                >
                <ViewState
                    currentDate={currentDate}
                />
                <DayView
                    startDayHour={9.5}
                    endDayHour={13.5}
                />
                <Appointments />
                </Scheduler>
            </Paper>

        </div>
    );
};

export default AppointmentViewer;