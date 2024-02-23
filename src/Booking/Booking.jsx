import React, { Component } from 'react'
import Info from './Info'
import SeatSelection from './SeatSelection'
import BookingDetails from './BookingDetails'

export default class Booking extends Component {
  render() {
    return (
      <div className='container main-content'>
        <Info />
        <div className="row">
            <SeatSelection />
            <BookingDetails />
        </div>
      </div>
    )
  }
}
