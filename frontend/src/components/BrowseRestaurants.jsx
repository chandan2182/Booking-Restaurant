import React, { useEffect, useState } from 'react'
import restaurantData from './dummyData';

const BrowseRestaurants = () => {
    const [restroData, setRestroData] = useState(restaurantData);

    const brands = ["Chinese", "South Indian", "North Indian ", "Ice cre"];
  
    const [selOptions, setSelOptions] = useState([]);
  
    const displayData = () => {
      return restroData.map((laptop) => (
        <div className="col-md-3 mb-4">
          <div className="card">
            <img className="card-img-top" src={laptop.image} alt="" />
            <div className="card-body">
              <p>{laptop.category}</p>
              <h3>{laptop.name}</h3>
              <h2>₹{laptop.price}</h2>
            </div>
          </div>
        </div>
      ));
    };
  
    const searchLaptop = (e) => {
      const search = e.target.value;
      const result = restaurantData.filter((laptop) => {
        return laptop.model.toLowerCase().includes(search.toLowerCase());
      });
      setRestroData(result);
    };
  
    const filterBrand = (e) => {
      if (e.target.value === "") return setRestroData(restaurantData);
      const selBrand = e.target.value;
      const result = restaurantData.filter((laptop) => {
        return laptop.brand === selBrand;
      });
      setRestroData(result);
    };
  
    const selectOption = (brand) => {
      if(selOptions.includes(brand)) {
          setSelOptions(selOptions.filter((b) => b !== brand));
      }else{
          setSelOptions([...selOptions, brand]);
      }
    }
  
    useEffect(() => {
    //   if(selOptions.length === 0) return setRestroData(laptopList);
    //   setRestroData(laptopList.filter((laptop) => {
    //       return selOptions.includes(laptop.brand);
    //   }))
    }, [  ]);
    
  
    return (
      <div>
        <header className="bg-dark text-white">
          <div className="container py-5">
            <h1 className="text-center">Browse Product</h1>
            <hr />
            <input type="text" className="form-control" onChange={searchLaptop} />
  
            <div className="row mt-4">
              <div className="col-md-4">
                <select className="form-control" onChange={filterBrand}>
                  <option value="">Select Brand</option>
                  {brands.map((b) => (
                    <option value={b}>{b}</option>
                  ))}
                </select>
              </div>
  
              <div className="col-md-4 my-auto">
                  <input checked={selOptions.includes('Asus')} onClick={() => {selectOption('Asus')}} className="form-check-input" type="checkbox" /> Asus&nbsp;&nbsp;&nbsp;
                  <input checked={selOptions.includes('HP')} onClick={() => {selectOption('HP')}} className="form-check-input" type="checkbox" /> HP&nbsp;&nbsp;&nbsp;
                  <input checked={selOptions.includes('Acer')} onClick={() => {selectOption('Acer')}} className="form-check-input" type="checkbox" /> Acer&nbsp;&nbsp;&nbsp;
                  <input checked={selOptions.includes('Lenovo')} onClick={() => {selectOption('Lenovo')}} className="form-check-input" type="checkbox" /> Lenovo&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        </header>
  
        <div className="container">
          <div className="row">{displayData()}</div>
        </div>
      </div>
    );
}

export default BrowseRestaurants