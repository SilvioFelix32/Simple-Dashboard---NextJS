import React from "react";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

//dynamic works for lazing loading, wich means will load the component dinamic
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false, //this will make de Chart to load onli on the serverside
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime' as any,
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
       /*  labels: {
            datetimeFormater: {
                year: 'YYYY',
                month: 'MMM \ yy',
                day: 'dd MMM',
                hour: 'HH:mm'
            }
        }, */
        categories: [
            '2021-11-23T00:00:00.000Z',
            '2021-11-24T00:00:00.000Z',
            '2021-11-25T00:00:00.000Z',
            '2021-11-26T00:00:00.000Z',
            '2021-11-27T00:00:00.000Z',
            '2021-11-29T00:00:00.000Z',
            '2021-11-30T00:00:00.000Z',
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        },
    }
};

const series = [
    { name: 'series1', data: [30, 120, 10, 28, 51, 18, 109] }
]

export default function Dashboard() {
    return (
        <Flex direction='column' h='100vh'>
            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <SimpleGrid flex='1' gap='4' minChildWidth='320px' aling='flex-start'>
                    <Box
                        p='8'
                        bgColor='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                        <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
                        <Chart options={options} series={series} type='area' height={160} />
                    </Box>
                    <Box
                        p='8'
                        bgColor='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                        <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
                        <Chart options={options} series={series} type='area' height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}