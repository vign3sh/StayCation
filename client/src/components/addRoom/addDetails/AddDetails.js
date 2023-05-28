import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useValue } from '../../../context/ContextProvider';
import InfoField from './InfoField';
import { MuiTelInput } from 'mui-tel-input'

const AddDetails = () => {
  const {
    state: {
      details: { title, description, price, no_rooms, contact_info },
    },
    dispatch,
  } = useValue();
  const [costType, setCostType] = useState(price ? 1 : 0);
  const handleCostTypeChange = (e) => {
    const costType = Number(e.target.value);
    setCostType(costType);
    if (costType === 0) {
      dispatch({ type: 'UPDATE_DETAILS', payload: { price: 0 } });
    } else {
      dispatch({ type: 'UPDATE_DETAILS', payload: { price: 15 } });
    }
  };
  const handlePriceChange = (e) => {
    dispatch({ type: 'UPDATE_DETAILS', payload: { price: e.target.value } });
  };
  const handleNoRoomChange = (e) => {
    dispatch({ type: 'UPDATE_DETAILS', payload: { no_rooms: e.target.value } });
  };
  const handleContactInfoChange = (contact_info) => {
    dispatch({ type: 'UPDATE_DETAILS', payload: { contact_info: contact_info } });
    console.log(contact_info)
  };
  return (
    <Stack
      sx={{
        alignItems: 'center',
        '& .MuiTextField-root': { width: '100%', maxWidth: 500, m: 1 },
      }}
    >
      <FormControl>
        <RadioGroup
          name="costType"
          value={costType}
          row
          onChange={handleCostTypeChange}
        >
          <FormControlLabel value={0} control={<Radio />} label="Free Stay" />
          <FormControlLabel value={1} control={<Radio />} label="Nominal Fee" />
          {Boolean(costType) && (
            <TextField
              sx={{ width: '7ch !important' }}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              inputProps={{ type: 'number', min: 1, max: 50 }}
              value={price}
              onChange={handlePriceChange}
              name="price"
            />
          )}
        </RadioGroup>
      </FormControl>
      <InfoField
        mainProps={{ name: 'title', label: 'Title', value: title }}
        minLength={5}
      />
      <InfoField
        mainProps={{
          name: 'description',
          label: 'Description',
          value: description,
        }}
        minLength={10}
        optionalProps={{ multiline: true, rows: 4 }}
      />
      <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
      <TextField
              sx={{ width: '8.5ch !important' }}              
              inputProps={{ type: 'number', min: 1, max: 5, style: { textAlign: 'center' }}}
              name="no_rooms"
              label="Rooms"
              variant="standard"
              value={no_rooms}
              onChange={handleNoRoomChange}
      />
      <MuiTelInput required sx={{ width: '25ch !important' }} label="Phone" value={contact_info} onChange={handleContactInfoChange} />
    </Stack>

    </Stack>
  );
};

export default AddDetails;
