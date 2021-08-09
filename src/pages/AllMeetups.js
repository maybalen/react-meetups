import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

const AllMeetupsPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([])

  // to prevent infinity loop by using useEffect
  useEffect(() => {
    //send the request api to GET data list
    // get no need to use 2nd value
    fetch('https://meetups-app-4c738-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
        .then(respone => { //return Promise
          return respone.json();
      }).then(data => {

          //transform the data from Object to Array
          const meetups = [];

          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key]
            };
            meetups.push(meetup);
          }

          setIsLoading(false);     // as External Dependency

          setLoadedMeetups(meetups);  // as External Dependency
    });
  }, []);  // 2nd value/Dependency let React checking for new data

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
}

export default AllMeetupsPage
