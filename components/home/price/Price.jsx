import React from "react"
import { price } from "../../assets/data/data"
import { Heading } from "../../common/Heading"

export const Price = () => {
  return (
    <>
      <section className='price'>
        <Heading title='Choose The Plans' desc='Meet one of our pay plan.' />

        <div className='content'>
          {price.map((item) => (
            <div className='box' key={item.id}>
              <h3>{item.name}</h3>
              <h1>
                <span>$</span>
                {item.price}
                <label htmlFor=''>/user per month</label>
              </h1>
              <p>{item.desc}</p>
              <button className='button'>GET STATRED</button>


            </div>
          ))}
        </div>
      </section>
    </>
  )
}
