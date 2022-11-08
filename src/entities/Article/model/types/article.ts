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

export interface IArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleTypes[];
    blocks: ArticleBlockType[];
}
