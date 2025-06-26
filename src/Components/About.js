import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import { useEffect } from 'react';

const About = () => {
  const context = useContext(NoteContext);
  useEffect(() => {
    // This effect runs when the component mounts
    context.update(); // Call the update function to change the state
    // eslint-disable-next-line 
  }, []);

  return (
    <div>
      This is about {context.state.name} from {context.state.class}
    </div>
  )
};

export default About;
