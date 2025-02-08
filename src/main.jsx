import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import {default as Greeting, Hi} from './Greeting.jsx'
// import Food from './Food.jsx' //allows default, considers Food default and F as a named export
import {V,F, default as Food} from './Food.jsx'
import {default as Animals, List} from './Animals.jsx';
// import {Hi} from './Greeting.jsx' //allows this as a "named export"
import App from './App.jsx'
import Button from './Button.jsx'
import Time from './Time.jsx'
import Class from './Class.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <V />
    <F />
    <Food />
    <Animals />
    <Button />
    <Time />
    <Person /> 
    <Class />









  </StrictMode>,
)
