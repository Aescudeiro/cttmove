import React, { useState } from 'react';
import "./TabPanel.css"
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs(props) {

  return (
    <Paper square id="paper">
      <Tabs
        value={props.value}
        indicatorColor="secondary"
        textColor="black"
        onChange={props.handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Dados do Usuários"/>
        <Tab label="Métodos de pagamento"/>
        <Tab label="Definições de Conta"/>
      </Tabs>
    </Paper>
  );
}