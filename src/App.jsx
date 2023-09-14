import './App.css'
import Cards from './components/cards/Cards'

function App() {

  return (
    <>
      {/* header section */}
      <div>
        <h1 className='text-center py-12 font-bold text-3xl '>Course Registration</h1>
      </div>
      {/* Cards area here */}
      <div className='mx-14'>
        <Cards></Cards>
      </div>
    </>
  )
}

export default App
