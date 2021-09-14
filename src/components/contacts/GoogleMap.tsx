import { Loader } from '@googlemaps/js-api-loader'
import classNames from 'classnames'
import { useEffect, useRef } from 'react'

import pointer from '../../../public/ui/pointer.svg'
import styles from './GoogleMap.module.scss'

const GoogleMap = () => {
  const googleMapRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const mapRef = useRef<google.maps.Map>()

  useEffect(() => {
    (async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyDOw10hs_UOMVTqL0kP5O4imgj2ZCoGyjo',
        version: 'weekly',
      })

      await loader.load()

      const google = window.google

      mapRef.current = new google.maps.Map(googleMapRef.current as Element, {
        center: { lat: 47.0004139, lng: 28.803993 },
        zoom: 15,
        streetViewControl: false,
        mapId: '31731bd48a92f0fb',
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
      <div id="map" ref={googleMapRef} className="h-full" />
    </div>
  )
}

export default GoogleMap
