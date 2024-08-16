import { React, type AllWidgetProps } from 'jimu-core'
/**
 * Before version 1.15, the Calcite components will be compiled into the widget's bundle, which will increase the bundle size.
 * Starting from version 1.15, the Calcite components will be externalized.
 */
import { CalciteButton } from '@esri/calcite-components-react'

const Widget = (props: AllWidgetProps<unknown>) => {
  return (
    <div className="jimu-widget m-2">
      <CalciteButton>This is a Calcite button, imported from <b>'@esri/calcite-components-react'</b></CalciteButton>
    </div>
  )
}

export default Widget
