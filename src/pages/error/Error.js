import React from 'react'
import errorCss from './error.module.css';

function error() {
  return (
    <div>
        <h1 className={errorCss.error}>Error Page!</h1>
    </div>
  )
}

export default error