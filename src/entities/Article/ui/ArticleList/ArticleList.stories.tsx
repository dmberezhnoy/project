import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticleView, IArticle } from '../../model/types';
import { ArticleList } from './ArticleList';

const articles = [
  {
    id: '1',
    title: 'JavaScript news asdfasfa fasf a fa',
    user: {
      id: '1',
      avatar: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg',
      username: 'admin',
    },
    subtitle: 'Что нового появилось в JS за 2022г?',
    img: 'https://cs11.pikabu.ru/post_img/2020/02/29/11/og_og_1583005972263333358.jpg',
    views: 1537,
    createdAt: '24.11.2022',
    type: [
      'IT',
      'SCIENCE',
      'POLITIC',
      'MEDICAL',
    ],
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'Руководство по JavaScript, часть 1',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Для того чтобы её написать, если вы пользуетесь Google Chrome, откройте меню браузера и выберите в нём команду Дополнительные инструменты > Инструменты разработчика. Окно браузера окажется разделённым на две части. В одной из них будет видна страница, в другой откроется панель с инструментами разработчика, содержащая несколько закладок. Нас интересует закладка Console (Консоль). Щёлкните по ней. Не обращайте внимания на то, что уже может в консоли присутствовать (для её очистки можете воспользоваться комбинацией клавиш Ctrl + L). Нас сейчас интересует приглашение консоли. Именно сюда можно вводить JavaScript-код, который выполняется по нажатию клавиши Enter. Введём в консоль следующее:',
        ],
      },
      {
        id: '2',
        type: 'CODE',
        code: 'console.log("Hello world");\n    alert("hello world!");\n    prompt("Hello world");',
      },
      {
        id: '3',
        type: 'TEXT',
        paragraphs: [
          'Этот текст можно ввести с клавиатуры, можно скопировать и вставить его в консоль. Результат будет одним и тем же, но, если вы учитесь программировать, рекомендуется вводить тексты программ самостоятельно, а не копировать их.',
          'После того, как текст программы оказался в консоли, нажмём клавишу Enter.',
          'Если всё сделано правильно — под этой строчкой появится текст Hello, world!. На всё остальное пока не обращайте внимания.',
        ],
      },
      {
        id: '4',
        type: 'IMAGE',
        src: 'https://habrastorage.org/r/w1560/getpro/habr/post_images/282/564/2d0/2825642d0e8b41dc4042b54d0898049a.png',
        title: 'Первая программа в консоли браузера — вывод сообщения в консоль',
      },
      {
        id: '5',
        type: 'TEXT',
        title: 'Руководство по JavaScript, часть 1',
        paragraphs: [
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Для того чтобы её написать, если вы пользуетесь Google Chrome, откройте меню браузера и выберите в нём команду Дополнительные инструменты > Инструменты разработчика. Окно браузера окажется разделённым на две части. В одной из них будет видна страница, в другой откроется панель с инструментами разработчика, содержащая несколько закладок. Нас интересует закладка Console (Консоль). Щёлкните по ней. Не обращайте внимания на то, что уже может в консоли присутствовать (для её очистки можете воспользоваться комбинацией клавиш Ctrl + L). Нас сейчас интересует приглашение консоли. Именно сюда можно вводить JavaScript-код, который выполняется по нажатию клавиши Enter. Введём в консоль следующее:',
        ],
      },
      {
        id: '6',
        type: 'CODE',
        code: 'class Observable {\n\n  observers = [];\n\n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n\n  unsubscribe(observer) {\n    this.observers.filter((o) => o !== observer);\n  }\n\n  notify(payload) {\n    this.observers.forEach((observer) => observer(payload));\n  }\n}\n\nexport default Observable;',
      },
      {
        id: '7',
        type: 'IMAGE',
        src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/a1b/1ef/b28/a1b1efb28e337e168bc6643a6af523e3.jpg',
        title: 'Схема оповещения о событиях',
      },
    ],
  },
  {
    id: '2',
    title: 'JavaScript news asdfasfa fasf a fa',
    user: {
      id: '1',
      avatar: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg',
      username: 'admin2',
    },
    subtitle: 'Что нового появилось в JS за 2022г?',
    img: 'https://cs11.pikabu.ru/post_img/2020/02/29/11/og_og_1583005972263333358.jpg',
    views: 1537,
    createdAt: '24.11.2022',
    type: [
      'IT',
      'SCIENCE',
      'POLITIC',
      'MEDICAL',
    ],
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'Руководство по JavaScript, часть 1',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Для того чтобы её написать, если вы пользуетесь Google Chrome, откройте меню браузера и выберите в нём команду Дополнительные инструменты > Инструменты разработчика. Окно браузера окажется разделённым на две части. В одной из них будет видна страница, в другой откроется панель с инструментами разработчика, содержащая несколько закладок. Нас интересует закладка Console (Консоль). Щёлкните по ней. Не обращайте внимания на то, что уже может в консоли присутствовать (для её очистки можете воспользоваться комбинацией клавиш Ctrl + L). Нас сейчас интересует приглашение консоли. Именно сюда можно вводить JavaScript-код, который выполняется по нажатию клавиши Enter. Введём в консоль следующее:',
        ],
      },
      {
        id: '2',
        type: 'CODE',
        code: 'console.log("Hello world");\n    alert("hello world!");\n    prompt("Hello world");',
      },
      {
        id: '3',
        type: 'TEXT',
        paragraphs: [
          'Этот текст можно ввести с клавиатуры, можно скопировать и вставить его в консоль. Результат будет одним и тем же, но, если вы учитесь программировать, рекомендуется вводить тексты программ самостоятельно, а не копировать их.',
          'После того, как текст программы оказался в консоли, нажмём клавишу Enter.',
          'Если всё сделано правильно — под этой строчкой появится текст Hello, world!. На всё остальное пока не обращайте внимания.',
        ],
      },
      {
        id: '4',
        type: 'IMAGE',
        src: 'https://habrastorage.org/r/w1560/getpro/habr/post_images/282/564/2d0/2825642d0e8b41dc4042b54d0898049a.png',
        title: 'Первая программа в консоли браузера — вывод сообщения в консоль',
      },
      {
        id: '5',
        type: 'TEXT',
        title: 'Руководство по JavaScript, часть 1',
        paragraphs: [
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Для того чтобы её написать, если вы пользуетесь Google Chrome, откройте меню браузера и выберите в нём команду Дополнительные инструменты > Инструменты разработчика. Окно браузера окажется разделённым на две части. В одной из них будет видна страница, в другой откроется панель с инструментами разработчика, содержащая несколько закладок. Нас интересует закладка Console (Консоль). Щёлкните по ней. Не обращайте внимания на то, что уже может в консоли присутствовать (для её очистки можете воспользоваться комбинацией клавиш Ctrl + L). Нас сейчас интересует приглашение консоли. Именно сюда можно вводить JavaScript-код, который выполняется по нажатию клавиши Enter. Введём в консоль следующее:',
        ],
      },
      {
        id: '6',
        type: 'CODE',
        code: 'class Observable {\n\n  observers = [];\n\n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n\n  unsubscribe(observer) {\n    this.observers.filter((o) => o !== observer);\n  }\n\n  notify(payload) {\n    this.observers.forEach((observer) => observer(payload));\n  }\n}\n\nexport default Observable;',
      },
      {
        id: '7',
        type: 'IMAGE',
        src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/a1b/1ef/b28/a1b1efb28e337e168bc6643a6af523e3.jpg',
        title: 'Схема оповещения о событиях',
      },
    ],
  },
  {
    id: '3',
    title: 'JavaSc3ript news asdfasfa fasf a fa',
    user: {
      id: '2',
      avatar: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg',
      username: 'admin2',
    },
    subtitle: 'Что нового появилось в JS за 2022г?',
    img: 'https://cs11.pikabu.ru/post_img/2020/02/29/11/og_og_1583005972263333358.jpg',
    views: 1537,
    createdAt: '24.11.2022',
    type: [
      'IT',
      'SCIENCE',
      'POLITIC',
      'MEDICAL',
    ],
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'Руководство по JavaScript, часть 1',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Для того чтобы её написать, если вы пользуетесь Google Chrome, откройте меню браузера и выберите в нём команду Дополнительные инструменты > Инструменты разработчика. Окно браузера окажется разделённым на две части. В одной из них будет видна страница, в другой откроется панель с инструментами разработчика, содержащая несколько закладок. Нас интересует закладка Console (Консоль). Щёлкните по ней. Не обращайте внимания на то, что уже может в консоли присутствовать (для её очистки можете воспользоваться комбинацией клавиш Ctrl + L). Нас сейчас интересует приглашение консоли. Именно сюда можно вводить JavaScript-код, который выполняется по нажатию клавиши Enter. Введём в консоль следующее:',
        ],
      },
      {
        id: '2',
        type: 'CODE',
        code: 'console.log("Hello world");\n    alert("hello world!");\n    prompt("Hello world");',
      },
      {
        id: '3',
        type: 'TEXT',
        paragraphs: [
          'Этот текст можно ввести с клавиатуры, можно скопировать и вставить его в консоль. Результат будет одним и тем же, но, если вы учитесь программировать, рекомендуется вводить тексты программ самостоятельно, а не копировать их.',
          'После того, как текст программы оказался в консоли, нажмём клавишу Enter.',
          'Если всё сделано правильно — под этой строчкой появится текст Hello, world!. На всё остальное пока не обращайте внимания.',
        ],
      },
      {
        id: '4',
        type: 'IMAGE',
        src: 'https://habrastorage.org/r/w1560/getpro/habr/post_images/282/564/2d0/2825642d0e8b41dc4042b54d0898049a.png',
        title: 'Первая программа в консоли браузера — вывод сообщения в консоль',
      },
      {
        id: '5',
        type: 'TEXT',
        title: 'Руководство по JavaScript, часть 1',
        paragraphs: [
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Для того чтобы её написать, если вы пользуетесь Google Chrome, откройте меню браузера и выберите в нём команду Дополнительные инструменты > Инструменты разработчика. Окно браузера окажется разделённым на две части. В одной из них будет видна страница, в другой откроется панель с инструментами разработчика, содержащая несколько закладок. Нас интересует закладка Console (Консоль). Щёлкните по ней. Не обращайте внимания на то, что уже может в консоли присутствовать (для её очистки можете воспользоваться комбинацией клавиш Ctrl + L). Нас сейчас интересует приглашение консоли. Именно сюда можно вводить JavaScript-код, который выполняется по нажатию клавиши Enter. Введём в консоль следующее:',
        ],
      },
      {
        id: '6',
        type: 'CODE',
        code: 'class Observable {\n\n  observers = [];\n\n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n\n  unsubscribe(observer) {\n    this.observers.filter((o) => o !== observer);\n  }\n\n  notify(payload) {\n    this.observers.forEach((observer) => observer(payload));\n  }\n}\n\nexport default Observable;',
      },
      {
        id: '7',
        type: 'IMAGE',
        src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/a1b/1ef/b28/a1b1efb28e337e168bc6643a6af523e3.jpg',
        title: 'Схема оповещения о событиях',
      },
    ],
  },
];

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {},
  args: {
    articles,
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const ListLight = Template.bind({});
ListLight.args = {
  view: ArticleView.LIST,
};
export const ListDark = Template.bind({});
ListDark.args = {
  view: ArticleView.LIST,
};
ListDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ListGreen = Template.bind({});
ListGreen.args = {
  view: ArticleView.LIST,
};
ListGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const PlateLight = Template.bind({});
PlateLight.args = {
  view: ArticleView.PLATE,
};
export const PlateDark = Template.bind({});
PlateDark.args = {
  view: ArticleView.PLATE,
};
PlateDark.decorators = [ThemeDecorator(Theme.DARK)];
export const PlateGreen = Template.bind({});
PlateGreen.args = {
  view: ArticleView.PLATE,
};
PlateGreen.decorators = [ThemeDecorator(Theme.GREEN)];

// LOADING

export const ListLoadingLight = Template.bind({});
ListLoadingLight.args = {
  view: ArticleView.LIST,
  isLoading: true,
};
export const ListLoadingDark = Template.bind({});
ListLoadingDark.args = {
  view: ArticleView.LIST,
  isLoading: true,
};
ListLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ListLoadingGreen = Template.bind({});
ListLoadingGreen.args = {
  view: ArticleView.LIST,
  isLoading: true,
};
ListLoadingGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const PlateLoadingLight = Template.bind({});
PlateLoadingLight.args = {
  view: ArticleView.PLATE,
  isLoading: true,
};
export const PlateLoadingDark = Template.bind({});
PlateLoadingDark.args = {
  view: ArticleView.PLATE,
  isLoading: true,
};
PlateLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
export const PlateLoadingGreen = Template.bind({});
PlateLoadingGreen.args = {
  view: ArticleView.PLATE,
  isLoading: true,
};
PlateLoadingGreen.decorators = [ThemeDecorator(Theme.GREEN)];
