import React, { Component } from "react";
import BookedSeats from "./BookedSeats";
import { connect } from "react-redux";
import { bookTicket, calcTotalPrice } from "./redux/action";

class BookingDetails extends Component {
  render() {
    let totalPrice = 0;

    for (let i of this.props.selectedSeats) {
      console.log(i)
      totalPrice += i['gia']
    }

    return (
      <div className="col-4 pt-5 pb-3">
        <div className="booking-content py-3">
          <div className="booking-details mt-3">
            <div className="d-flex justify-content-around">
              <div className="d-flex align-items-center">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="25"
                    y="25"
                    width="50"
                    height="50"
                    fill="#008000"
                  ></rect>
                </svg>
                <span className="ml-1 d-block">Selected seats</span>
              </div>

              <div className="d-flex align-items-center">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="25"
                    y="25"
                    width="50"
                    height="50"
                    fill="#FF0000"
                  ></rect>
                </svg>
                <span className="ml-1 d-block">Reserved seats</span>
              </div>

              <div className="d-flex align-items-center">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="25"
                    y="25"
                    width="50"
                    height="50"
                    fill="#ffffff"
                  ></rect>
                </svg>
                <span className="ml-1 d-block">Empty seats</span>
              </div>
            </div>
          </div>

          <BookedSeats />

          <div className="booking-summary mt-4 row">
            <div className="col-7">
              <p>
                Number of seats:{" "}
                <span className="booking-text">
                  {this.props.selectedSeats.length}
                </span>
              </p>
              <p>
                Total: <span className="booking-text">{Intl.NumberFormat("en-US").format(totalPrice)} VND</span>
              </p>
            </div>

            <div className="col-5 pt-3">
              <button className="btn btn-success" onClick={this.props.handleBookTicket}>Book</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    selectedSeats: state.selectedSeats,
  };
};

let mapDisPatchToProps = (dispatch) => {
  return {
    handleBookTicket: () => {
      dispatch(bookTicket());
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(BookingDetails);
