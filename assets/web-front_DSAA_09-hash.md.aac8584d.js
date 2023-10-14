import{_ as e,c as a,o as l,a as t}from"./app.ed921696.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[{"level":3,"title":"哈希表特点","slug":"哈希表特点","link":"#哈希表特点","children":[]},{"level":3,"title":"哈希表的不足","slug":"哈希表的不足","link":"#哈希表的不足","children":[]}]}],"relativePath":"web-front/DSAA/09-hash.md"}'),i={name:"web-front/DSAA/09-hash.md"},r=t('<h2 id="哈希表" tabindex="-1">哈希表 <a class="header-anchor" href="#哈希表" aria-hidden="true">#</a></h2><p>基于数组实现</p><h3 id="哈希表特点" tabindex="-1">哈希表特点 <a class="header-anchor" href="#哈希表特点" aria-hidden="true">#</a></h3><ul><li>提供非常快速的插入-删除-查找操作。</li><li>无论多少数据，插入和删除值需要接近常量的时间：即O(1).实际上，只需要几个机器指令即可完成。</li><li>哈希表的速度比树还要快，基本上可以瞬间查找到想要的元素。</li><li>哈希表相对于树来说编码要容易得多。</li></ul><h3 id="哈希表的不足" tabindex="-1">哈希表的不足 <a class="header-anchor" href="#哈希表的不足" aria-hidden="true">#</a></h3><ul><li>哈希表中的数据是没有顺序的，所以不能以一种固定的方式，比如从大到小来遍历其中的元素。</li><li>通常情况下，哈希表中的key是不允许重复的，不能放置相同的key，用于保存不同的元素。</li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>时间有限，后续继续研究。</p></div>',7),s=[r];function n(c,d,h,o,_,p){return l(),a("div",null,s)}const m=e(i,[["render",n]]);export{f as __pageData,m as default};
