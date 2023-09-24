import React from 'react'

const Home = () => {

  let name='chandan';

  let num1 = 40;
  let num2 = 60;

  const addnums = (a,b) => {
    return a+b;
  }
  return (
    <div>
        <h1>Online Booking Restaurent</h1>
        <h1 style={{ color : 'red', backgroundColor:'yellow', fontsize: 20 }}>Using Inline css</h1>
   

       

    </div>
  )
}

export default Home;