# Blog Setup Instructions

Your blog is now set up with **Decap CMS** (formerly Netlify CMS), a Git-based content management system. You can manage all your blog posts through a web interface without touching code!

## Initial Setup (One-Time)

### 1. Enable GitHub OAuth for Decap CMS

To enable authentication, you need to create a GitHub OAuth App:

1. Go to https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in the form:
   - **Application name**: Your Site CMS (or any name)
   - **Homepage URL**: `https://jcbwndsr.com`
   - **Authorization callback URL**: `https://jcbwndsr.com/admin/`
4. Click "Register application"
5. Copy the **Client ID** - you'll need this next

### 2. Update Admin Config

Edit `public/admin/config.yml` and add the `auth_type` and `app_id`:

```yaml
backend:
  name: github
  branch: main
  repo: jacobwindsor/jacobwindsor.github.io
  auth_type: implicit # Use implicit grant for GitHub Pages
  base_url: https://jcbwndsr.com
```

**Note**: For GitHub Pages, you have two options:

**Option A: Implicit Grant (Simpler, but less secure)**
- Add `auth_type: implicit` to config (as shown above)
- Users authenticate directly with GitHub
- No server required

**Option B: Git Gateway Proxy (More secure, requires a proxy service)**
- Use a service like Netlify Identity or a custom proxy
- More complex setup but better security

### 3. Deploy and Access

1. Commit and push all changes to your repository
2. Wait for GitHub Pages to rebuild
3. Visit `https://jcbwndsr.com/admin/`
4. Click "Login with GitHub"
5. Authorize the app
6. Start creating blog posts!

## Using the Blog

### Creating a New Post

1. Go to `/admin/`
2. Click on "Blog" in the sidebar
3. Click "New Blog"
4. Fill in:
   - **Title**: Your post title
   - **Publish Date**: When to publish (can be in the future)
   - **Description**: A short description (used in listings)
   - **Author**: Defaults to "Jacob Windsor"
   - **Tags**: Add tags (press Enter after each)
   - **Featured Image**: Upload an image (optional)
   - **Body**: Write your post in Markdown
   - **Draft**: Check if you want to save as draft
5. Click "Save" or "Publish"
6. The post will be committed to your repo and appear after the site rebuilds

### Editing Posts

1. Go to `/admin/`
2. Click on "Blog" in the sidebar
3. Click on any post to edit it
4. Make your changes and save

### Viewing Posts

- Blog listing: `/blog/`
- Individual posts: `/blog/[slug]/`

## How It Works

- **Decap CMS**: Web-based editor at `/admin/`
- **Content Storage**: Posts are stored as Markdown files in `src/content/blog/`
- **Media Storage**: Images go to `public/images/blog/`
- **Git Integration**: All changes are committed to your repository
- **Static Site**: Astro builds your blog at build time

## Draft Posts

Posts marked as `draft: true` won't appear on the public blog in production. They will appear during development (`npm run dev`).

## Customization

### Blog Post Schema

The blog post schema is defined in `src/content/config.ts`. You can add more fields by:

1. Updating the schema in `src/content/config.ts`
2. Updating the CMS config in `public/admin/config.yml`
3. Updating the display templates in `src/pages/blog/`

### Styling

Blog post styling is in `src/pages/blog/[slug].astro`. The `.prose` class handles markdown content styling.

## Troubleshooting

**Can't login to admin panel?**
- Make sure you've set up the GitHub OAuth app
- Check that the callback URL matches exactly
- Verify the repo name in `config.yml` is correct

**Posts not appearing?**
- Check that drafts aren't marked as `draft: true` in production
- Verify the site has been rebuilt after committing
- Check the file format in `src/content/blog/`

**Images not uploading?**
- Verify the `media_folder` and `public_folder` paths in `config.yml`
- Check that the directories exist
- Ensure you have write access to the repository
