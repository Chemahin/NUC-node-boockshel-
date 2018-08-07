import StartPage from '../components/startPage/StartPage';
import ProjectMain from '../components/project/ProjectMain';
import Polls from '../components/polls/Polls';
import Questions from '../components/questions/Questions';

export default [
    { path: '/', component: StartPage },
    { path: '/projects', component: ProjectMain },
    { path: '/polls', component: Polls },
    { path: '/questions', component: Questions }
]; 