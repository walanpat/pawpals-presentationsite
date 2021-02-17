import * as React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import TinderInfograph from '../images/TinderInfograph.png';
import PawPalsInfograph from '../images/PawPalsInfograph.png';

const Project = () => {
  return (
    <div>
      <Link to='/home'>
        <p>Home</p>
      </Link>
      <h2>
        PawPals is a social media, but for dogs. PawPals helps dog owners find
        and connect with other dog owners in the area.{' '}
      </h2>
      <img src={TinderInfograph}/>
      <p>
        About every three out of ten Americans have ever used a dating app, such
        as Tinder or Bumble, and that ratio jumps to roughly five out of every
        ten Americans aged 18 to 29 (Pew Research). Thus, about half of
        millennials and Gen Z-ers have been exposed to the “swipe left” and
        “swipe right” model, as a method of indicating disapproval or approval,
        respectively, to find romantic matches through apps. Using such a method
        for an app to match dog owners with each other, then, would work well
        especially among the target audience of 18 to 29-year-old Americans.
      </p>
      <img src={PawPalsInfograph}/>
      <p>
        The “swiping” model of creating matches between dog owners pairs users
        with pet owners of whom they have approved. A leftward swipe indicates a
        user approves of the owner’s profile, and a rightward swipe indicates
        disapproval. When two users “swipe right” on each other’s profiles, both
        users have indicated their approval of each other and a match is
        therefore created, as indicated by the infographic at left. When a match
        is created, users are granted the ability to chat with each other within
        the app, and from there can plan a day and time to meet and allow their
        dogs to socialize. The app will also provide a map with suggestions of
        local dog parks in the users’ area to aid in the playdate planning
        process.
      </p>
      <p>
        Additionally, the app will feature an “adoption mode” with which
        interested dog adopters can browse profiles of users who wish to put
        their dog up for adoption. One can imagine, then, that shelters, owners
        whose dogs recently gave birth to a litter, and rescue missions could
        use such a feature to more easily attract potential owners.
      </p>
      <p>
        PawPals seeks to connect dog owners with other dog owners, therefore
        connecting dogs with each other. The online “swiping” model can
        facilitate this process much more easily than organic socialization
        might.{' '}
      </p>
    </div>
  );
};
export default Project;
