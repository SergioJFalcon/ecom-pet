
import { Outlet } from 'react-router-dom';

import Directory from '../components/directory/directory';

const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'dogs',
      imageUrl: 'https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg',
      route: '/shop/dogs'
    },
    {
      id: 2,
      title: 'cats',
      imageUrl: 'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg',
      route: '/shop/cats'
    },
    {
      id: 3,
      title: 'fish',
      imageUrl: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ',
      route: '/shop/fish'
    },
    {
      id: 4,
      title: 'small pets',
      imageUrl: 'https://www.worldlifeexpectancy.com/images/a/w/b/chinchilla-lanigera/chinchilla-lanigera.jpg',
      route: '/shop/small_pets'
    },
    {
      id: 5,
      title: 'birds',
      imageUrl: 'https://i.natgeofe.com/n/41517652-c24e-484c-9d90-aa54ed176144/4258658_2x3.jpg',
      route: '/shop/birds'
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
