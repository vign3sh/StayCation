import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useValue } from '../context/ContextProvider';
import LoadingScreen from '../loading/LoadingScreen'

const Loading = () => {
  const {
    state: { loading, initialLoading },
  } = useValue();
  return (
    <>
    
    { initialLoading == true ? (
    <>
    <Backdrop  open={loading} sx={{ background:'#fff', zIndex: (theme) => theme.zIndex.modal + 1}}><LoadingScreen/> </Backdrop></>) : (
    <><Backdrop open={loading} sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}><CircularProgress sx={{ color: 'white' }} /></Backdrop> </>)
}

  </>);
};

export default Loading;
