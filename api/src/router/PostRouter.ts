import { Router, Request, Response } from 'express';
import Post from '../models/Post';
import User from '../models/User';


export class PostRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  // get all of the posts in the database
  public all(req: Request, res: Response): void {
    Post.find()
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.json({ error });
      })
  }

  // get a single post by params of 'slug'
  public one(req: Request, res: Response): void {
    const slug: string = req.params.slug;

    Post.findOne({ slug })
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error });
      })
  }


  // create a new post
  public create(req: any, res: Response): void {
    const title: string = req.body.title;
    const slug: string = req.body.slug;
    const content: string = req.body.content;
    const summary: string = req.body.summary;
    const tags: string[] = req.body.tags;
    const featuredImage: string = req.body.featuredImage;
    const category: string = req.body.category;
    const published: boolean = req.body.published;
    let userId: string = "";
    if (!title || !slug || !content) {
      res.status(409).json({ message: 'All Fields Required.' });
    }
    User.findOne({ username: req.user.username }).then((x: any) => {
      userId = x._id;
      const post = new Post({
        title,
        slug,
        content,
        featuredImage,
        category,
        published,
        user:userId,
        summary,
        tags
      });

      post.save()
        .then((data) => {
          res.status(200).json({ data });
        })
        .catch((error) => {
          res.status(500).json({ error });
        })
    });
  }


  // update post by params of 'slug'
  public update(req: Request, res: Response): void {
    const slug: string = req.body.slug;

    Post.findOneAndUpdate({ slug }, req.body)
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error });
      })
  }


  // delete post by params of 'slug'
  public delete(req: Request, res: Response): void {
    const slug: string = req.body.slug;

    Post.findOneAndRemove({ slug })
      .then(() => {
        res.status(204).end();
      })
      .catch((error) => {
        res.status(500).json({ error });
      })
  }



  routes() {
    this.router.get('/list/', this.all);
    this.router.get('/:slug', this.one);
    this.router.post('/create/', this.create);
    this.router.put('/:slug', this.update);
    this.router.delete('/:slug', this.delete);
  }


}

const postRoutes = new PostRouter();
postRoutes.routes();

export default postRoutes.router;