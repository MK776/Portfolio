import {useState, useEffect} from 'react'

const Context = React.createContext()

const ContextProvider = ({children}) => {
  const [allWorks, setAllWorks] = useState([])
  return(
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}