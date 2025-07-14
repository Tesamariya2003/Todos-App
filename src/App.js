import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import ViewTodo from './components/ViewTodo';
import DeleteTodo from './components/DeleteTodo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddTodo/>}/>
      <Route path="/search" element={<SearchTodo/>}/>
      <Route path="/delete" element={<DeleteTodo/>}/>
      <Route path="/view" element={<ViewTodo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
