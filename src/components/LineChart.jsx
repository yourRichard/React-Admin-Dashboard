import { ResponsiveBump } from '@nivo/bump'
import { useTheme } from '@mui/material';
import { tokens } from '../theme';
import {mockLineData as data} from '../data/mockData'

const LineChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBump
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke: colors.gray[200]
                    }
                },
                legend:{
                    text:{
                        fill: colors.gray[200]
                    }
                },
                ticks:{
                    line:{
                        stroke:colors.gray[200],
                        strokeWidth:1
                    },
                    text:{
                        fill: colors.gray[200]
                    }
                }
            },
            legends:{
                text:{
                    fill:
        colors.gray[200]
                }
            }
        }}
        xOuterPadding={0.7}
        yOuterPadding={0}
        colors={{ scheme: 'paired' }}
        lineWidth={3}
        activeLineWidth={7}
        inactiveLineWidth={5}
        inactiveOpacity={0}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
    />
  )
}

export default LineChart