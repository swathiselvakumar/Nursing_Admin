import React from 'react'
import { DashboardStyles } from './styles'
import PremiumPlan from './PremiumPlan'
import TableViewOrg from '../Report/Table/TableView'
export default function DashboardPage() {
  return ( 
    <div>
      <DashboardStyles>
        <PremiumPlan/>
        <div style={{padding:"20px"}}>
          <TableViewOrg/>
        </div>

      </DashboardStyles>
    </div>
  )
}


