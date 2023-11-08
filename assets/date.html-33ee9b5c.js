import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-103dd778.js";const t={},o=e(`<h3 id="getdateinfo" tabindex="-1"><a class="header-anchor" href="#getdateinfo" aria-hidden="true">#</a> getDateInfo</h3><p>从字符串或日期对象中获取日期信息。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>当日期无效时，函数返回 null 而不是抛出错误。</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DateDetail</span> <span class="token punctuation">{</span>
  year<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  month<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  day<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  hour<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  minute<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  second<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DateInfo</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;date&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;time&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;full&quot;</span><span class="token punctuation">;</span>
  info<span class="token operator">:</span> DateDetail<span class="token punctuation">;</span>
  value<span class="token operator">:</span> Date <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 获取日期信息
 *
 * <span class="token keyword">@param</span> <span class="token parameter">date</span> Date or date info
 * <span class="token keyword">@param</span> <span class="token parameter">timezone</span> (optional) date timezone
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getDateInfo</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  date<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Date <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  timezone<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DateInfo <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// or vuepress-shared/client</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDateInfo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token function">getDateInfo</span><span class="token punctuation">(</span><span class="token string">&quot;2021-01-01 12:34:56&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: Date(&quot;2021-01-01 12:34:56&quot;),</span>
<span class="token comment">//   info: {</span>
<span class="token comment">//     year: 2021,</span>
<span class="token comment">//     month: 1,</span>
<span class="token comment">//     day: 1,</span>
<span class="token comment">//     hour: 12,</span>
<span class="token comment">//     minute: 34,</span>
<span class="token comment">//     second: 56,</span>
<span class="token comment">//   },</span>
<span class="token comment">//   type: &quot;full&quot;,</span>
<span class="token comment">// }</span>

<span class="token function">getDateInfo</span><span class="token punctuation">(</span><span class="token string">&quot;2021-01-01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: Date(&quot;2021-01-01&quot;),</span>
<span class="token comment">//   info: {</span>
<span class="token comment">//     year: 2021,</span>
<span class="token comment">//     month: 1,</span>
<span class="token comment">//     day: 1,</span>
<span class="token comment">//   },</span>
<span class="token comment">//   type: &quot;date&quot;,</span>
<span class="token comment">// }</span>

<span class="token function">getDateInfo</span><span class="token punctuation">(</span><span class="token string">&quot;12:34:56&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: undefined,</span>
<span class="token comment">//   info: {</span>
<span class="token comment">//     hour: 12,</span>
<span class="token comment">//     minute: 34,</span>
<span class="token comment">//     second: 56,</span>
<span class="token comment">//   },</span>
<span class="token comment">//   type: &quot;time&quot;,</span>
<span class="token comment">// }</span>

<span class="token comment">// 如果你在 UTC 时区</span>
<span class="token comment">// Asia/Shanghai 是 +8</span>
<span class="token function">getDateInfo</span><span class="token punctuation">(</span><span class="token string">&quot;12:34:56&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Asia/Shanghai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 所以在 UTC 是 上午 4 点</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: undefined,</span>
<span class="token comment">//   info: {</span>
<span class="token comment">//     hour: 4,</span>
<span class="token comment">//     minute: 34,</span>
<span class="token comment">//     second: 56,</span>
<span class="token comment">//   },</span>
<span class="token comment">//   type: &quot;time&quot;,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="comparedate" tabindex="-1"><a class="header-anchor" href="#comparedate" aria-hidden="true">#</a> compareDate</h3><p>比较日期并将它们从最新到最旧排序。</p><p>无效日期会出现在最后。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Recent date will returns positive value, so dates will be latest to oldest after sorting
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">compareDate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  dateA<span class="token operator">:</span> Date <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  dateB<span class="token operator">:</span> Date <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// or vuepress-shared/client</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compareDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dates <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;2021-01-01&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;2022-04-05 08:00:00&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token string">&quot;04:38:45&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;19999&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;2022-03-08&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

dates<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>compareDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [</span>
<span class="token comment">//   &quot;2022-04-05 08:00:00&quot;,</span>
<span class="token comment">//   &quot;2022-03-08&quot;,</span>
<span class="token comment">//   &quot;2021-01-01&quot;,</span>
<span class="token comment">//   &quot;19999&quot;,</span>
<span class="token comment">//   &quot;04:38:45&quot;,</span>
<span class="token comment">//   undefined,</span>
<span class="token comment">// ];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10),p=[o];function i(c,l){return s(),a("div",null,p)}const r=n(t,[["render",i],["__file","date.html.vue"]]);export{r as default};
