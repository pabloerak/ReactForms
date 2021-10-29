import './App.css';
/*
METODO 1 PARA CREAR FORMULARIOS CON UNCONTROLLED COMPONENTS
Los formularios no controlados deben utilizar REF
Son utiles para input de tipo file y migraciones
*/
function UncontrolledComponentsReactWay() {
  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data))
  }
  //en input tipo file, name es una propiedad obligatoria
  return (
    <form onSubmit={submit}>
      <div>
        <span>
          lala
        </span>
        <input name='campo' />
      </div>
      <input name='campo-2' />
      <input type="file" name="archivo" />
      <input type="submit" value='Enviar' />
    </form>
  );
}



export default UncontrolledComponentsReactWay;