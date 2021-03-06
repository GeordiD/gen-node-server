import { _examplesService } from '@/services/examples.service';
import { Request, Response } from 'express';

export class ExamplesController {
  all(_: Request, res: Response): void {
    _examplesService.all().then((r) => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    _examplesService.byId(id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req: Request, res: Response): void {
    _examplesService.create(req.body.name).then((_) =>
      // res.status(201).location(`/api/v1/examples/${r.id}`).json(r)
      res.status(200).send()
    );
  }
}

export const _examplesController = new ExamplesController();
