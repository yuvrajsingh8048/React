import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h1>Hello Good Morning, Myself Yuvraj Singh</h1>
  )
}
const name = 'GOOGLE.com'
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click here to visit the google... ',
  name
)
ReactDOM.createRoot(document.getElementById('root')).render(
reactElement
)
