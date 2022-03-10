import React, { Fragment,useState  } from 'react'
import StatCards from './shared/StatCards'
import PaginationTable from '../material-kit/tables/PaginationTable'
import { Grid } from '@mui/material'
import { styled, useTheme } from '@mui/system'
import ComparisonChart from 'app/views/cards/echarts/ComparisonChart'
import SimpleCard from 'app/components/cards/SimpleCard'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumb from 'app/components/Breadcrumb/Breadcrumb'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const DateLabel = styled('span')(({type}) => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    marginLeft:'20px',
    marginRight:'5px'
}))

const SearchFrom = styled('div')(({ theme }) => ({
    display:'flex',

}))
const SearchTo = styled('div')(({ theme }) => ({
    display:'flex',

}))

const DateRow = styled('div')(({ theme }) => ({
   display:'flex',
   flexDirection:'row',
   justifyContent:'flex-end',
   marginBottom:'20px'
}))

const Analytics = () => {
    const { palette } = useTheme()
    const theme = useTheme()
    const [startDate, setStartDate] = useState(new Date());
    const option = {
    series: [
        {
            data: [30, 40, 20, 50, 40, 80, 90],
            type: 'line',
            stack: 'This month',
            name: 'This month',
            smooth: true,
            symbolSize: 4,
            lineStyle: {
                width: 4,
            },
        },
        {
            data: [20, 50, 15, 50, 30, 70, 95],
            type: 'line',
            stack: 'Last month',
            name: 'Last month',
            smooth: true,
            symbolSize: 4,
            lineStyle: {
                width: 4,
            },
        },
    ]}
    return (
        <Container>
        <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard' },
                    ]}
                />
            </div>
        <Fragment>
        
            {/* <ContentBox className="analytics"> */}

                <Grid  spacing={3}>
                    <Grid  >
                        <StatCards />
                        <SimpleCard title="Comparison Chart">
                <ComparisonChart
                 height="350px"
                 option={{
                    ...option,
                    color : [
                        theme.palette.primary.dark,
                        // theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]
                }}
                   
                />
            </SimpleCard>
            
                    </Grid>
<Grid  style={{marginTop:'20px'}}>
<SimpleCard title="Racents operations">
                <DateRow>
                    <SearchFrom> 
                    <DateLabel type="from">From</DateLabel>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </SearchFrom>
                    <SearchTo> 
                    <DateLabel type="to">To</DateLabel>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </SearchTo>
                </DateRow>
         <PaginationTable />
     </SimpleCard> 
</Grid>
                </Grid>
                
            {/* </ContentBox> */}
           
        </Fragment>
        
     </Container>
    )
}

export default Analytics
