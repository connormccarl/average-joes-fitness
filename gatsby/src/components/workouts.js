import * as React from 'react'
import Workout from './workout'

const workouts = [
  {
    name: "Thor Workout",
    description: "This is the workout that Thor used to get ready for the movie.",
    image_url: "../images/anirudh-3esjG-nlgyk-unsplash.jpg",
    image_alt: "Thor Hammor",
    active: 1
  },
  {
    name: "Thor Workout 2",
    description: "This is another Thor workout.",
    image_url: "../images/anirudh-3esjG-nlgyk-unsplash.jpg",
    image_alt: "Thor Hammor",
    active: 0
  },
]

const Workouts = () => {
  return (
    <div>
      {
        workouts.map((workout) => (
          <Workout data={workout}></Workout>
        ))
      }
      <button>Add Workout</button> 
    </div>
  )
}

export default Workouts