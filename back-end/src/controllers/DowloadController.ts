import { Request, Response } from 'express';
import { Options, PythonShell } from 'python-shell';
import { DIR_SCRIPTS } from '../ts-env';

export default class DowloadController {
  public listMusics(req: Request, res: Response): void {
    const link: string = req.body.playlistLink;
    const fileScript: string =
      DIR_SCRIPTS + '/python_create_json_list_music.py';
  }

  public dowload(req: Request, res: Response): void {
    const link: string = req.body.playlistLink;
    const fileScript: string = DIR_SCRIPTS + '/python_dowload_mp3.py';
    const args: Options = { args: [link] };

    PythonShell.run(fileScript, args, function (err) {
      if (err) {
        res.send(`<pre>${err.traceback} ${JSON.stringify(args)}</pre>`);
        throw err;
      }

      res.send('Finished');
      console.log('finished');
    });
  }
}
