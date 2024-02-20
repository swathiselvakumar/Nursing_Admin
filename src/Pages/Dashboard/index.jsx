import React from 'react'
import { DashboardStyles } from './styles'
import PremiumPlan from './PremiumPlan'
import TableViewOrg from '../Report/Table/TableView'
import DailyTestTable from './dailytesttb'
export default function DashboardPage() {
  return ( 
    <div>
      <DashboardStyles>
        <PremiumPlan/>
      </DashboardStyles>
      <div style={{padding:"20px"}}>
          <TableViewOrg/>
        </div>
        <div style={{padding:"20px"}}>
          <DailyTestTable/>
        </div>
    </div>
  )
}


