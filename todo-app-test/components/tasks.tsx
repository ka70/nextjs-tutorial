import { Box, Flex, HStack, Image, StackDivider, Text, VStack } from '@chakra-ui/react';
import { DeleteAllTask, DeleteTask } from './DeleteTask';
import UpdateTask from './UpdateTask';
import { TaskListProps } from './type';

function TaskList({ tasks, updateTask, deleteTask, deleteTaskAll, checkTask }: TaskListProps) {
    if (!tasks.length) {
        return (
            <>
                <Box maxW='80%'>
                    <Image mt='20px' w='98%' maxW='350' src='./empty.svg' alt='タスクが空です:(' />
                </Box>
            </>
        );
    }

    return (
        <>
            <VStack
                divider={<StackDivider />}
                borderColor='gray.100'
                borderWidth='2px'
                p='5'
                borderRadius='lg'
                w='100%'
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
                alignItems='stretch'
            >
                {tasks.map((task) => (
                    <HStack key={task.id} opacity={task.check === true ? '0.2' : '1'}>
                        <Text
                            w='100%'
                            p='8px'
                            borderRadius='lg'
                            as={task.check === true ? 's' : undefined}
                            cursor='pointer'
                            onClick={() => checkTask(task.id)}
                        >
                            {task.body}
                        </Text>
                        <DeleteTask task={task} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} />
                        <UpdateTask task={task} updateTask={updateTask} />
                    </HStack>
                ))}
            </VStack>

            <Flex>
                <DeleteAllTask deleteTaskAll={deleteTaskAll} />
            </Flex>
        </>
    );
}

export default TaskList;
