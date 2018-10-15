# Study Guide Jekyll Theme

I adapted this theme from a blog posting theme I created. Operation is pretty simple, but there are a few steps and things to keep in mind.

1. To create a new section, create a [SECTION_NAME].md file in the \_category folder. In the front matter (the lines separated by top and bottom lines of three dashes (---)) include two fields:
  * tag: this should be the category name used to tag articles. Category names cannot have spaces in them, so if you want to have a space, instead use a hyphen. This will be edited out in the pages.
  * permalink: this is what will show up in the URL bar for the category page. It should be in the format of "/[category_name]". You should use a permalink that's identical to the tag except entirely lowercase letters.
You may find it helpful to reference the documents already created in the \_category folder in this if you're confused.
2. To create a new post, create a new .md file in the \_posts directory. It should include the following:
  * title: the title of your post
  * layout: this should always be "post"
  * categories: tags you're assigning the article
  * preview: What appears in the preview box in the feed and category page.

Images should go in the assets/images folder, but they really can go anywhere, if you want to mess with it.

Everything else should be automated, and posts use markdown syntax.

If you have any questions, [hit me up](mailto:jafayer@syr.edu).
