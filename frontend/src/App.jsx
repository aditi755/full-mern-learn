import Header from './components/Header'
import Home from './components/Home'
import AddBook from './components/AddBook'
import Books from './components/Book/Books'
import About from './components/About'
import BookDetail from './components/Book/BookDetail'
import {Routes, Route} from "react-router-dom"
import './App.css'

function App() {


  return (
    <>
    <header>
      <Header />
    </header>
    
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/add" element={<AddBook />} exact />
      <Route path="/books" element={<Books />} exact />
      <Route path="/about" element={<About />} exact />
      <Route path="/books/:id" element={<BookDetail />} exact />
    </Routes>
    </>
  )
}

export default App
