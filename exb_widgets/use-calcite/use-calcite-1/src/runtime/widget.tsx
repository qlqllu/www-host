import { React, type AllWidgetProps } from 'jimu-core'
import { CalciteButton } from '@esri/calcite-components-react'

const Widget = (props: AllWidgetProps<unknown>) => {
  return (
    <div className="jimu-widget m-2">
      <CalciteButton>This is a Calcite button, imported from <b>'@esri/calcite-components-react'</b></CalciteButton>
    </div>
  )
}

export default Widget
