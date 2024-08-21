import React from 'react';
import {Card} from './Card'
import StrangerThingsImage from '../Assets/Frame 2 16.webp';

const NewFeed = () => {
  return (
    <div>
    <Card
    Img={StrangerThingsImage}
    AltImg="StrangerThings"
    Heading="QUIZARDRY : Stranger Things"
    Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque morbi venenatis, turpis commodo pellentesque est massa luctus. Curabitur sapien, nam massa nisi sit id. "
    Points="40"
    ShareCount="06"/>
    <Card
    Img={StrangerThingsImage}
    AltImg="StrangerThings"
    Heading="QUIZARDRY : Stranger Things"
    Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque morbi venenatis, turpis commodo pellentesque est massa luctus. Curabitur sapien, nam massa nisi sit id. "
    Points="40"
    ShareCount="06"/>
    <Card
    Img={StrangerThingsImage}
    AltImg="StrangerThings"
    Heading="QUIZARDRY : Stranger Things"
    Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque morbi venenatis, turpis commodo pellentesque est massa luctus. Curabitur sapien, nam massa nisi sit id. "
    Points="40"
    ShareCount="06"/>
    </div>
  );
};

export default NewFeed;
