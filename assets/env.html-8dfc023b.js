import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-103dd778.js";const t={},p=e(`<p>Environment functions should be called at node side, you shall import them from <code>vuepress-shared/node</code> in node side code only.</p><p>All functions are expected be called in plugin function before returning an API interface.</p><p>The plugin should return an empty api interface if the runtime environment is not supported, e.g:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">examplePlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// this should be some of the following functions</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">envCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;this plugin is not supported in this environment&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&quot;vuepress-plugin-example&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// return the actual plugin</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;vuepress-plugin-example&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="checkversion" tabindex="-1"><a class="header-anchor" href="#checkversion" aria-hidden="true">#</a> checkVersion</h2><p>Check if the version of VuePress is satisfied with the given range.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if the version of VuePress is satisfied with the given range
 *
 * <span class="token keyword">@param</span> <span class="token parameter">app</span> VuePress app
 * <span class="token keyword">@param</span> <span class="token parameter">name</span> current package name
 * <span class="token keyword">@param</span> <span class="token parameter">range</span> version range
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> checkVersion <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> range <span class="token operator">=</span> <span class="token string">&quot;v2&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="hasglobalinstallation" tabindex="-1"><a class="header-anchor" href="#hasglobalinstallation" aria-hidden="true">#</a> hasGlobalInstallation</h2><p>Check if a package manager is installed globally.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a package manager is installed globally.
 *
 * <span class="token keyword">@param</span> <span class="token parameter">packageManager</span> package manager
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasGlobalInstallation</span> <span class="token operator">=</span> <span class="token punctuation">(</span>packageManager<span class="token operator">:</span> PackageManager<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="gettypeoflockfile" tabindex="-1"><a class="header-anchor" href="#gettypeoflockfile" aria-hidden="true">#</a> getTypeofLockFile</h2><p>Get the type of lock file.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Get the type of lock file.
 *
 * <span class="token keyword">@param</span> <span class="token parameter">cwd</span> current working directory
 * <span class="token keyword">@param</span> <span class="token parameter">deep</span> whether to search in parent directories
 * <span class="token keyword">@returns</span> the type of lock file
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getTypeofLockFile</span> <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;yarn&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;npm&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;pnpm&quot;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="detectpackagemanager" tabindex="-1"><a class="header-anchor" href="#detectpackagemanager" aria-hidden="true">#</a> detectPackageManager</h2><p>Detect the package manager used in the current project.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Detect the package manager used in the current project.
 *
 * <span class="token keyword">@param</span> <span class="token parameter">cwd</span> current working directory
 * <span class="token keyword">@param</span> <span class="token parameter">deep</span> whether to search in parent directories
 * <span class="token keyword">@returns</span> the package manager used in the current project
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">detectPackageManager</span> <span class="token operator">=</span> <span class="token punctuation">(</span>cwd <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> deep <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token string">&quot;yarn&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;npm&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;pnpm&quot;</span><span class="token punctuation">;</span>
</code></pre></div>`,16),o=[p];function c(r,l){return a(),s("div",null,o)}const k=n(t,[["render",c],["__file","env.html.vue"]]);export{k as default};
