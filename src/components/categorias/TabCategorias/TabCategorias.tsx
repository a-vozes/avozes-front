import { useState } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaCategoria from '../listaCategoria/ListaCategoria';
import './TabCategorias.css';

function TabProdutos() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }
return (
  <>
    <TabContext value={value}>
      <AppBar position="static" style={{ background: "#2884A1" }}>
        <Tabs centered indicatorColor="secondary" onChange={handleChange}>
          <Tab label="Conselhos em destaque" value="1" />
          <Tab label="Teste" value="2" className='bold-weight'/>
        </Tabs>
      </AppBar>
      <TabPanel value="1" >
        <Box display="flex" flexWrap="wrap" justifyContent="center" justifyItems="center" alignItems="center">
          <ListaCategoria />
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre Mim</Typography>
        <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
        teste
          </Typography>
      </TabPanel>
    </TabContext>
  </>
);
}
export default TabProdutos;