import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BooksPage from './views/BooksPage.jsx';
import SingleBookPage from './views/SingleBookPage.jsx';
import AddBookPage from './views/AddBookPage.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* need to add base path to all paths elements in route because of github pages */}
        {/* Can also use index take to make it the homepage, but can't in this case due to base path */}
          <Route path="/BookList" element={ <BooksPage />} />
          <Route path="/BookList/add-book" element={ <AddBookPage />} />
          <Route path="/BookList/book/:id" element={ <SingleBookPage/>} />

      </Routes>
    </BrowserRouter>
     
        
    </>
  )
}

export default App
