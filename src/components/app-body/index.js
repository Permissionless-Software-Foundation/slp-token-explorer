/*
  This Body component is a container for all the different Views of the app.
  Views are equivalent to 'pages' in a multi-page app. Views are hidden or
  displayed to simulate the use of pages in an SPA.
  The Body app contains all the Views and chooses which to show, based on
  the state of the Menu component.
*/

// Global npm libraries
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Local libraries
import TokenView from './token/index.js'
// import GetBalance from './balance'
import ServerSelectView from './configuration/select-server-view'

function AppBody (props) {
  // Dependency injection through props
  const appData = props.appData

  return (
    <>
      <Routes>
        <Route path='/' element={<TokenView appData={appData} />} />
        {/* <Route path='/balance' element={<GetBalance wallet={appData.wallet} />} /> */}
        <Route path='/tokens' element={<TokenView appData={appData} />} />
        <Route path='/configuration' element={<ServerSelectView appData={appData} />} />
      </Routes>
      {/** Show in all paths except the servers view */}
      {/* {appData.currentPath !== '/servers' && <SelectServerButton linkTo='/servers' appData={appData} />} */}
    </>
  )
}

export default AppBody
