import React,{useState,useEffect} from 'react'
import './stories.css';
function AllStories() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
 
      
      useEffect(() => {
        // Define the URL you want to fetch data from
        const apiUrl = 'http://localhost:5000/api/nyt-news';
    
        // Use the fetch API to make a GET request to the URL
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setData(data.results); // Assuming 'results' is the key in the response data
           
          })
          .catch((error) => {
            setError(error);
            
          });
      }, []);
  return (
   
        <div>
           
          <h1 style={{ textAlign: 'center' }}>Top Stories from New York Times API</h1>
          <h4 style={{ textAlign: 'center' }}>Calling API from Express not directly External Api</h4>
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="card">
                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <img className="img" src={item.multimedia[0].url} alt={item.title} />
                  <h2>{item.title}</h2>
                  <p>{item.abstract}</p>
                </a>
              </div>
            ))}
          </div>
          <h1 style={{ textAlign: 'center' }}>
  By: Shah Faisal (<a href="mailto:shaah.fesal@gmail.com" style={{ textDecoration: 'none', color: 'blue' }}>shaah.fesal@gmail.com</a>)
</h1>
        </div>
  )
}

export default AllStories
