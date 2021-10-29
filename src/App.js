import { useState } from 'react'

const App = () => {
  //utilizamos useState para guardar los valores que modifica e introduce el usuario
  //al tener que guardar varios valores inicializamos el useState con un objeto con los atributos que corresponden al name de los elementos html
  const [value, setValue] = useState({
      normal: 'por defecto',
      texto: 'introduce un texto',
      select: '',
      check: false, 
      estado: 'feliz' 
  })
  const handleChange = ({ target }) => {//no recibe el evento (e), sino su propiedad mediante un destructuring
    setValue({ 
      ...value,
      //interceptamos cuando el input sea de tipo checkbox y en vez de asignar value, vamos a asignar checked
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    })
  }
  console.log(value)
  //se pueden hacer validaciones con ese value
  return(
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}
      <input type="text" name="normal" value ={value.normal} onChange={handleChange} />
      <textarea name="texto" onChange={handleChange} value={value.texto} />
    
      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">-- Seleccione --</option>
        <option value="chanchofeliz">Chancho feliz</option>
        <option value="chanchitofeliz">Chanchito feliz</option>
        <option value="chanchotriste">Chanchito triste</option>
        <option value="felipe">Felipe</option>
      </select>

      <input 
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Chancho</label>
        <input onChange={handleChange} type="radio" value="feliz" name="estado" checked={value.estado === 'feliz'}/> Feliz
        <input onChange={handleChange} type="radio" value="triste" name="estado" checked={value.estado === 'triste'}/> Triste
        <input onChange={handleChange} type="radio" value="felipe" name="estado" checked={value.estado === 'felipe'}/> Felipe
      </div>
    
    </div>
  )
}

export default App