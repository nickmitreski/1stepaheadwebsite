// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";


import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'Have You Heard? Agency Is Your Best Bet To Grow',
        screens: blogImg1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Jenefer Willy',
        thumb:'Web Design',
        authorTitle:'Web Designer',
        create_at: '28, February, 2021',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Nemo enim ipsam voluptatem quia voluptas.',
        screens: blogImg2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Konal Biry',
        thumb:'Graphics Design',
        authorTitle:'Graphics Designer',
        create_at: '27, February, 2021',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'I must explain to you how all this mistaken idea',
        screens: blogImg3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Jenefer Willy',
        thumb:'Web Design',
        authorTitle:'Web Designer',
        create_at: '26, February, 2021',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;