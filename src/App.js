import React ,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Navbar from './components/Navbar';
const items = [
    {
      title: 'what is React ?',
      content :'It is a  front end js framework'
    },
    {
        title: 'why React?',
        content :'It is a favourite js library'
      },
      {
        title: 'How do you use React?',
        content :'By creating components'
      }
];
const options = [
{
 label : 'RED',
 value: 'red'
},
 {
label :'GREEN',
value: 'green'
},
  {
label : 'BLUE',
value: 'blue'
  }
]



function App(){
  const [selected, setSelected] = useState(options[0])
return(
  <>
  <Navbar/>
<Routes>
<Route path = '/' element= {<Accordion items={items}/>}/>
<Route path = 'dropdown' element= {<Dropdown 
options={options} 
label = 'Select a color'
selected={selected}
onSelectedChange={setSelected}
/>}/>
<Route path = 'search' element= {<Search/>}/>
<Route path = 'translate' element= {<Translate/>}/>
 </Routes>
 </>
)};
export default App