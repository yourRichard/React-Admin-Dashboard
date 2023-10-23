import { ResponsivePie } from '@nivo/pie'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import {mockPieData as data} from '../data/mockData'

const PieCharts = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <ResponsivePie
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
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    startAngle={-85}
    innerRadius={0.5}
    cornerRadius={4}
    activeOuterRadiusOffset={8}
    colors={{ scheme: 'nivo' }}
    borderWidth={3}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.2
            ]
        ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextOffset={10}
    arcLinkLabelsTextColor={colors.gray[400]}
    arcLinkLabelsStraightLength={25}
    arcLinkLabelsThickness={3}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={13}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                2
            ]
        ]
    }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    
    legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]}
/>

  )
}

export default PieCharts