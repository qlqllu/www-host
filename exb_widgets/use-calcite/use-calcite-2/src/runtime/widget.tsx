import { React, type AllWidgetProps } from 'jimu-core'
import { CalciteButton } from 'calcite-components'

const Widget = (props: AllWidgetProps<unknown>) => {
  return (
    <div className="jimu-widget m-2">
      <CalciteButton>This is a Calcite button, imported from <b>'calcite-components'</b></CalciteButton>
    </div>
  )
}

export default Widget
