import { BOOK_TICKET, TOGGLE_SEAT } from "./constant";


export let toggleSeatStatus = (seat) => {
    return {
        type: TOGGLE_SEAT,
        payload: seat,
    };
};

export let bookTicket = () => {
    return {
        type: BOOK_TICKET,
    };
};