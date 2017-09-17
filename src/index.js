import React from 'react'
import ReactDom from 'react-dom'

import Title from './app'


ReactDom.render(
  <Title />,
  document.querySelector('[data-js="app"]')
)
