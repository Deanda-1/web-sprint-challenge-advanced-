// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'
import { Provider } from 'react-redux'
import { resetStore } from './components/App'
import { applyMibbleWare, CreateStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './state/reducer'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
