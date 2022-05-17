import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Workout = ({ data }) => {
  return (
    <article>
      <img
        alt={data.image_alt}
        src={data.image_url}
      />
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      {data.active ? <p>Active Workout</p> : <p>Inactive</p>}
      <span>></span>
    </article>
  )
}

export default Workout