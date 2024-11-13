import { Popover, Button } from 'antd'
import React from 'react'

const CurrentUser = () => {
  return (
    <div>
        <Popover
            placement='bottomRight'
            trigger="click"
            overlayInnerStyle={{ padding :0}}
            overlayStyle={{ zIndex: 999}}
        >

        </Popover>
    </div>
  )
}

export default CurrentUser