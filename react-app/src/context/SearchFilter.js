import { createContext, useState } from 'react';
import { useContext } from 'react';

export const SearchContext = createContext();
export const usePicture = () => useContext(SearchContext); /// custom hook

export function SearchFilterProvider(props) {
  const [hasHotTub, setHasHotTub] = useState(false)
  const [hasWifi, setHasWifi] = useState(false)
  const [hasPatio, setHasPatio] = useState(false)
  const [hasFireplace, setHasFireplace] = useState(false)
  const [hasKitchen, setHasKitchen] = useState(false)


  return (
    <SearchContext.Provider
      value={{
        hasHotTub,
        setHasHotTub,
        hasWifi,
        setHasWifi,
        hasPatio,
        setHasPatio,
        hasFireplace,
        setHasFireplace,
        hasKitchen,
        setHasKitchen,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
