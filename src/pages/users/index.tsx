import React from "react";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
    return (
        <Box>
            <Header />


            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>

                        <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='blue'
                            leftIcon={<Icon as={RiAddLine}
                                fontSize="20"
                            />}
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='blue' />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de Cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='blue' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Silvio Félix</Text>
                                        <Text fontSize='sm' color='gray.300'>silvio.felix32@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>29 de Novembro de 2021</Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine}
                                            fontSize="16" />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='blue' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Silvio Félix</Text>
                                        <Text fontSize='sm' color='gray.300'>silvio.felix32@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>29 de Novembro de 2021</Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine}
                                            fontSize="16" />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='blue' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Silvio Félix</Text>
                                        <Text fontSize='sm' color='gray.300'>silvio.felix32@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>29 de Novembro de 2021</Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine}
                                            fontSize="16" />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}