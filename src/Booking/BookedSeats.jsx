import React, { Component } from "react";
import { connect } from "react-redux";

class BookedSeats extends Component {
  render() {
    let selectedSeats = this.props.selectedSeats;

    return (
      <div className="booked-seat-list mt-4">
        <h3 className="text-center">Your Order</h3>
        <div className="table-wrapper">
          <div className="table-scroll">
            <table className="table">
              <thead className="text-center mb-5">
                <tr>
                  <th>Seat</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                {selectedSeats.map((item) => {
                  return (
                    <tr className="text-center">
                      <td>{item["soGhe"]}</td>
                      <td>{Intl.NumberFormat("en-US").format(item["gia"])}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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

export default connect(mapStateToProps, null)(BookedSeats);
