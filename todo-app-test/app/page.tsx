'use client'

import { Flex, Heading, IconButton, Link, VStack, useColorMode, useToast, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMoon, FaSun, FaTwitter, } from "react-icons/fa";
import AddTask from "../components/AddTask";
import TaskList from "../components/tasks";
import Task from './type';


export default function Home() {
  const toast = useToast();
  const [tasks, setTasks] = useState<Task[]>(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function deleteTaskAll() {
    setTasks([]);
  }

  function checkTask(id: number) {
    const newTasksCheck = tasks.map((task) => {
      if (task.id === id) {
        task.check = !task.check;
      }
      return task;
    });

    setTasks(newTasksCheck);
  }

  function updateTask(id: number, body: string, onClose: () => void) {
    const info = body.trim();

    if (!info) {
      toast({
        title: "Digite sua tarefa",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });

      return;
    }

    const newTasksUpdate = tasks.map((task) => {
      if (task.id === id) {
        task.body = body;
        task.check = false;
      }
      return task;
    });

    setTasks(newTasksUpdate);

    onClose();
  }

  function addTask(task: Task) {
    setTasks([...tasks, task]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4} minH="100vh" pb={28}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound
        size="md"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />

      <Heading
        p="5"
        fontWeight="extrabold"
        size="xl"
        bgGradient="linear(to-l, blue.300, blue.500)"
        bgClip="text"
      >
        Todo App
      </Heading>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        deleteTaskAll={deleteTaskAll}
        checkTask={checkTask}
      />

      <Flex position="absolute" bottom="5">
        <Link href="https://github.com/raminhuk" target="_blank">
          <IconButton icon={<FaGithub />} isRound size="md" m="1" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/fabio-junior-raminhuk-740669121/"
          target="_blank"
        >
          <IconButton icon={<FaLinkedin />} isRound size="md" m="1" />
        </Link>
        <Link href="https://www.instagram.com/fabiormk/" target="_blank">
          <IconButton icon={<FaInstagram />} isRound size="md" m="1" />
        </Link>
        <Link href="https://twitter.com/fabio_rmk" target="_blank">
          <IconButton icon={<FaTwitter />} isRound size="md" m="1" />
        </Link>
        <Link href="https://www.facebook.com/fabio.raminhuk" target="_blank">
          <IconButton icon={<FaFacebook />} isRound size="md" m="1" />
        </Link>
      </Flex>
    </VStack>
  );
}
