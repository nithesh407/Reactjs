import { useEffect, useState } from 'react';

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  const data = [
    {
      name: 'rathan'
    },
    {
      name: 'nithish'
    },
    {
      name: 'pradeep raja'
    }
  ]

  return (
    <div>
      {
        data.map((user) => (
          <p>{user.name}</p>
        ))
      }
    </div>
  );
};

export default Async;
