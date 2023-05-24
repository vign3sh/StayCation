import { Box, Slider, Typography } from '@mui/material';
import React from 'react';
import { useValue } from '../../context/ContextProvider';

const marks = [
  { value: 1, label: '1' },
  { value: 3, label: '3' },
  { value: 5, label: '5' },
];

const RoomSlider = () => {
  const {
    state: { roomFilter },
    dispatch,
  } = useValue();
  return (
    <Box sx={{ mt: 5 }}>
      <Typography>Min Rooms: {roomFilter}</Typography>
      <Slider
        min={1}
        max={5}
        defaultValue={1}
        valueLabelDisplay="auto"
        marks={marks}
        value={roomFilter}
        onChange={(e, room) =>
          dispatch({ type: 'FILTER_ROOM', payload:room  })
        }
      />
    </Box>
  );
};

export default RoomSlider;
