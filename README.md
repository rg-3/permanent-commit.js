<p align="center">
<img alt="screenshot" src="/src/images/demo.png">
</p>

**Table of contents**

* <a href='#introduction'>Introduction</a>
* <a href='#background'>Background</a>
* <a href='#install'>Install</a>
* <a href='#icon-credit'>Credits</a>
* <a href='#license'>License</a>

## <a id='introduction'>Introduction</a>

A Chrome extension that rewrites the commit URLs on a GitHub pull request to
permanent URLs.

## <a id='background'>Background</a>

The pull request "Commits" tab links to commits using a URL that will expire
after a force push removes the referenced commit(s). Any conversation that
referenced a URL (for example, by copy & paste) from the "Commits" tab suddenly
has broken links and I think that's bad for future readers who come along and
click on them.

The good news is that the commit is not totally lost and it can be referenced
using a different, permanent URL (`/<org_name/<repo_name/commit/<sha>`). This
extension takes that permanent URL and updates the "Commits" tab to reference
it instead.

## <a id='install'> Install </a>

This extension is not on the Chrome webstore and I'm not sure I will publish
it on the webstore. For the time being, it can be installed as an unpacked
extension.

**Step 1**

Clone the repository:

    git clone https://github.com/rg-3/permanent-commit.js

**Step 2**

  * Open Chrome
  * Visit `chrome://extensions`
  * Make sure the `Developer mode` checkbox is on.  
  * Click `Load unpacked extension`.
  * Choose the `src/` directory from the cloned repository directory.
  * Done!

## <a id='icon-credit'>Credits</a>

Credit and thanks to [IconKing](https://freeicons.io/profile/3) from
[freeicons.io](https://freeicons.io) for providing the [icons](src/images)
used by this extension.

## <a id='license'>License</a>

The MIT license, see [./src/LICENSE.txt](./src/LICENSE.txt) for details.
