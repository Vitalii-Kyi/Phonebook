import { createGlobalStyle } from 'styled-components';
import tasksImage from '../images/tasks.jpg';

export const TasksGlobalStyle = createGlobalStyle`
  body{
    background-image: url(${tasksImage});
  }
`;
