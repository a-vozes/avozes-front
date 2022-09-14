import { useState } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';

import ListaProdutos from '../listaProdutos/listaProdutos';
import './TabProdutos.css';

function TabProdutos() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }
return (
  <>
    <TabContext value={value}>
      <AppBar position="static" style={{ background: "#74849C" }}>
        <Tabs centered indicatorColor="secondary" onChange={handleChange}>
          <Tab label="Todas as postagens" value="1" className='bold-weight'/>
          <Tab label="Teste" value="2" className='bold-weight'/>
        </Tabs>
      </AppBar>
      <TabPanel value="1" >
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <ListaProdutos />
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