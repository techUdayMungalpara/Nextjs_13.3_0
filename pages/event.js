//Fetch data server side rendering
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Eventlist({ data }) {
  const [eventData, setEventData] = useState(data);
  const router = useRouter();
  const fetsEvent = async () => {
    const response = await fetch(
      `http://localhost:3000/events?category=${'sports'}`
    );
    const data = await response.json();
    setEventData(data);
    router.push(`/event?category=sports`, undefined, { shallow: true });
  };

  return (
    <>
      <button
        onClick={() => fetsEvent('sports')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        sports
      </button>

      <h1>List of event</h1>
      {eventData.map((a) => {
        return (
          <div key={a.id} className="font-mono m-8 p-1 ">
            <h2>
              {a.id} {a.title}
              {a.category}|{a.description}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  //when you share link http://localhost:3002/event?category=sports
  // it wil fetch data
  const { category } = query;
  console.log(category);
  const queryString = category ? 'category=sports' : '';
  const response = await fetch(`http://localhost:3000/events?${queryString}`);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
