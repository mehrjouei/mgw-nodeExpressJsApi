import { Router, Request, Response } from 'express';
import Resources from '../models/Resources';
import * as app from '../server';
import Roles from '../models/Roles';
class ResourcesRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public all(req: Request, res: Response): void {

    Resources.find()
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error });
      })

  }

  public create(req: Request, res: Response): void {
    const name: string = req.body.name;
    const description: string = req.body.description;
    const resourceContentReg: string = req.body.resourceContentReg;
    const status: string = req.body.status;
    const roleId: string = req.body.roleId;

    const resources = new Resources({
      name,
      description,
      resourceContentReg,
      status
    });

    resources.save()
      .then((data) => {
        console.log(data);
        console.log(roleId);
        Roles.findById(roleId).then((relatedRole:any)=>{
          console.log(relatedRole);
          relatedRole.resources.push(data._id);
          relatedRole.save()
          .then((d:any)=>{
            res.status(201).json({ d });
          })
          .catch((er:any) => {
            res.status(500).json({ er });
          })
        })
      })
      .catch((error) => {
        res.status(500).json({ error });
      })

  }

  // set up our routes
  routes() {
    this.router.get('/list/', this.all);
    // this.router.get('/:id',this.one);
    this.router.post('/create/', this.create);
    // this.router.put('/:id',this.update);
    // this.router.delete('/:id',this.delete);
  }
}

const resourcesRoutes = new ResourcesRouter();
resourcesRoutes.routes();
export default resourcesRoutes.router;
