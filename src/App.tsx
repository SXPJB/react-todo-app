import Header from "./todo/components/Header/Header.tsx";
import TodoGrid from "./todo/components/Grid/TodoGrid.tsx";

function App() {

  return (
    <>
        <Header/>
        <div className='container'>
            <div className='mt-3'>
                <TodoGrid/>
            </div>
        </div>
    </>
  )
}

export default App
