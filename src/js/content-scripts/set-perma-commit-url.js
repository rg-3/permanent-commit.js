(function() {
  const pullCommitURLPattern = /^\/(\w+)\/([A-Za-z0-9-_]+)\/pull\/\d+\/commits\/(\w+)$/;
  const commitsURLPattern    = /\/commits$/;

  const getPermaURL = (organization, repoName, commitSHA) => {
    return `https://github.com/${organization}/${repoName}/commit/${commitSHA}`;
  };

  const setPermaURL = (links) => {
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      if (isPullCommitURL(link)) {
        link.setAttribute('href', getPermaURL(RegExp.$1, RegExp.$2, RegExp.$3))
      }
    }
  };

  const isPullCommitURL = (target) => {
    return pullCommitURLPattern.test(target.getAttribute('href'));
  };

  const getNodes = () => {
    if (commitsURLPattern.test(location.href)) {
      return document.querySelectorAll('.TimelineItem-body li a');
    } else {
      return [];
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => setPermaURL(getNodes()), 1000);
    setPermaURL(getNodes());
  });
})();
