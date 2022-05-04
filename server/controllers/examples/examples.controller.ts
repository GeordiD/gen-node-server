import { ExamplesService } from '@/services/examples.service';
import { Request, Response } from 'express';

export class ExamplesController {
  private examplesService: ExamplesService;

  constructor({ examplesService = new ExamplesService() } = {}) {
    this.examplesService = examplesService;
  }

  all(_: Request, res: Response): void {
    this.examplesService.all().then((r) => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    this.examplesService.byId(id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req: Request, res: Response): void {
    this.examplesService
      .create(req.body.name)
      .then((r) =>
        res.status(201).location(`/api/v1/examples/${r.id}`).json(r)
      );
  }
}

// export default new Controller();
