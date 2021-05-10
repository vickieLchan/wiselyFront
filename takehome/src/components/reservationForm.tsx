import 'date-fns';
import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';

export default function ReservationForm() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [partySize, setPartySize] = React.useState('');

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case 'name':
        setName(event.target.value);
        break;
      case 'partySize':
        setPartySize(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = useCallback(() => {
    //TODO make api POST
    console.log(email, name)
  }, [name, email])

  return (
    <form className="formRoot" noValidate autoComplete="off">
      <FormControl >
        <InputLabel >Name</InputLabel>
        <Input id="name" value={name} onChange={handleChange} />
      </FormControl>
      <FormControl >
        <InputLabel >Email</InputLabel>
        <Input id="email" value={email} onChange={handleChange} />
      </FormControl>
      <FormControl >
        <InputLabel >PartySize</InputLabel>
        <Input id="partySize" value={partySize} onChange={handleChange} />
      </FormControl>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around" className="pickerContainer">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            id="date-picker"
            label="Date"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <KeyboardTimePicker
            id="time-picker"
            label="Time"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
}
