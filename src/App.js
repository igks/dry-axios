import './App.css';
import * as API from './networkUtils';


const getPost = async () => {
  try {
    const posts = await API.get('/posts')
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

const createPost = async () => {
  const data = {
    title: "ahdfhahfd"
  }
  try {
    const posts = await API.post('/posts', data)
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

const updatePost = async () => {
  const data = {
    title: "adfasdvvodhoasdasdgfasdsfsafasdf"
  }
  try {
    const posts = await API.put('/posts/1', data)
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

const deletePost = async () => {
  try {
    const posts = await API.delete('/posts/1')
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}


function App() {
  return (
    <div className="App">
      <button type="button" style={{margin:10}} onClick={getPost}>Get</button>
      <button type="button" style={{margin:10}} onClick={createPost}>Post</button>
      <button type="button" style={{margin:10}} onClick={updatePost}>Put</button>
      <button type="button" style={{margin:10}} onClick={deletePost}>Delete</button>
    </div>
  );
}

export default App;
