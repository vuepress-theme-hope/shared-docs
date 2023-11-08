import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-103dd778.js";const p={},t=e(`<p>环境函数应该在 Node 端调用，你应该只在 Node 端代码中从 <code>vuepress-shared/node</code> 导入它们。</p><p>所有函数都应该在在返回 API 接口之前在插件函数中被调用。</p><p>如果不支持运行时环境，插件应该返回一个空的 api 接口，例如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">examplePlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这应该是下方的函数</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">envCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;this plugin is not supported in this environment&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&quot;vuepress-plugin-example&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 返回实际插件</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;vuepress-plugin-example&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="checkversion" tabindex="-1"><a class="header-anchor" href="#checkversion" aria-hidden="true">#</a> checkVersion</h2><p>检查 VuePress 的版本是否满足给定的范围。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if the version of VuePress is satisfied with the given range
 *
 * <span class="token keyword">@param</span> <span class="token parameter">app</span> VuePress app
 * <span class="token keyword">@param</span> <span class="token parameter">name</span> current package name
 * <span class="token keyword">@param</span> <span class="token parameter">range</span> version range
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> checkVersion <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> range <span class="token operator">=</span> <span class="token string">&quot;v2&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="hasglobalinstallation" tabindex="-1"><a class="header-anchor" href="#hasglobalinstallation" aria-hidden="true">#</a> hasGlobalInstallation</h2><p>检查包管理器是否在全局范围内安装。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a package manager is installed globally.
 *
 * <span class="token keyword">@param</span> <span class="token parameter">packageManager</span> package manager
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasGlobalInstallation</span> <span class="token operator">=</span> <span class="token punctuation">(</span>packageManager<span class="token operator">:</span> PackageManager<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="gettypeoflockfile" tabindex="-1"><a class="header-anchor" href="#gettypeoflockfile" aria-hidden="true">#</a> getTypeofLockFile</h2><p>获取锁定文件的类型。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Get the type of lock file.
 *
 * <span class="token keyword">@param</span> <span class="token parameter">cwd</span> current working directory
 * <span class="token keyword">@param</span> <span class="token parameter">deep</span> whether to search in parent directories
 * <span class="token keyword">@returns</span> the type of lock file
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getTypeofLockFile</span> <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;yarn&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;npm&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;pnpm&quot;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="detectpackagemanager" tabindex="-1"><a class="header-anchor" href="#detectpackagemanager" aria-hidden="true">#</a> detectPackageManager</h2><p>检测当前项目中使用的包管理器。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Detect the package manager used in the current project.
 *
 * <span class="token keyword">@param</span> <span class="token parameter">cwd</span> current working directory
 * <span class="token keyword">@param</span> <span class="token parameter">deep</span> whether to search in parent directories
 * <span class="token keyword">@returns</span> the package manager used in the current project
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">detectPackageManager</span> <span class="token operator">=</span> <span class="token punctuation">(</span>cwd <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> deep <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token string">&quot;yarn&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;npm&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;pnpm&quot;</span><span class="token punctuation">;</span>
</code></pre></div>`,16),o=[t];function c(r,l){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","env.html.vue"]]);export{k as default};
