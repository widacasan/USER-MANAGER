import {useState} from 'react'

const useFormulario = (inicial) => {
    const [formulario, setFormulario] = useState (inicial)
  const handelChange = (e) =>{
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const reset = () => {
    setFormulario(inicial)
  }
return [formulario, handelChange, reset]
}
export default useFormulario