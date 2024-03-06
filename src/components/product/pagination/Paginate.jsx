import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import DummyProduct from '../../../components/home/NewArrivalsProduct'
import ProductCard from '../../home/ProductCard';
import { BiSolidCategory } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";



function Items({ currentItems,}) {

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


const Paginate = ({  itemsPerPage, setItemsPerPage  }) => {

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

  const handleChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setItemOffset(0)
  };

  // ====================Function Short or Long==================
  // ============Long===========
  // let handleChange = (e)=>{
  //   setInput(e.target.value)
  // }
  // ============Short===========
  // onChange={(e)=>setInput(e.target.value)}
// ====================Function Short or Long==================
  return (
    <>
      <div className="flex justify-between items-center mb-[60px]">
        <div className="flex gap-5">
          <div className='w-9 h-9 flex items-center justify-center bg-[#FFFFFF] border border-[#979797] hover:bg-[#262626] hover:text-[#FFF] transition-all duration-500 cursor-pointer'>
            <BiSolidCategory className='text-base'/>
          </div>
          <div className='w-9 h-9 flex items-center justify-center bg-[#FFFFFF] border border-[#979797] hover:bg-[#262626] hover:text-[#FFF] transition-all duration-500 cursor-pointer'>
            <AiOutlineBars className='text-base'/>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-4 items-center">
            <label htmlFor="sortBy" className='text-base leading-[30px] text-[#767676]'>Sort by:</label>
            <select name="" id="sortBy" className='py-1 px-5 outline-none border border-[#F0F0F0] text-base leading-[30px] text-[#767676]'>
              <option value="">Feature</option>
              <option value="">Feature</option>
              <option value="">Feature</option>
              <option value="">Feature</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="show" className='text-base leading-[30px] text-[#767676]'>Show:</label>
            <select onChange={handleChange} value={itemsPerPage} name="" id="show" className='py-1 px-5 outline-none border border-[#F0F0F0] text-base leading-[30px] text-[#767676]'>
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="15">15</option>
              <option value="18">18</option>
              <option value="21">21</option>
            </select>
        </div>
        </div>
      </div>

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