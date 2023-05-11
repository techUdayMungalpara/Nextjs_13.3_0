import useSWR from 'swr';

const fetcher = async () => {
  const res = await fetch('http://localhost:3000/dashboard');
  const data = await res.json();

  return data;
};

function DashboardSwr() {
  const { data, error, isLoading } = useSWR('dashboard', fetcher);
  if (error) <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <div>
        <h2 className=" text-xl font-mono text-center "> USE SWR </h2>
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
export default DashboardSwr;
