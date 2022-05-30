import React, { useEffect, useState } from 'react'
import { use52WeekHigh, useGetWeather } from './QueryService'
export const QueryDemo = () => {

  const [data, setdata] = useState([])

  const res = use52WeekHigh("demo1")
  const res1 = useGetWeather("demo2")
  useEffect(() => {
    console.log("Thhis is called from demo ", res)
    // setdata(res.data.body.dataLtpGreater20)
  }, [res,res1])
  console.log(res.data);
  console.log(res1.data)
  return (
    <div>
      <button onClick={() => { res.refetch() }}>52 Week High</button>
      <button onClick={() => { res1.refetch() }}>GEt Weather</button>
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Company name</th>
            <th scope="col">NEw52whl</th>
            <th scope="col">Prev52whl</th>
            <th scope="col">PrevClose</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}
