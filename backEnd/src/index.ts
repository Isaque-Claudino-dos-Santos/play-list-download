import app from './server';
import { DIR_SCRIPTS, DIR_VIEWS } from './ts-env';

import { Options, PythonShell } from 'python-shell';
import DowloadController from './controllers/DowloadController';

const dowloadController = new DowloadController();

app.get('/', dowloadController.index);

app.get('/viewList', (req, res) => {
  const link: string = req.body.playlistLink;
  const fileScript: string = DIR_SCRIPTS + '/python_create_json_list_music.py';
});

app.post('/dowload', (req, res) => {
  const link: string = req.body.playlistLink;
  const fileScript: string = DIR_SCRIPTS + '/python_dowload_mp3.py';

  const args: Options = { args: [link] };

  PythonShell.run(fileScript, args, function (err) {
    if (err) throw err;

    console.log('finished');
  });
});
