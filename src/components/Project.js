import * as React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Project = () => {
  return (
    <div>
        <Link to="/">
    <p>Home</p>
    </Link>
      <p>
        PawPals is a social media site, but for dog owners. Similar to other
        dating apps, PawPals users create a profile for their pup, and “swipe”
        left or right on other dogs’ profiles to find playmates for their own.
        When two PawPals users “swipe right” on each other - AKA both users want
        their dogs to play with each other - the users can message each other
        and the site recommends dog parks in the area.{' '}
      </p>
      <p>
        The site also features an “adoption” mode, in which users interested in
        adopting dogs can see rescues or other puppies up for adoption in the
        area. They can then “swipe” right on dogs they are interested in
        adopting, and, hopefully, find their perfect match.{' '}
      </p>
    </div>
  );
};
export default Project;