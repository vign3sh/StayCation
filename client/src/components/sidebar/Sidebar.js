import { Box, Drawer, IconButton, styled, Typography, Button } from '@mui/material';
import { ChevronLeft, Room } from '@mui/icons-material';
import PriceSlider from './PriceSlider';
import RoomSlider from './RoomSlider';
import { useValue } from '../../context/ContextProvider';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { containerRef, dispatch } = useValue();
  return (
    <Drawer variant="persistent" hideBackdrop={true} open={isOpen}>
      <DrawerHeader>
        <Typography>Apply Search or Filter:</Typography>
        <IconButton onClick={() => setIsOpen(false)}>
          <ChevronLeft fontSize="large" />
        </IconButton>
      </DrawerHeader>
      <Box sx={{ width: 240, p: 3 }}>
        <Box ref={containerRef}></Box>
        <PriceSlider />
        <RoomSlider />
        <Box sx={{ mt: 5 }}>
        <Button variant="contained" onClick={() => dispatch({ type: 'CLEAR_ADDRESS' })}>
          Clear Filters
        </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
