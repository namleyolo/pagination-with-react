import React ,{useState, useEffect} from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [post,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(10);
  useEffect(() => {
    // var a = 1;
    // a++;
    const fetchData = async() => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    }
    fetchData();
  },[]);

  const indexOfLastPost  = currentPage * postsPerPage ; 
  const indexOfFirstPost = indexOfLastPost - postsPerPage ; 
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);
  console.log(indexOfLastPost,indexOfFirstPost,currentPosts);
  console.log("all Posts:",post.slice(20,30));

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // console.log(paginate);

  return (
    <div className="App">
      <header className="App-header"> 
        <Posts post={currentPosts} loading={loading}></Posts>
        <Pagination postsPerPage={postsPerPage} totalPosts={post.length} paginate={paginate}></Pagination>
      </header>
    </div>
  );
}

export default App;
