# SEFCOM Lab Website

Live at : [sefcom.asu.edu](https://sefcom.asu.edu)

## Update the Website

The SEFCOM Lab Website runs using Github Pages, which runs Jekyll under the hood to automatically build the website.
Everyone in the lab is in charge of keeping the website up to date with current members and publications.
You can do this by creating a pull request.

### Add a person
Create a PR with the following:
- Add the person's info here: [_data/people.yml](_data/people.yml)
- Add the person's photo here: [assets/images](assets/images)
> :warning: **Make sure the photo has square dimensions**

### Add a publication
Create a PR with the following:
- Add the publication's info here: [_data/publications.yml](_data/publications.yml)
- Add the publication's PDF and BibTex here: [publications](publications)
> :warning: **The list of publications is sorted reverse-chronologically**

## Building the Site Locally

If for some reason you are interested in building the site locally to test changes (you probaly don't need to), you can do so with the following commands:

```bash
git clone https://github.com/sefcom/sefcom.github.io
cd sefcom.github.io
docker run -it --rm -v "$PWD":/usr/src/app -p 4000:4000 starefossen/github-pages
```

You can then view the local site at http://localhost:4000/.

## Developers / Maintainers (Reach out to them for any questions):

- [Connor Nelson](https://connornelson.com) (@kanak on Slack)
