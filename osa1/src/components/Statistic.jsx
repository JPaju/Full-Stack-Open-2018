import React from 'react'
import Display from './Display'

const Statistic = ({name, value}) => (
    <tr>
        <td><Display text={name}/></td>
        <td><Display text={value}/></td>
    </tr>
)

export default Statistic