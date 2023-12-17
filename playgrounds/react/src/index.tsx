import React from "react";
import ReactDOM from "react-dom/client";

import { Text, Margin, Select } from '@ds.e/react';

import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Select.css';
import '@ds.e/scss/lib/global.css';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const options = [{ 
  label: 'Strict Black', 
  value: 'strict-black'
}, { 
  label: 'Heavenly Green', 
  value: 'heavenly-green'
}, {
  label: 'Sweet Pink', 
  value: 'pink'
}]

root.render(
  <React.StrictMode>
    <div>
      <Select options={options}/>
    </div>
  </React.StrictMode>
);
