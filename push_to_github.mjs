import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';

const token = process.argv[2] || process.env.GITHUB_TOKEN;
const repoUrl = `https://oauth2:${token}@github.com/gokulavasan123456sssg-sys/hi.git`;
const dir = '.';

async function push() {
  try {
    console.log('Attempting push with oauth2 token URL...');

    const pushResult = await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      ref: 'main',
      url: repoUrl,
      force: true
    });

    console.log('\nSUCCESS! All code has been pushed to GitHub:');
    console.log('https://github.com/gokulavasan123456sssg-sys/hi');
    console.log(JSON.stringify(pushResult, null, 2));
  } catch (err) {
    console.error('Error with oauth2 in URL:', err.message);

    try {
      console.log('Attempting push with username=gokulavasan123456sssg-sys...');
      const pushResult2 = await git.push({
        fs,
        http,
        dir,
        remote: 'origin',
        ref: 'main',
        url: 'https://github.com/gokulavasan123456sssg-sys/hi.git',
        force: true,
        onAuth: () => ({
          username: 'gokulavasan123456sssg-sys',
          password: token
        })
      });
      console.log('\nSUCCESS! All code has been pushed to GitHub:');
      console.log(pushResult2);
    } catch (err2) {
      console.error('Error with username/password auth:', err2.message);
      if (err2.data) console.error(err2.data);
    }
  }
}

push();
