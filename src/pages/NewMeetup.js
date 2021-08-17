import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useHistory } from 'react-router-dom';
import React from 'react';

const NewMeetupPage = () => {
    const history = useHistory();
    
    function addMeetupHandler(meetupData) {

     
        // to send api request function
        fetch('https://meetups-app-4c738-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method: 'POST', // method of HTTP
                body: JSON.stringify(meetupData), // pass data
                headers: {
                    'Content-Type': 'application/json'  // provide header 
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage
