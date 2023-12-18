import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import * as projection from '@arcgis/core/geometry/projection'
import { useEffect, useState } from 'react'
import { setAssetPath } from '@esri/calcite-components/dist/components'
import { CalciteButton } from '@esri/calcite-components-react'
import '@esri/calcite-components/dist/calcite/calcite.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true)
      setAssetPath(`${props.context.folderUrl}dist/runtime/assets`)

      // isLoaded is not recognized as a function when using import * as projection from '@arcgis/core/geometry/projection'
      // when using import projection from '@arcgis/core/geometry/projection' it works, but this leads to issues when
      // using the widget in the Developer Edition
      if (projection.isLoaded()) {
        console.log('projection is loaded')
      }
    }
  }, [isLoaded])

  return (
    <div className="widget-demo jimu-widget m-2">
      <p>Simple Widget</p>
      <p>exampleConfigProperty: {props.config.exampleConfigProperty}</p>
      <CalciteButton>A button</CalciteButton>
    </div>
  )
}

export default Widget
