import React, { useEffect, useState } from 'react'

type ItemRateInputProp = {
    withDigits?: boolean,
    className?: '',
    onChange?: (i:number)=>void,
    big?: boolean,
    rating?: number,
    readonly?: boolean
}

const ItemRateInput = ({ withDigits, className, onChange, big, rating = 0, readonly = false }:ItemRateInputProp) => {
  const [rate, setRate] = useState<number>(typeof rating === 'number' ? rating : 0)
  const [hover, setHover] = useState(0)

  useEffect(() => {
    setRate(typeof rating === 'number' ? rating : 0)
  }, [rating])

  const onClickHandler = (i: number) => {
    setRate(i)
    if (onChange) {
      onChange(i)
    }
  }
  return (
        <div className={`item-rate-input-component ${className || ''}`}>
            {
                rating > 0 &&
                <div className={big ? 'big' : 'small'}>
                    {[...Array(5)].map((star, index) => {
                      index += 1
                      return (
                        readonly
                          ? <button
                                    type="button"
                                    key={'ro' + index}
                                    className={index <= (hover || rate) ? 'on' : 'off'}
                                >
                                    <span className="star">&#9733;</span>
                                </button>
                          : <button
                                    type="button"
                                    key={index}
                                    className={index <= (hover || rate) ? 'on' : 'off'}
                                    onClick={() => onClickHandler(index)}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(rate)}
                                >
                                    <span className="star">&#9733;</span>
                                </button>
                      )
                    })}
                    {withDigits && <span className='rating-count'>{Number(rate.toFixed(1))}</span>}
                </div>
            }
        </div>
  )
}

export default ItemRateInput
