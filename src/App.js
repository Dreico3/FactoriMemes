import React from 'react';
// primero tienes q instalar el html2camvas y luego importalo
import html2canvas from 'html2canvas';
import './App.css';
import './styles/letras.css'
function App() {
  const [inputs,setInputs]=React.useState(
    {
      linea1:'',
      linea2:'',
      image:'fire',
    }
  )
  const Leer = (e) =>{
    setInputs({...inputs,[e.target.name]:e.target.value})
  }
     
  
  return (
    <div className='App'>
      <select onChange={Leer} name='image'>
        <option value='fire'>fuego</option>
        <option value='futurama'>Futurama</option>
        <option value='history'>history</option>
        <option value='matrix'>Matrix</option>
        <option value='philosoraptor'>Dinosaurio</option>
        <option value='smart'>negro pensando</option>
      </select> 
      <br/>
      <input 
        type='text' 
        placeholder='linea 1'
        onChange={Leer}
        value={inputs.liena1}
        name='linea1'
      /><br/>
      <input 
        type='text' 
        placeholder='linea 2'
        onChange={Leer}
        value={inputs.liena2}
        name='linea2'
      /><br/>
      <button onClick={e=>{
        html2canvas(document.querySelector("#imagen")).then(canvas => {
          //convertimos en este caso el div en una imagen
          var img = canvas.toDataURL('image/png');
          //luego creamos un link 
          var zelda = document.createElement("a");
          zelda.download = 'nombreDememe.png';
          zelda.href=img;
          setInputs({...inputs,linea1:'',linea2:''});
          zelda.click();
        });
      }}>exportar</button>
      <div id='imagen' className='imagen'>
        <img src={`./images/${inputs.image}.jpg`} width='700' />
        <span className='uno'>{inputs.linea1}</span><br/>
        <span className='dos'>{inputs.linea2}</span><br/>
      
      </div>
    </div>
  );
}

export default App;
