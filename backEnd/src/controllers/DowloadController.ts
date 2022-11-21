import { Application, Request, Response } from 'express';
import { DIR_VIEWS } from '../ts-env';

export default class DowloadController {
  public index(req: Request, res: Response): void {
    res.sendFile(DIR_VIEWS + '/dowload/formDowload.html');
  }

  public listMusics(req: Request, res: Response): void {}
}
