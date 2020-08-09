(function() {
  const pullCommitURLPattern = /^\/([A-Za-z0-9-_.]+)\/([A-Za-z0-9-_.]+)\/pull\/\d+\/commits\/([a-z0-9]+)$/;
  const commitsURLPattern    = /\/commits$/;

  const getPermaURL = (username, repoName, sha) => {
    return `https://github.com/${username}/${repoName}/commit/${sha}`;
  };

  const setPermaURL = (links) => {
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      if (isPullCommitURL(link)) {
        link.setAttribute('href', getPermaURL(RegExp.$1, RegExp.$2, RegExp.$3));
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

  setInterval(() => setPermaURL(getNodes()), 1000);
  setPermaURL(getNodes());
})();
