import React from 'react'
import ReactDom from 'react-dom'

import Title from './app'

import "../node_modules/normalize.css/normalize.css"
import "../node_modules/@blueprintjs/core/dist/blueprint.css"

ReactDom.render(
  <Title />,
  document.querySelector('[data-js="app"]')
)
