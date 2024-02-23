import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSeatStatus } from "./redux/action";

class SeatSelection extends Component {
  render() {
    let seatData = this.props.seatData;

    return (
      <div className="col-8">
        <div className="screen text-center mx-3">
          <h4>SCREEN</h4>
        </div>

        <div className="seat-selection mx-3">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th className="seat-code"></th>
                <th className="seat-code">1</th>
                <th className="seat-code">2</th>
                <th className="seat-code">3</th>
                <th className="seat-code">4</th>
                <th className="seat-code">5</th>
                <th className="seat-code">6</th>
                <th className="seat-code">7</th>
                <th className="seat-code">8</th>
                <th className="seat-code">9</th>
                <th className="seat-code">10</th>
                <th className="seat-code">11</th>
                <th className="seat-code">12</th>
              </tr>
            </thead>
            <tbody>
              {seatData.map((item) => {
                let rowDetails = item['danhSachGhe'];

                return (
                  <tr className="text-center">
                    <td className="seat-code">{item["hang"]}</td>
                    {rowDetails.map((seat) => {
                      if (seat["daDat"]) {
                        return (
                          <td
                            key={seat["soGhe"]}
                            className="seats align-middle"
                          >
                            <input
                              type="checkbox"
                              className="seat-checkbox booked"
                              value={seat["soGhe"]}
                              disabled
                            ></input>
                          </td>
                        );
                      } else {
                        return (
                          <td
                            key={seat["soGhe"]}
                            className="seats align-middle"
                          >
                            <input
                              type="checkbox"
                              className="seat-checkbox"
                              value={seat["soGhe"]}
                              onClick={() => {
                                this.props.handleSeatClick(seat);
                              }}
                            ></input>
                          </td>
                        );
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    seatData: state.seatData,
  };
};

let mapDisPatchToProps = (dispatch) => {
  return {
    handleSeatClick: (seat) => {
      dispatch(toggleSeatStatus(seat));
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(SeatSelection);
