import React from 'react'
import ReactDOM from 'react-dom/client'

import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './main.css'

import { Routes } from '@generouted/react-router'
import Layout from './layout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <Routes />
    </Layout>
  </React.StrictMode>,
)
