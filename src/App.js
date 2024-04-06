import { useState } from 'react';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
    <BlogForm setCounter={setCounter} />
    <Blog count={counter} />
    </>
  );
}

export default App;
