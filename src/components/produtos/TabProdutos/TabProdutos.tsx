import { useState } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';

import ListaProdutos from '../listaProdutos/listaProdutos';
import './TabProdutos.css';
import CadastroProd from '../CadastroProd/CadastroProd';

function TabProdutos() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }
return (
  <>
    <TabContext value={value}>
      <AppBar  className='appbar' position="static">
        <Tabs centered onChange={handleChange}>
          <Tab className='labelAppbar' label="Avós" value="1" />
          <Tab className='labelAppbar' label="Cadastro Avós" value="2" />
        </Tabs>
      </AppBar>
      <TabPanel value="1" >
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <ListaProdutos />
        </Box>
      </TabPanel>
      <TabPanel value="2">
          <CadastroProd />
      </TabPanel>
    </TabContext>
  </>
);
}
export default TabProdutos;