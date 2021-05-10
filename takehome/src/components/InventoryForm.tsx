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
import InputLabel from '@material-ui/core/InputLabel';
import { Button, Checkbox, MenuItem, Select } from '@material-ui/core';

export default function InventoryForm() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );
  const [restaurant, setRestaurant] = React.useState<string>('');
  const [isDefault, setIsDefault] = React.useState<boolean>(false);
  const [availability, setAvailability] = React.useState<number[]>(new Array(96).fill(0));

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.id)
    switch (event.target.id) {
      case 'isDefault':
        setIsDefault(!isDefault);
        break;
      case 'restaurant':
        setRestaurant(event.target.value);
        break;
      case 'availability':
        setAvailability([]);
        break;
      default:
        break;
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRestaurant(event.target.value as string);
  };

  const handleSubmit = useCallback(() => {
    //TODO make api POST
    console.log(restaurant, isDefault, availability)
  }, [restaurant, isDefault, availability])

  return (
    <form className="formRoot" noValidate autoComplete="off">
      <FormControl>
        <Checkbox
          id="isDefault"
          checked={isDefault}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel id="restaurant-label">Choose restaurant</InputLabel>
        <Select
          id="restaurant"
          value={restaurant}
          onChange={handleSelectChange}
        >
          {
            /* 
            TODO make api GET to get all restaurants
            */
          }
          <MenuItem value={'60994b4f01ae1e594095c6ef'}>KFC</MenuItem>
          <MenuItem value={'60994b4f01ae1e594095c6f0'}>McD</MenuItem>
          <MenuItem value={'60994b4f01ae1e594095c6f1'}>In N' Out</MenuItem>
        </Select>
      </FormControl>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
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
