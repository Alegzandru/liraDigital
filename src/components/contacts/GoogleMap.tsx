import { Loader } from '@googlemaps/js-api-loader'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

import pointer from '../../../public/ui/pointer.svg'
import { GOOGLE_MAPS_ID, GOOGLE_MAPS_KEY, ROHOST } from '../../constants/common'
import styles from './GoogleMap.module.scss'

const GoogleMap = () => {
  const googleMapRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const mapRef = useRef<google.maps.Map>()

  const [isRo, setIsRo] = useState(false)

  useEffect(() => {
    if (window.location.hostname === ROHOST) {
      setIsRo(true)
    }
  }, [])

  const lat = isRo ? 44.49144732519042 : 47.030620379457
  const lng = isRo ? 26.087278593455085 : 28.846507149174812

  useEffect(() => {
    (async () => {
      const loader = new Loader({
        apiKey: GOOGLE_MAPS_KEY,
        version: 'weekly',
      })

      await loader.load()

      const google = window.google

      mapRef.current = new google.maps.Map(googleMapRef.current as HTMLElement, {
        center: { lat, lng },
        zoom: 15,
        streetViewControl: false,
        mapId: GOOGLE_MAPS_ID,
      })

      const marker = new google.maps.Marker({
        position: new google.maps.LatLng({lat, lng}),
        icon: pointer.src,
        map: mapRef.current,
      })

      marker.addListener('click', () => {
        mapRef.current?.setZoom(16)
        mapRef.current?.panTo(marker.getPosition() as google.maps.LatLng)
      })
    })()
  }, [isRo])

  return (
    <div ref={mapContainerRef} className={classNames(styles.mapContainer, 'w-full pt-16 max-w-screen')}>
      <div id="map" ref={googleMapRef} className="h-full rounded-lg" />
    </div>
  )
}

export default GoogleMap
