import * as React from 'react';
import '../styles.css';

// markup

const IndexPage = () => {
  return (
    <main>
      <title>Paw Pals</title>
      <div
        className='flexWrapper'
        style={{ justifyContent: 'center', flexDirection: 'column' }}
      >
        <h1>Paw Pals</h1>
        <h2>A Dating app but for dogs!</h2>
      </div>
      <h3>Header 2</h3>
      <p>
        PawPals is a social media site, but for dog owners. Similar to other
        dating apps, PawPals users create a profile for their pup, and “swipe”
        left or right on other dogs’ profiles to find playmates for their own.
        When two PawPals users “swipe right” on each other - AKA both users want
        their dogs to play with each other - the users can message each other
        and the site recommends dog parks in the area.
      </p>
      <p>
        The site also features an “adoption” mode, in which users interested in
        adopting dogs can see rescues or other puppies up for adoption in the
        area. They can then “swipe” right on dogs they are interested in
        adopting, and, hopefully, find their perfect match.
      </p>
      <h3>Team Roles</h3>
      <li>Marigrace Seaton: Client Manager, Frontend Engineer</li>
      <li>Martin Smolka: Tech Lead</li>
      <li>Alan Patterson: Fullstack Engineer</li>
      <li>Casey Turgeon: Backend Developer</li>
      <h3>Contact Info</h3>
      Team email:{' '}
      <a href='mailto: pawpalsdevelopment@gmail.com'>
        pawpalsdevelopment@gmail.com
      </a>
      <p>
        Client: Nash Philbeck:{' '}
        <a href='mailto: hnashp@email.unc.edu'>hnashp@email.unc.edu</a>
      </p>
      <p>
        {' '}
        Marigrace Seaton:{' '}
        <a href='mailto:mgseaton@email.unc.edu'>mgseaton@email.unc.edu</a>
      </p>
      <p>
        Martin Smolka:{' '}
        <a href='mailto:martin38@email.unc.edu'>martin38@email.unc.edu</a>
      </p>
      <p>
        Alan Patterson:{' '}
        <a href='mailto:walanpat@email.unc.edu'>walanpat@email.unc.edu</a>
      </p>
      <p>
        Casey Turgeon:{' '}
        <a href='mailto:cturgeon@email.unc.edu'>cturgeon@email.unc.edu</a>
      </p>
      <h3>Meetings Schedule</h3>
      <p>First Client Meeting: Wednesday, February 3, 6 PM</p>
      <p>Regular develo pment team meetings: Tuesdays, weekly, 5 PM</p>
      <h3> Team Rules</h3>
      <li>Behavior:</li>
      <p>
        Team members will communicate through the GroupMe we have set up. If a
        team member will be late to a meeting, she or he should send a message
        in the GroupMe in advance of the meeting.
      </p>
      <p>
        Team members should respond to messages that pertain to them in the
        GroupMe by the end of the workday that the message was sent, and no
        response will normally be interpreted as the member’s not knowing the
        answer to the question.
      </p>
      <p>
        If team members are dissatisfied with the work of other members, she or
        he can privately message them and express their concerns.
      </p>
      <p>
        If a team member is unable to do her or his specified role appropriately
        or encounters an obstacle in their role, the team member should ask for
        assistance as soon as the obstacle is realized from other group members
        in the GroupMe.
      </p>
      <li>Coding Practices</li>
      <p>
        As the team will not yet specify which language(s) we will use for the
        project until we meet with our client, the team will hereby abide by the
        following language conventions:
      </p>
      <p>
        <a href='https://www.oracle.com/java/technologies/javase/codeconventions-contents.html'>
          For Java
        </a>
      </p>
      <p>
        <a href='https://www.python.org/dev/peps/pep-0008/ '>For Python</a>
      </p>
      <p>
        <a href='https://www.w3schools.com/js/js_best_practices.asp'>
          For Javascript
        </a>
      </p>
    </main>
  );
};

export default IndexPage;
