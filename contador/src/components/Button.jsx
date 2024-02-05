import  { useState, useEffect } from 'react'

// props = {
//   children: 'Click Me'
//   nombre: 'Boton 1'
//   apellido: 'Oriti'
// }
// props.children





const Button = ({ children, ...props }) => {
  const [contador, setContador] = useState(0)

  // console.log(props)
  // const array1 = [1, 2, 3, 4, 5];
  // const [ x, y, ...rest ] = array1;
  // console.log(array1)
  // console.log({x, y, rest})

  // let variable1 = ''
  // const setVariable1 = (value) => {
  //   variable1 = value
  // }
  // setVariable1('chau')



  const handleOnClick = () => {
    // console.log(contador++)
    // contador = contador + 1
    props.handleClick()
    setContador(contador + 1)
  }


  useEffect(() => {
    console.log('Componente Actualizado', contador)
  }, [contador])

  useEffect(() => {
    console.log('Componente Montado')

    return () => {
      console.log('Componente desmontado')
    }
  }, [])

  return (
    <button onClick={handleOnClick}>
      {children}
      ||
      {contador}
    </button>
  )
}

export default Button