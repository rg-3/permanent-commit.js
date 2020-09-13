(function() {
  const pullCommitURLPattern = /^\/([A-Za-z0-9-_.]+)\/([A-Za-z0-9-_.]+)\/pull\/\d+\/commits\/([a-z0-9]+)$/;
  const commitsURLPattern    = /(\/pull\/\d+|\/commits)$/;

  const getPermaURL = (username, repo, sha) => {
    return `https://github.com/${username}/${repo}/commit/${sha}`;
  };

  const setPermaURL = (els) => {
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      const refsPullCommit = pullCommitURLPattern.test(el.getAttribute('href'));
      if (refsPullCommit) {
        el.setAttribute('href', getPermaURL(RegExp.$1, RegExp.$2, RegExp.$3));
      }
    }
  };

  const getNodes = () => {
    if (commitsURLPattern.test(location.href)) {
      const sel = '#commits_bucket .TimelineItem li a.js-navigation-open, #discussion_bucket .commit-message a';
      return document.querySelectorAll(sel);
    } else {
      return [];
    }
  };

  setInterval(() => setPermaURL(getNodes()), 500);
  setPermaURL(getNodes());
})();
