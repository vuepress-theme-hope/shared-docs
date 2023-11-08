import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-103dd778.js";const e={},p=t(`<p>以下函数在 Node 端和客户端上均可用。</p><h2 id="属性相关" tabindex="-1"><a class="header-anchor" href="#属性相关" aria-hidden="true">#</a> 属性相关</h2><p>编码并压缩 / 解码并解压缩 属性。</p><p>当你想对字符串内容进行编码并通过 props 将其传递给组件时，这在 markdown 插件中很有用。</p><p>你可以使用 <code>encodeURIComponent</code> 和 <code>decodeURIComponent</code> 简单地实现这一点，但如果内容包含很多特殊字符，它可能会非常大。</p><p>所以我们提供 <code>utoa</code> 和 <code>atou</code> 来压缩和编码内容。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> utoa<span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> level<span class="token operator">:</span> DeflateOptions<span class="token punctuation">[</span><span class="token string">&quot;level&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">atou</span><span class="token operator">:</span> <span class="token punctuation">(</span>base64<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div><details class="hint-container details"><summary>详情</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
{
  &quot;type&quot;: &quot;bar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;Red&quot;, &quot;Blue&quot;, &quot;Yellow&quot;, &quot;Green&quot;, &quot;Purple&quot;, &quot;Orange&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;# of Votes&quot;,
        &quot;data&quot;: [12, 19, 3, 5, 2, 3],
        &quot;backgroundColor&quot;: [
          &quot;rgba(255, 99, 132, 0.2)&quot;,
          &quot;rgba(54, 162, 235, 0.2)&quot;,
          &quot;rgba(255, 206, 86, 0.2)&quot;,
          &quot;rgba(75, 192, 192, 0.2)&quot;,
          &quot;rgba(153, 102, 255, 0.2)&quot;,
          &quot;rgba(255, 159, 64, 0.2)&quot;
        ],
        &quot;borderColor&quot;: [
          &quot;rgba(255, 99, 132, 1)&quot;,
          &quot;rgba(54, 162, 235, 1)&quot;,
          &quot;rgba(255, 206, 86, 1)&quot;,
          &quot;rgba(75, 192, 192, 1)&quot;,
          &quot;rgba(153, 102, 255, 1)&quot;,
          &quot;rgba(255, 159, 64, 1)&quot;
        ],
        &quot;borderWidth&quot;: 1
      }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;y&quot;: {
        &quot;beginAtZero&quot;: true
      }
    }
  }
}
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> prop <span class="token operator">=</span> <span class="token function">utoa</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;eJyNUsFOwzAMve8rrHABKZqWlg5WxAE4cARxAMHEIV1NmQhNlaaCCe3fcdKtW0sLWGpjxy/v+UV512mlcIyfhTa2hHP4GgHYVYExsEQaxqlMpZWxbwAomaAqY5izO0wZB3apKnTrIyqlP1x2bRBzl9xWplC+eWNkniF7dmw1X4nWsfgaNtwNP2kfgH6Be22x9CPUUQ8yFwEHMeMQcog4UBFuiF0kcvGWGV3l6ZVW2uw0XDCTJfIwiOjYjAhESIcn4+BoT2MLio6pP6V+EBJ6AOSZgsmUwyl9A6ATwoiZn3lYTkTkRkycnuP8TU9ENPqUxuuA9i9BmxTNPy9A/G2/F9I23wtpW++FdIwPKzW2W5Afph+WqX2NQWz313XicT7XhV3qnB5f/ejKhVTYVACrXUqUmC3zC/uERsdgTYUdVr/Qb302+gZxe7S/&quot;</span>

<span class="token function">atou</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// will be the original content</span>

