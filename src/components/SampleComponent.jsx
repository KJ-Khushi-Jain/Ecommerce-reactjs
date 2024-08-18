import React from 'react'

const SampleComponent = (props) => {
  return (
    <div>
        <h1>SampleComponent</h1>
        <h1>The sample value + 10 is {props?.data + 10}.</h1>
    </div>
  )
}

export default SampleComponent


// instaed of props we can also write {data} and instead if "prop?.data"  we will simply write data.