//imports
import user from '../assets/user.png';

//initial state
const initialState = {
  posts: [
    {
      id: 0,
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
      id: 1,
      owner: 'Ankit',
      description: 'This is a my Second post',
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
      description: 'This is a my Second post',
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
      id: 5,
      owner: 'Ankit',
      description: 'This is a my Second post',
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
      description: 'This is a my Second post',
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
      id: 8,
      owner: 'Ankit',
      description: 'This is a my Second post',
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
