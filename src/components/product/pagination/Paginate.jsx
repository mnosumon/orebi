import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import DummyProduct from '../../../components/home/NewArrivalsProduct'
import ProductCard from '../../home/ProductCard';


function Items({ currentItems }) {

  return (
    <>
        <div className="flex gap-10 flex-wrap mb-[50px]">
            {currentItems &&
            currentItems.map((item, index) => (
                <div>
                    <ProductCard key={index} fullItemSend={item} productName={item.productName} productImage={item.productImage} productPrice={item.productPrice} isNew={item.isNew} discount={item.discount} color={item.color} id={item.id}/>
                </div>
            ))}
        </div>
    </>
  );
}


const Paginate = ({ itemsPerPage }) => {

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = DummyProduct.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(DummyProduct.length / itemsPerPage);
console.log(currentItems );
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % DummyProduct.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex justify-between">
        <div className="">
          <ReactPaginate
            breakLabel="---"
            nextLabel=""
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel=""
            renderOnZeroPageCount={null}
            containerClassName="flex items-center"
            pageLinkClassName="p-4 text-base font-normal border border-[#D8D8D8] inline-block"
            activeLinkClassName="text-[#FFFFFF] bg-[#262626]"
            pageClassName="mr-4"
            breakClassName="mr-4"
            breakLinkClassName="px-4 text-[37px] font-normal inline-block"
            />
        </div>

        <div className="">
          <span className='text-base font-normal leading-8 text-[#767676]'>Products from {itemOffset + 1} to {endOffset > DummyProduct.length ? DummyProduct.length : endOffset} of {DummyProduct.length}</span>
        </div>
      </div>
    </>
  )
}

export default Paginate