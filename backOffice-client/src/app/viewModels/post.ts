export interface IPost {
    createTime: Date
    title: String
    slug: String
    content: String
    summary: String
    featuredImage: String
    tags: String[]
    user: string
    published: Boolean
    verified: Boolean
}

export class Post {
    createTime: Date
    title: String
    slug: String
    content: String
    summary: String
    featuredImage: String
    tags: String[]
    user: string
    published: Boolean
    verified: Boolean

    constructor(_post: IPost) {
        this.createTime=_post.createTime;
        this.title=_post.title;
        this.slug=_post.slug;
        this.content=_post.content;
        this.summary=_post.summary;
        this.featuredImage=_post.featuredImage;
        this.tags=_post.tags;
        this.user=_post.user;
        this.published=_post.published;
        this.verified=_post.verified;
    }
}
