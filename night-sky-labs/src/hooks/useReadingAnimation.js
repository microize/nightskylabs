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
          // Handle reading animation for #reading-text
          const readingElement = document.querySelector('#reading-text');
          if (readingElement && !readingElement.dataset.animated) {
            console.log('Starting reading animation');
            readingElement.dataset.animated = 'true';
            
            const wordElements = readingElement.querySelectorAll('.reading-word');
            console.log('Found words:', wordElements.length);
            
            wordElements.forEach((word, index) => {
              setTimeout(() => {
                word.classList.remove('text-gray-400');
                word.classList.add('text-black');
                console.log('Animating word:', index, word.textContent);
              }, index * 200);
            });
          }

          // Handle other reading animations
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

    // Observe specifically the level-up section and other animated sections
    const levelUpSection = document.querySelector('.level-up-section');
    const animatedSections = document.querySelectorAll('.animated-section');
    
    if (levelUpSection) {
      observer.observe(levelUpSection);
      console.log('Observing level-up section');
    }
    
    animatedSections.forEach(section => {
      observer.observe(section);
      console.log('Observing animated section:', section.className);
    });

    return () => {
      if (levelUpSection) {
        observer.unobserve(levelUpSection);
      }
      animatedSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
};