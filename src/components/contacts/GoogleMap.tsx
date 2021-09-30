import { Loader } from '@googlemaps/js-api-loader'
import classNames from 'classnames'
import { useEffect, useRef } from 'react'

import pointer from '../../../public/ui/pointer.svg'
import { GOOGLE_MAPS_ID, GOOGLE_MAPS_KEY } from '../../constants/common'
import styles from './GoogleMap.module.scss'

const GoogleMap = () => {
  const googleMapRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const mapRef = useRef<google.maps.Map>()

  useEffect(() => {
    (async () => {
      const loader = new Loader({
        apiKey: GOOGLE_MAPS_KEY,
        version: 'weekly',
      })

      await loader.load()

      const google = window.google

      mapRef.current = new google.maps.Map(googleMapRef.current as Element, {
        center: { lat: 47.0004139, lng: 28.803993 },
        zoom: 15,
        streetViewControl: false,
        mapId: GOOGLE_MAPS_ID,
      })

      const marker = new google.maps.Marker({
        position: new google.maps.LatLng({lat: 47.0004139, lng: 28.803993}),
        icon: pointer.src,
        map: mapRef.current,
      })

      marker.addListener('click', () => {
        mapRef.current?.setZoom(16)
        mapRef.current?.panTo(marker.getPosition() as google.maps.LatLng)
      })
    })()
  }, [])

  return (
    <div ref={mapContainerRef} className={classNames(styles.mapContainer, 'w-full pt-16 max-w-screen')}>
      <div id="map" ref={googleMapRef} className="h-full rounded-lg" />
    </div>
  )
}

export default GoogleMap
