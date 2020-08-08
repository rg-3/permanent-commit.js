const commitURLPattern = /^\/(\w+)\/([A-Za-z0-9-_]+)\/pull\/\d+\/commits\/(\w+)$/;

const getPermaURL = (organization, repoName, commitSHA) => {
  return `https://github.com/${organization}/${repoName}/commit/${commitSHA}`;
};

const isPullCommitURL = (target) => {
  return commitURLPattern.test(target.getAttribute('href'));
};

const setPermaURL = (links) => {
  for(let i = 0; i < links.length; i++) {
    const link = links[i];
    if(isPullCommitURL(link)) {
      link.setAttribute('href', getPermaURL(RegExp.$1, RegExp.$2, RegExp.$3))
    }
  }
};

const getNodes = () => {
  return document.querySelectorAll('.TimelineItem-body li a');
};

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => setPermaURL(getNodes(), 1000));
  setPermaURL(getNodes());
});
