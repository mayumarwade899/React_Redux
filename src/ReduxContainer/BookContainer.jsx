import { useDispatch, useSelector } from "react-redux";
import purchase_book from './BookAction';

function BookContainer() {
  const noOfBooks = useSelector((state) => state.NumberOfBooks);
  const dispatch = useDispatch();

  return (
    <>
      <div>BookContainer</div>
      <h1>No of Books - {noOfBooks}</h1>
      <button onClick={() => (dispatch(purchase_book()))}>Buy Book</button>
    </>
  );
}

export default BookContainer;
