import { useRef } from 'react'

/*
METODO 2 PARA CREAR FORMULARIOS CON UNCONTROLLED COMPONENTS
*/

 const UncontrolledComponentsMethod2 = () => {
  const input = useRef() //hay que crear una por cada input
  const file = useRef()
  const submit = () => {
    console.log(input.current.value)
    console.log(file.current.files[0])
    const form = new FormData()
    form.append("archivo", file.current.files[0])
    form.append("campo", input.current.value)
    //send it to an endPoint
    fetch('/typeYourEndPoint', { method: 'POST', body: form })
    }

    return (
    <div>
        <div>
            <span>Lala</span>
            <input type="text" name="campo" ref={input} />
            <input type="file" ref={file} />      
        </div>
        <input type="submit" value="Enviar" onClick={submit}/>
        </div>
    )
}



export default  UncontrolledComponentsMethod2;
