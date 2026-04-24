/* 搜索框初始化脚本
 * 从 index.html 抽离，避免 HTML minifier 吞掉模板字符串中的 </li> </a> 闭合标签。
 * 依赖：
 *   - window.SimpleJekyllSearch（由 simple-jekyll-search.min.js 提供）
 *   - window.SEARCH_JSON_URL（由 index.html 通过 Liquid 传入 site.baseurl + "/search.json"）
 *   - DOM 元素：#search-input、#results-container
 */
(function () {
  if (typeof SimpleJekyllSearch !== 'function') return;
  var input = document.getElementById('search-input');
  var results = document.getElementById('results-container');
  if (!input || !results) return;

  var jsonUrl = (typeof window.SEARCH_JSON_URL === 'string' && window.SEARCH_JSON_URL)
    ? window.SEARCH_JSON_URL
    : '/search.json';

  window.simpleJekyllSearch = new SimpleJekyllSearch({
    searchInput: input,
    resultsContainer: results,
    json: jsonUrl,
    searchResultTemplate:
      '<li><a href="{url}" title="{title}">' +
        '<span class="search-title">{title}</span>' +
        '<span class="search-date">{date}</span>' +
      '</a></li>',
    noResultsText: '<li class="no-results">无匹配文章...</li>',
    limit: 10,
    fuzzy: true,
    exclude: ['Welcome']
    /* search.json 里已包含 title/tags/content 字段，插件会自动对所有字段做匹配，即实现全文检索 */
  });
})();
