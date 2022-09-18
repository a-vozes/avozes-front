import { useState } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaCategoria from '../listaCategoria/ListaCategoria';
import './TabCategorias.css';
import CadastroCategoria from '../cadastroCategoria/CadastroCategoria';

function TabProdutos() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }
return (
  <>
    <TabContext value={value}>
      <AppBar className='appbar' position="relative" >
        <Tabs centered onChange={handleChange}>
          <Tab className='labelAppbar' label="Conexões em destaque" value="1" />
          <Tab className='labelAppbar' label="Criar tipo de conexão" value="2" />
        </Tabs>
      </AppBar>
      <TabPanel value="1" >
        <Box display="flex" flexWrap="wrap" justifyContent="center" justifyItems="center" alignItems="center">
          <ListaCategoria />
        </Box>
      </TabPanel>
      <TabPanel value="2" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <CadastroCategoria />
          </Box>
        </TabPanel>
    </TabContext>
  </>
);
}
export default TabProdutos;