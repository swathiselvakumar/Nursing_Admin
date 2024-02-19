import React from 'react'
import { DashboardStyles } from './styles'
import PremiumPlan from './PremiumPlan'
import TableViewOrg from '../Report/Table/TableView'
export default function DashboardPage() {
  return ( 
    <div>
      <DashboardStyles>
        <PremiumPlan/>
      </DashboardStyles>
      <div>
          <TableViewOrg/>
        </div>
    </div>
  )
}


