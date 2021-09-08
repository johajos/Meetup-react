import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://lets-travel-more.com/wp-content/uploads/2019/09/dramatic-sunset-in-mediterranean-town-of-oia-PQBBWGQ.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://lets-travel-more.com/wp-content/uploads/2019/09/dramatic-sunset-in-mediterranean-town-of-oia-PQBBWGQ.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <MeetupList meetups={DUMMY_DATA} /> 
    </section>
  );
}

export default AllMeetupsPage;
