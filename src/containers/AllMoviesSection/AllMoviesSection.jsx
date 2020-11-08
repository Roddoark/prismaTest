import React from 'react'
import GendersFilter from './GendersFilter/GendersFilter'
import SortByFilter from './SortByFilter/SortByFilter'
import YearsFilter from './YearsFilter/YearsFilter'

export default function AllMoviesSection() {
  return (
    <div>
      <SortByFilter />
      <GendersFilter />
      <YearsFilter />
    </div>
  )
}