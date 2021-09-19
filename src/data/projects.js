import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Example React Application',
        description: 'A React App that I built involving JS and core web dev concepts!',
        link: 'https://github.com/lannstoirme/crown-clothing2',
        image: project1
    },
    {
        id: 2,
        title: 'My Mobile Application',
        description: 'A React Native Mobile Application available on Android and Apple that includes an AI chatbot',
        link: 'https://play.google.com/store/apps/details?id=com.lannstoirme.chillax',
        image: project2
    },
    {
        id: 3,
        title: 'A Bulk SMS Marketing Program in C#',
        description: 'An example C# application that uses Twilio to send out bulk email messages for marketing purposes',
        link: 'https://github.com/lannstoirme/smsmarketing',
        image: project3
    }
];

export default PROJECTS;
