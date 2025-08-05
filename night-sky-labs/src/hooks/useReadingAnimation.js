import { useEffect } from 'react';

export const useReadingAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const textElement = entry.target.querySelector('.reading-text');
          if (textElement && !textElement.dataset.animated) {
            textElement.dataset.animated = 'true';
            
            const text = textElement.textContent;
            const words = text.split(' ');
            
            // Clear the element safely
            textElement.textContent = '';
            
            // Create spans safely without innerHTML
            words.forEach((word, index) => {
              const span = document.createElement('span');
              span.className = 'reading-word';
              span.textContent = word;
              textElement.appendChild(span);
              
              // Add space between words (except for the last word)
              if (index < words.length - 1) {
                textElement.appendChild(document.createTextNode(' '));
              }
            });
            
            const wordElements = textElement.querySelectorAll('.reading-word');
            wordElements.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add('word-read');
              }, index * 150);
            });
          }
        }
      });
    }, observerOptions);

    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      animatedSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
};