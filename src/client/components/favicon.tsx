import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Favicon:React.FunctionComponent = () => {
  return ReactDOM.createPortal([
    <link key='apple-touch-icon' rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>,
    <link key='icon-32x32' rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>,
    <link key='icon-16x16' rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>,
    <link key='manifest' rel="manifest" href="/site.webmanifest"/>,
    <meta key='msapplication-TileColor' name="msapplication-TileColor" content="#da532c"/>,
    <meta key='theme-color' name="theme-color" content="#ffffff"/>
  ], document.querySelector('head'))
}

export default Favicon