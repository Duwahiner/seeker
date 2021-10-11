export const loadState = () => {
  try {
    const serializedData = window.localStorage.getItem('__state__app__nri')

    if (serializedData === null) {
      // Si no existe el state en el local storage devolvemos undefined para que
      // cargue el state inicial que hayamos definido.
      return undefined
    }

    return JSON.parse(serializedData) // Si encontramos con exito nuestro storage lo devolvemos.
  } catch (error) {
    return undefined // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
  }
}

export const saveState = (state) => {
  try {
    const serializedData = JSON.stringify(state)

    window.localStorage.setItem('__state__app__nri', serializedData)
  } catch (error) {
    // Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.
    console.log(error)
  }
}

// window.localStorage.clear()