<span class="token comment">// if you use \`encodeURIComponent\`, it will be much longer</span>
<span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;%0A%7B%0A%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22Red%22%2C%20%22Blue%22%2C%20%22Yellow%22%2C%20%22Green%22%2C%20%22Purple%22%2C%20%22Orange%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%23%20of%20Votes%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B12%2C%2019%2C%203%2C%205%2C%202%2C%203%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%200.2)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%201)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderWidth%22%3A%201%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22y%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22beginAtZero%22%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="utils" tabindex="-1"><a class="header-anchor" href="#utils" aria-hidden="true">#</a> Utils</h2><h3 id="isdef" tabindex="-1"><a class="header-anchor" href="#isdef" aria-hidden="true">#</a> isDef</h3><p>判断值是否定义。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a value is defined
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isDef<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val <span class="token keyword">is</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="isboolean" tabindex="-1"><a class="header-anchor" href="#isboolean" aria-hidden="true">#</a> isBoolean</h3><p>判断值是否为布尔值。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a value is boolean
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isBoolean</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val <span class="token keyword">is</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="isstring" tabindex="-1"><a class="header-anchor" href="#isstring" aria-hidden="true">#</a> isString</h3><p>判断值是否为字符串。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a value is string
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isString</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val <span class="token keyword">is</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="isnumber" tabindex="-1"><a class="header-anchor" href="#isnumber" aria-hidden="true">#</a> isNumber</h3><p>判断值是否为数字。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a value is number
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isNumber</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val <span class="token keyword">is</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="isobject" tabindex="-1"><a class="header-anchor" href="#isobject" aria-hidden="true">#</a> isObject</h3><p>判断值是否为对象。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a value is a object
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isObject</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val <span class="token keyword">is</span> object<span class="token punctuation">;</span>
</code></pre></div><h3 id="isplainobject" tabindex="-1"><a class="header-anchor" href="#isplainobject" aria-hidden="true">#</a> isPlainObject</h3><p>判断值是否为纯对象。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a value is a plain object
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isPlainObject<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>
  val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val <span class="token keyword">is</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="isfunction" tabindex="-1"><a class="header-anchor" href="#isfunction" aria-hidden="true">#</a> isFunction</h3><p>判断值是否为函数。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a value is a function
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isFunction</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val <span class="token keyword">is</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="startswith" tabindex="-1"><a class="header-anchor" href="#startswith" aria-hidden="true">#</a> startsWith</h3><p>判断字符串是否以指定字符串开头。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a string starts with another string
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">startsWith</span><span class="token operator">:</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> prefix<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="endswith" tabindex="-1"><a class="header-anchor" href="#endswith" aria-hidden="true">#</a> endsWith</h3><p>判断字符串是否以指定字符串结尾。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Check if a string ends with another string
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">endsWith</span><span class="token operator">:</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> suffix<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="entries" tabindex="-1"><a class="header-anchor" href="#entries" aria-hidden="true">#</a> entries</h3><p>将对象转换为键值对数组。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Get the entries of an object
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> entries<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
    o<span class="token operator">:</span>
      <span class="token operator">|</span> <span class="token punctuation">{</span>
          <span class="token punctuation">[</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token operator">|</span> ArrayLike<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fromentries" tabindex="-1"><a class="header-anchor" href="#fromentries" aria-hidden="true">#</a> fromEntries</h3><p>将键值对数组转换为对象。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Create an object from an iterable of key-value pairs
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> fromEntries<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
    entries<span class="token operator">:</span> Iterable<span class="token operator">&lt;</span><span class="token keyword">readonly</span> <span class="token punctuation">[</span>PropertyKey<span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span>entries<span class="token operator">:</span> Iterable<span class="token operator">&lt;</span><span class="token keyword">readonly</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keys" tabindex="-1"><a class="header-anchor" href="#keys" aria-hidden="true">#</a> keys</h3><p>获取对象的键名。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Get the keys of an object
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> keys<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>o<span class="token operator">:</span> object<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="values" tabindex="-1"><a class="header-anchor" href="#values" aria-hidden="true">#</a> values</h3><p>获取对象的键值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Get the values of an object
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> values<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
    o<span class="token operator">:</span>
      <span class="token operator">|</span> <span class="token punctuation">{</span>
          <span class="token punctuation">[</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token operator">|</span> ArrayLike<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deepassign" tabindex="-1"><a class="header-anchor" href="#deepassign" aria-hidden="true">#</a> deepAssign</h3><p><code>Object.assign</code> 的深度版本，对于将用户选项与默认选项合并很有用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Deep merge objects to the first one
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> deepAssign<span class="token operator">:</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">IAnyObject</span><span class="token punctuation">,</span>
  <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name">IAnyObject</span> <span class="token operator">=</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token class-name">Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">&amp;</span> Partial<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token operator">&amp;</span> <span class="token constant">U</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  originObject<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>overrideObjects<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">V</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// or vuepress-shared/client</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> deepAssign <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  optionA<span class="token operator">:</span> <span class="token punctuation">{</span>
    optionA1<span class="token operator">:</span> <span class="token string">&quot;defaultOptionA1&quot;</span><span class="token punctuation">,</span>
    optionA2<span class="token operator">:</span> <span class="token string">&quot;defaultOptionA2&quot;</span><span class="token punctuation">,</span>
    optionA3<span class="token operator">:</span> <span class="token string">&quot;defaultOptionA3&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  optionB<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  optionC<span class="token operator">:</span> <span class="token string">&quot;optionC&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> userOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  optionA<span class="token operator">:</span> <span class="token punctuation">{</span>
    optionA1<span class="token operator">:</span> <span class="token string">&quot;optionA1&quot;</span><span class="token punctuation">,</span>
    optionA2<span class="token operator">:</span> <span class="token string">&quot;optionA2&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  optionB<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">deepAssign</span><span class="token punctuation">(</span>defaultOptions<span class="token punctuation">,</span> userOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//   optionA: {</span>
<span class="token comment">//     optionA1: &quot;optionA1&quot;,</span>
<span class="token comment">//     optionA2: &quot;optionA2&quot;,</span>
<span class="token comment">//     optionA3: &quot;defaultOptionA3&quot;,</span>
<span class="token comment">//   },</span>
<span class="token comment">//   optionB: false,</span>
<span class="token comment">//   optionC: &quot;optionC&quot;,</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="isurl" tabindex="-1"><a class="header-anchor" href="#isurl" aria-hidden="true">#</a> isUrl</h3><p>变量是否是有效的 URL。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Whether a variable is a valid url
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isUrl</span><span class="token operator">:</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="isabsoluteurl" tabindex="-1"><a class="header-anchor" href="#isabsoluteurl" aria-hidden="true">#</a> isAbsoluteUrl</h3><p>变量是否是有效的绝对 URL。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Whether a variable is a valid absolute url
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isAbsoluteUrl</span><span class="token operator">:</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div>`,58),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","shared.html.vue"]]);export{d as default};
