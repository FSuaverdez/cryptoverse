import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Exchanges, Cryptocurrencies, CryptoDetails, News, Homepage } from './components'
import './App.css'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
            </Routes>
            <Routes>
              <Route path='/exchanges' element={<Exchanges />} />
            </Routes>
            <Routes>
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
            </Routes>
            <Routes>
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />
            </Routes>
            <Routes>
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse <br />
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App
