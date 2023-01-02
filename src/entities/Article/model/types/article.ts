import { IUser } from 'entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED_AT = 'createdAt'
}

export enum ArticleBlockTypes {
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
    CODE ='CODE',
}

export interface IArticleBlockBase {
    id: string;
    type: ArticleBlockTypes;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
    type: ArticleBlockTypes.CODE;
    code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
    type: ArticleBlockTypes.IMAGE;
    src: string;
    title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
    type: ArticleBlockTypes.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlockType = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;

export enum ArticleTypes {
    IT ='IT',
    SCIENCE ='SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    LIST = 'LIST',
    PLATE = 'PLATE'
}

export interface IArticle {
    id: string;
    user: IUser;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleTypes[];
    blocks: ArticleBlockType[];
}
