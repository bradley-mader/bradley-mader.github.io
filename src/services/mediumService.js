import { MEDIUM_CONFIG } from '../constants';

export const fetchMediumArticles = async () => {
  const response = await fetch(
    MEDIUM_CONFIG.corsProxyUrl + encodeURIComponent(MEDIUM_CONFIG.feedUrl)
  );

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }

  const data = await response.json();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(data.contents, 'text/xml');

  const items = xmlDoc.querySelectorAll('item');
  return Array.from(items).map((item, index) => {
    const title = item.querySelector('title')?.textContent || 'Untitled';
    const link = item.querySelector('link')?.textContent || '';
    const pubDate = item.querySelector('pubDate')?.textContent || '';
    const creator = item.querySelector('creator')?.textContent || 'Mader.bradley';
    const content = item.querySelector('encoded')?.textContent;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';

    const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
    const imageUrl = imgMatch ? imgMatch[1] : null;

    return {
      id: index,
      title: title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
      link,
      pubDate: new Date(pubDate),
      description: plainText.substring(0, 250) + '...',
      creator,
      imageUrl,
      readingTime: Math.ceil(plainText.length / (265 * 6)),
    };
  });
};
