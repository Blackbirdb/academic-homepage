# Academic Homepage Walkthrough

## 🚀 Deployment Status
Your website code has been pushed to: **[https://github.com/Blackbirdb/academic-homepage](https://github.com/Blackbirdb/academic-homepage)**

### ⚠️ Critical Next Step
To make the website live, you must configure GitHub Pages:
1.  Go to your repository **Settings**.
2.  Click on **Pages** in the left sidebar.
3.  Under **Build and deployment** > **Source**, select **GitHub Actions** (it might currently be "Deploy from a branch").
4.  Once selected, the next commit (or a manual re-run of the action) will deploy your site.

## 📝 How to Update Content
You do **not** need to touch the code to update your profile. Just edit:
`src/data.js`

### Example Edits
**Update Bio:**
```javascript
export const bio = {
  name: "New Name",
  // ...
};
```

**Add a Publication:**
```javascript
export const publications = [
  {
    title: "New Paper Title",
    authors: "Me, Myself, I",
    conference: "NeurIPS 2025",
    links: { pdf: "link-to-pdf" }
  },
  // ...
];
```

After modifying `src/data.js`:
1.  Run `git add src/data.js`
2.  Run `git commit -m "Update publications"`
3.  Run `git push`
The website will automatically update in a few minutes.
