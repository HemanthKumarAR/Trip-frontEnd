



import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGetDriverorder } from '../../../actions/driverAction';
import MyOrderDetails from './MyOrderDetails';

function MyOrder() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('createdAt');
  const [order, setOrder] = useState('desc');

  const myOrder = useSelector((state) => state.driver.myOrder);

  useEffect(() => {
    dispatch(startGetDriverorder({ page: currentPage, sortBy, order }));
  }, [dispatch, currentPage, sortBy, order]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSortChange = (sortByField) => {
    setSortBy(sortByField);
  };

  const handleOrderChange = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      {myOrder.length > 0 && (
        <div>
          <div>
            <button onClick={() => handleSortChange('createdAt')}>Sort by Created At</button>
            {/* <button onClick={() => handleSortChange('totalAmount')}>Sort by Total Amount</button>
            <button onClick={handleOrderChange}>Toggle Order</button> */}
          </div>
          <div>
            {myOrder.map((myOrder) => (
              <MyOrderDetails key={myOrder._id} myOrder={myOrder} />
            ))}
          </div>
          <div>
            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
              Previous Page
            </button>
            <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
          </div>
        </div>
      )}
      {myOrder.length === 0 && <h1>No Trip found</h1>}
    </div>
  );
}

export default MyOrder;




