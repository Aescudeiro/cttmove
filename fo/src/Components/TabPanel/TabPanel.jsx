import React, {useState} from 'react';
import "./TabPanel.css"
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square id="paper">
      <Tabs
        value={value}
        indicatorColor="secondary"
        textColor="black"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Dados do Usuários" />
        <Tab label="Métodos de pagamento" />
        <Tab label="Definições de Conta" />
      </Tabs>
    </Paper>
  );
}