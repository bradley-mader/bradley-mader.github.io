import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Clock, Calendar, User, RefreshCw } from 'lucide-react';

const BlogBanner = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMediumArticles();
  }, []);

  // Keyboard navigation effect
  useEffect(() => {
    const handleKeyPress = (event) => {
      // This would need to be implemented with proper state management
      // in the actual component context
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const fetchMediumArticles = async () => {
    try {
      setLoading(true);
      // Using allorigins.me as CORS proxy for Medium RSS feed
      const proxyUrl = 'https://api.allorigins.win/get?url=';
      const mediumRssUrl = 'https://medium.com/feed/@mader.bradley';
      const response = await fetch(proxyUrl + encodeURIComponent(mediumRssUrl));
      
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      
      const data = await response.json();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
      console.log(xmlDoc)

      const items = xmlDoc.querySelectorAll('item');
      const parsedArticles = Array.from(items).map((item, index) => {
        const title = item.querySelector('title')?.textContent || 'Untitled';
        const link = item.querySelector('link')?.textContent || '';
        const pubDate = item.querySelector('pubDate')?.textContent || '';
        const description = item.querySelector('description')?.textContent || '';
        const creator = item.querySelector('creator')?.textContent || 'Mader.bradley';
        const content = item.querySelector('encoded')?.textContent;
        
        // Extract plain text from HTML description
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = description;
        const plainText = tempDiv.textContent || tempDiv.innerText || '';

        // Extract image from description if available
        const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
        const imageUrl = imgMatch ? imgMatch[1] : null;
        
        var result = {
          id: index,
          title: title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
          link,
          pubDate: new Date(pubDate),
          description: plainText.substring(0, 250) + '...',
          creator,
          imageUrl,
          readingTime: Math.ceil(plainText.length / 200) // Rough estimate
        }
        return result;
      });
      
      setArticles(parsedArticles);
      setError(null);
    } catch (err) {
      setError('Failed to load articles. Please try again later.');
      console.error('Error fetching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Loading State
  if (loading) {
    return (
      <div className="container xlarge-margin-top">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <h4 className="mt-3 text-muted">Loading Medium Articles...</h4>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="placeholder-glow">
                  <div className="placeholder col-8 mb-3" style={{height: '2rem'}}></div>
                  <div className="placeholder col-12 mb-2" style={{height: '1rem'}}></div>
                  <div className="placeholder col-12 mb-2" style={{height: '1rem'}}></div>
                  <div className="placeholder col-6" style={{height: '1rem'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="container xlarge-margin-top">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="alert alert-danger text-center" role="alert">
              <h4 className="alert-heading">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                Error Loading Articles
              </h4>
              <p className="mb-3">{error}</p>
              <button
                onClick={fetchMediumArticles}
                className="btn btn-outline-danger"
                disabled={loading}
              >
                <RefreshCw className="me-2" size={16} />
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // No Articles State
  if (articles.length === 0) {
    return (
      <div className="container xlarge-margin-top">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center py-5">
              <h3 className="text-muted mb-3">No Articles Found</h3>
              <p className="text-muted">No articles were found for this author.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentArticle = articles[currentIndex];

  return (
    <div className="container xlarge-margin-top">
      {/* Main Carousel */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div id="mediumCarousel" className="carousel slide position-relative" data-bs-ride="false">
            
            {/* Carousel Item */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card shadow-lg border-0">
                  {/* Article Image */}
                  {currentArticle.imageUrl && (
                    <div className="position-relative" style={{height: '250px', overflow: 'hidden'}}>
                      <img
                        src={currentArticle.imageUrl}
                        className="card-img-top w-100 h-100"
                        alt={currentArticle.title}
                        style={{objectFit: 'cover'}}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div 
                        className="position-absolute bottom-0 start-0 w-100" 
                        style={{
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                          height: '100px'
                        }}
                      ></div>
                    </div>
                  )}
                  
                  {/* Article Content */}
                  <div className="card-body p-4">
                    {/* Article Meta */}
                    <div className="d-flex flex-wrap align-items-center text-muted small mb-3">
                      <div className="d-flex align-items-center me-3 mb-1">
                        <User size={16} className="me-1" />
                        <span>{currentArticle.creator}</span>
                      </div>
                      <div className="d-flex align-items-center me-3 mb-1">
                        <Calendar size={16} className="me-1" />
                        <span>{formatDate(currentArticle.pubDate)}</span>
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <Clock size={16} className="me-1" />
                        <span>{currentArticle.readingTime} min read</span>
                      </div>
                    </div>

                    {/* Article Title */}
                    <h2 className="card-title h3 fw-bold text-dark mb-3">
                      {currentArticle.title}
                    </h2>

                    {/* Article Description */}
                    <p className="card-text text-muted mb-4 lh-base">
                      {currentArticle.description}
                    </p>

                    {/* Read More Button */}
                    <a
                      href={currentArticle.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-lg d-inline-flex align-items-center"
                    >
                      <span className="me-2">Read on Medium</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            {articles.length > 1 && (
              <>
                <button
                  className="carousel-control-prev position-absolute top-50 start-0 translate-middle-y"
                  type="button"
                  onClick={prevSlide}
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    marginLeft: '-25px'
                  }}
                >
                  <ChevronLeft size={24} className="text-dark" />
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next position-absolute top-50 end-0 translate-middle-y"
                  type="button"
                  onClick={nextSlide}
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    marginRight: '-25px'
                  }}
                >
                  <ChevronRight size={24} className="text-dark" />
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Indicators */}
      {articles.length > 1 && (
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              {articles.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`btn btn-sm rounded-circle me-2 ${
                    index === currentIndex ? 'btn-success' : 'btn-outline-secondary'
                  }`}
                  style={{
                    width: '12px',
                    height: '12px',
                    padding: '0',
                    minWidth: 'unset'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogBanner;