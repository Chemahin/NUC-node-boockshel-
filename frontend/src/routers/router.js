import StartPage from '../components/startPage/StartPage';
import ProjectMain from '../components/project/ProjectMain';
import PollsMain from '../components/polls/PollsMain';
import CreatePoll from '../components/polls/CreatePoll';
import QuestionsMain from '../components/questions/QuestionsMain';
import CreateProject from '../components/project/CreateProject';


export default [
    { path: '/', component: StartPage },
    { path: '/projects', component: ProjectMain },
    { path: '/polls', component: PollsMain },
    { path: '/questions', component: QuestionsMain },
    { path: '/projects/create', component: CreateProject },
    { path: '/polls/create', component: CreatePoll },
]; 