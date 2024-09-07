import { useReducer } from 'react'
import './App.css'
import Board from './Components/Board/Board'
import { AppProvider } from './context/Context'
import { reducer } from './reducer/reduer'
import { initGame } from './Constant'
function App() {
  const [appState,dispatch]=useReducer(reducer,initGame)
  const provideState = {
    appState,
    dispatch
  }
  return (
    <AppProvider value={provideState}>
      <div className='App'>
        <Board />
      </div>
    </AppProvider>

  )
}

export default App
