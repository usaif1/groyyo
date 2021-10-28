//imports
import user from '../assets/user.png';

//initial state
const initialState = {
  posts: [
    {
      id: 0,
      owner: 'Saif',
      description:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      title: 'Software Developer, XYZ',
      time: '1h',
      img: user,
      likes: ['alind', 'rajat', 'ankit'],
      comments: [
        {
          id: 0,
          by: 'Ankit',
          title: 'Software Developer, XYZ',
          desc: 'good post',
          img: user,
        },
        {
          id: 1,
          by: 'Rajat',
          title: 'Software Developer, XYZ',
          desc: 'very informative',
          img: user,
        },
      ],
    },
    {
      id: 1,
      owner: 'Ankit',
      description:
        'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      title: 'Software Developer, XYZ',
      time: '2h',
      img: user,
      likes: ['alind', 'rajat', 'ankit'],
      comments: [
        {
          id: 0,
          by: 'Saif',
          title: 'Software Developer, XYZ',
          desc: 'good post',
          img: user,
        },
        {
          id: 1,
          by: 'Alind',
          title: 'Software Developer, XYZ',
          desc: 'very informative',
          img: user,
        },
      ],
    },
    {
      id: 2,
      owner: 'Saif',
      description:
        'This is a my first post. sadjahsdjaadjaskdjasljdashudhnaskdfhasjkdfhjsfhasduihfasd',
      title: 'Software Developer, XYZ',
      time: '1h',
      img: user,
      likes: ['alind', 'rajat', 'ankit'],
      comments: [
        {
          id: 0,
          by: 'Ankit',
          title: 'Software Developer, XYZ',
          desc: 'good post',
          img: user,
        },
        {
          id: 1,
          by: 'Rajat',
          title: 'Software Developer, XYZ',
          desc: 'very informative',
          img: user,
        },
      ],
    },
    {
      id: 3,
      owner: 'Ankit',
      description:
        'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      title: 'Software Developer, XYZ',
      time: '2h',
      img: user,
      likes: ['alind', 'rajat', 'ankit'],
      comments: [
        {
          id: 0,
          by: 'Saif',
          title: 'Software Developer, XYZ',
          desc: 'good post',
          img: user,
        },
        {
          id: 1,
          by: 'Alind',
          title: 'Software Developer, XYZ',
          desc: 'very informative',
          img: user,
        },
      ],
    },
    {
      id: 4,
      owner: 'Saif',
      description:
        'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit',
      title: 'Software Developer, XYZ',
      time: '1h',
      img: user,
      likes: ['alind', 'rajat', 'ankit'],
      comments: [
        {
          id: 0,
          by: 'Ankit',
          title: 'Software Developer, XYZ',
          desc: 'good post',
          img: user,
        },
        {
          id: 1,
          by: 'Rajat',
          title: 'Software Developer, XYZ',
          desc: 'very informative',
          img: user,
        },
      ],
    },
    {
      id: 5,
      owner: 'Ankit',
      description:
        'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
      title: 'Software Developer, XYZ',
      time: '2h',
      img: user,
      likes: ['alind', 'rajat', 'ankit'],
      comments: [
        {
          id: 0,
          by: 'Saif',
          title: 'Software Developer, XYZ',
          desc: 'good post',
          img: user,
        },
        {
          id: 1,
          by: 'Alind',
          title: 'Software Developer, XYZ',
          desc: 'very informative',
          img: user,
        },
      ],
    },
    {
      id: 6,
      owner: 'Ankit',
      description:
        'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
      title: 'Software Developer, XYZ',
      time: '2h',
      img: user,
      likes: ['alind', 'rajat', 'ankit'],
      comments: [
        {
          id: 0,
          by: 'Saif',
          title: 'Software Developer, XYZ',
          desc: 'good post',
          img: user,
        },
        {
          id: 1,
          by: 'Alind',
          title: 'Software Developer, XYZ',
          desc: 'very informative',
          img: user,
        },
      ],
    },
    {
      id: 7,
      owner: 'Saif',
      description:
        'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
      title: 'Software Developer, XYZ',
      time: '1h',
      img: user,
      likes: ['alind', 'rajat', 'ankit'],
      comments: [
        {
          id: 0,
          by: 'Ankit',
          title: 'Software Developer, XYZ',
          desc: 'good post',
          img: user,
        },
        {
          id: 1,
          by: 'Rajat',
          title: 'Software Developer, XYZ',
          desc: 'very informative',
          img: user,
        },
      ],
    },
    {
      id: 8,
      owner: 'Ankit',
      description:
        'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
      title: 'Software Developer, XYZ',
      time: '2h',
      img: user,
      likes: ['alind', 'rajat', 'ankit'],
      comments: [
        {
          id: 0,
          by: 'Saif',
          title: 'Software Developer, XYZ',
          desc: 'good post',
          img: user,
        },
        {
          id: 1,
          by: 'Alind',
          title: 'Software Developer, XYZ',
          desc: 'very informative',
          img: user,
        },
      ],
    },
  ],
};

export default initialState;
