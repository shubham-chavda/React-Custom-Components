<h1>React Latest (Vite | TypeScript)</h1>

<p>
  This is project generated to serve as a reproduction starter for Storybook.
</p>

<a  href="https://stackblitz.com/github/storybookjs/sandboxes/tree/next/react-vite/default-ts/after-storybook?preset=node=">
  View it in Stackblitz
</a>

<h3>Testing instructions</h3>

<p>Install dependencies:</p>
<pre>
  yarn
</pre>

<p>Run Project:</p>
<pre>
  yarn storybook
</pre>
<p>build tar.gz file to use it in other projects</p>
<pre>
  yarn pack
  yarn rollup
</pre>
<h4>How to use tar.gz file in other projects?</h4>
<pre>
  yarn add <--path_to_your_tar.gz_file-->
</pre>
<h4>How to change build settings?</h4>
<p>
  1. To change build settings you can normally update rollup.config.js file
</p>
<h4>If you dont have to use rollup.config.js then you can create other file like vite.config.js to modify build settings*</h4>
<p>
  1. To run vite.config.js or any other build modifier file(ex: .bablerc)
  you have to run below command.
</p>
<pre>
  yarn build
</pre>
<h4>
  Project Format and uses of file:
</h4>
<p>

  1. src/assets : for extranal assets
  2. src/components: for new component (i.e. input, checkbox)
  3. src/index.ts: entry point of project (make index.html if needed)
  4. src/stories/_componentName_.stories.ts: to make component visible on storybook dashboard
</p>
<h4> Publish project on github Registry: </h4>
<h5>
  Note: You must have to update .npmrc with your latest credentials
</h5>
<pre>
  yarn rollup
  npm Publish
</pre>
<p>
 ......................................
</p>
<h4>How to create own npmrc file?</h4>
<pre>UserName:registry=https://npm.pkg.github.com

//npm.pkg.github.com/:_authToken=_Your auth token_
</pre>
<h4>
 **To get your personal auth token(classic) follow below document.
</h4>
<p>https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#personal-access-tokens-classic
</p>