import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useQueryParam, StringParam } from 'use-query-params'
import useLocalStorageState from 'use-local-storage-state'

function useAppState () {
  const location = useLocation()

  // Load Local storage Data
  const [lsState, setLSState, { removeItem }] = useLocalStorageState('bchWalletState-template', {
    ssr: true,
    defaultValue: {
      serverUrl: 'https://free-bch.fullstack.cash' // Default server
    }
  })

  console.log('lsState: ', lsState)

  // Get the Token ID from the a query parameter, if it exists.
  let [tokenId] = useQueryParam('tokenid', StringParam)
  if (!tokenId) tokenId = ''

  // Initialize  data states
  const [serverUrl, setServerUrl] = useState(lsState.serverUrl) // Default server url
  const [menuState, setMenuState] = useState(0)
  const [wallet, setWallet] = useState(false)
  const [servers, setServers] = useState([])

  // Startup state management
  const [asyncInitStarted, setAsyncInitStarted] = useState(false)
  const [asyncInitFinished, setAsyncInitFinished] = useState(false)
  const [asyncInitSucceeded, setAsyncInitSucceeded] = useState(null)

  // Modal state management
  const [showStartModal, setShowStartModal] = useState(true)
  const [modalBody, setModalBody] = useState([])
  const [hideSpinner, setHideSpinner] = useState(false)
  const [denyClose, setDenyClose] = useState(false)

  // Update local storage
  const updateLocalStorage = (lsObj) => {
    // Progressively overwrite the LocalStorage state.
    const newObj = Object.assign({}, lsState, lsObj)

    setLSState(newObj)
  }

  return {
    serverUrl,
    setServerUrl,
    menuState,
    setMenuState,
    wallet,
    setWallet,
    servers,
    setServers,
    asyncInitStarted,
    setAsyncInitStarted,
    asyncInitFinished,
    setAsyncInitFinished,
    asyncInitSucceeded,
    setAsyncInitSucceeded,
    showStartModal,
    setShowStartModal,
    modalBody,
    setModalBody,
    hideSpinner,
    setHideSpinner,
    denyClose,
    setDenyClose,
    currentPath: location.pathname,
    updateLocalStorage,
    removeLocalStorageItem: removeItem,
    tokenId
  }
}

export default useAppState
