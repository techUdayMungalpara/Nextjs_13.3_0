import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:3000/dashboard');
      const data = await res.json();
      console.log(data);
      setIsLoading(false);
      setData(data);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <h1> ...Loading</h1>;
  }

  return (
    <>
      <div className="">
        <div className="text-5xl gap-y-7  flex flex-col items-center justify-center min-h-screen  ">
          <h1>posts: {data.posts} </h1>
          <h2>likes:{data.likes}</h2>
          <h3>followers:{data.followers}</h3>
          <h3>following:{data.following}</h3>
        </div>
      </div>
    </>
  );
}
