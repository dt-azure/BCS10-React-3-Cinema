import { seatData } from "../data";
import { BOOK_TICKET, TOGGLE_SEAT } from "./constant";

let initialState = {
  seatData: seatData,
  selectedSeats : [],
};

const row_index = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3,
  'E': 4,
  'F': 5,
  'G': 6,
  'H': 7,
  'I': 8,
  'J': 9,
}

export let seatDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEAT: {
      let newSelectedSeats = [...state.selectedSeats];

      let index = newSelectedSeats.findIndex((i) => {
        return i['soGhe'] === action.payload['soGhe'];
      })

      if (index === -1) {
        newSelectedSeats.push(action.payload)
      }
      else {
        newSelectedSeats.splice(index, 1)
      }
      

      return {...state, selectedSeats: newSelectedSeats}
    };

    case BOOK_TICKET: {
      let newSelectedSeats = [...state.selectedSeats];
      let newSeatData = [...state.seatData]

      if (state.selectedSeats.length === 0) {
        return {...state}
      }

      for (let i of newSelectedSeats) {
        let row = i['soGhe'][0];
        let row_list = newSeatData[row_index[row]]['danhSachGhe'];
        let seat_index = row_list.findIndex((item) => {
          return item['soGhe'] === i['soGhe']
        })

        row_list[seat_index]['daDat'] = true;
      };

      newSelectedSeats = [];
      state.seatData = newSeatData;
      state.selectedSeats = newSelectedSeats;

      window.alert('Bạn đã đặt vé thành công.')

      return {...state}
    }

    default: {
      return { ...state };
    }
  }
};
