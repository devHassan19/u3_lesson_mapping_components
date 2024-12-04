import './App.css'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import countries from './countries'

const App = () => {
  return (
    <div className="flex-row">
      <SideBar />
      <MainContent countries={countries} />
    </div>
  )
}

export default App
