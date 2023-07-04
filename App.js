import { Provider } from 'react-redux'
import React, { useEffect } from 'react'
import Main from './Screens/React-Redux/Main'
import { mystore } from './Screens/React-Redux/MyStore'


const App = () => {

  return (
    <>
      <Provider store={mystore}>
        <Main />
      </Provider>
    </>
  )
}

export default App
