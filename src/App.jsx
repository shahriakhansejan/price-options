
import './App.css'
import BarCharts from './BarCharts/BarCharts'
import Daisynav from './Daisynav/Daisynav'
import LineChartData from './LineChartData/LineChartData'
import Nav from './Navbar/Nav'
import Price from './PriceOptions/Price'

function App() {

return (
    <div className='container mx-auto'>

    <Nav></Nav>

      <h1 className='text-4xl font-bold text-center bg-purple-400 p-3 my-5'>Vite + React</h1>

      <Daisynav></Daisynav>
        <Price></Price>
        <LineChartData></LineChartData>
        <BarCharts></BarCharts>
        

    </div>
  )
}

export default App
