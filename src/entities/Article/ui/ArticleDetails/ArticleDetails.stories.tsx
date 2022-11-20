import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleBlockTypes, ArticleTypes } from '../../model/types';
import { ArticleDetails } from './ArticleDetails';

export default {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  argTypes: {},
} as ComponentMeta<typeof ArticleDetails>;

const article = {
  id: '1',
  title: 'JavaScript news',
  subtitle: 'Что нового появилось в JS за 2022г?',
  img: 'https://cs11.pikabu.ru/post_img/2020/02/29/11/og_og_1583005972263333358.jpg',
  views: 1537,
  createdAt: '24.11.2022',
  type: [ArticleTypes.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockTypes.TEXT,
      title: 'Руководство по JavaScript, часть 1',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Для того чтобы её написать, если вы пользуетесь Google Chrome, откройте меню браузера и выберите в нём команду Дополнительные инструменты > Инструменты разработчика. Окно браузера окажется разделённым на две части. В одной из них будет видна страница, в другой откроется панель с инструментами разработчика, содержащая несколько закладок. Нас интересует закладка Console (Консоль). Щёлкните по ней. Не обращайте внимания на то, что уже может в консоли присутствовать (для её очистки можете воспользоваться комбинацией клавиш Ctrl + L). Нас сейчас интересует приглашение консоли. Именно сюда можно вводить JavaScript-код, который выполняется по нажатию клавиши Enter. Введём в консоль следующее:',
      ],
    },
    {
      id: '2',
      type: ArticleBlockTypes.CODE,
      code: 'console.log("Hello world");\n    alert("hello world!");\n    prompt("Hello world");',
    },
    {
      id: '3',
      type: ArticleBlockTypes.TEXT,
      paragraphs: [
        'Этот текст можно ввести с клавиатуры, можно скопировать и вставить его в консоль. Результат будет одним и тем же, но, если вы учитесь программировать, рекомендуется вводить тексты программ самостоятельно, а не копировать их.',
        'После того, как текст программы оказался в консоли, нажмём клавишу Enter.',
        'Если всё сделано правильно — под этой строчкой появится текст Hello, world!. На всё остальное пока не обращайте внимания.',
      ],
    },
    {
      id: '3',
      type: ArticleBlockTypes.IMAGE,
      src: 'https://habrastorage.org/r/w1560/getpro/habr/post_images/282/564/2d0/2825642d0e8b41dc4042b54d0898049a.png',
      title: 'Первая программа в консоли браузера — вывод сообщения в консоль',
    },
  ],
};

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({
  articleDetails: {
    data: article,
  },
})];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({
  articleDetails: {
    isLoading: true,
  },
})];

export const Error = Template.bind({});
Error.decorators = [StoreDecorator({
  articleDetails: {
    error: 'Error',
  },
})];
