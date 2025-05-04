/**
 * Main JavaScript for Tomohito Yamazaki's Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio application
    const portfolio = new PortfolioApp();
    portfolio.init();
});

/**
 * Portfolio Application Class
 */
class PortfolioApp {
    constructor() {
        // Set current language based on HTML file or default to Japanese
        this.currentLang = document.documentElement.lang || 'ja';
        this.content = null;
        this.cards = {};
    }
    
    /**
     * Initialize the portfolio application
     */
    init() {
        // Set body class based on language
        document.body.classList.add(this.currentLang);
        
        // Load content for current language
        this.content = siteContent[this.currentLang];
        
        // Set page title and meta description
        document.title = this.content.meta.title;
        document.querySelector('meta[name="description"]').setAttribute('content', this.content.meta.description);
        
        // Initialize language switcher
        this.initLanguageSwitcher();
        
        // Initialize cards
        this.initCards();
        
        // Update copyright year
        this.updateCopyright();
    }
    
    /**
     * Initialize language switcher
     */
    initLanguageSwitcher() {
        const switcherContainer = document.querySelector('.language-switcher');
        if (!switcherContainer) return;
        
        const currentPath = window.location.pathname;
        const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
        
        // Create language links
        const jaLink = document.createElement('a');
        jaLink.href = `${basePath}index.ja.html`;
        jaLink.textContent = this.content.languageSwitcher.ja;
        if (this.currentLang === 'ja') jaLink.classList.add('active');
        
        const enLink = document.createElement('a');
        enLink.href = `${basePath}index.en.html`;
        enLink.textContent = this.content.languageSwitcher.en;
        if (this.currentLang === 'en') enLink.classList.add('active');
        
        switcherContainer.appendChild(jaLink);
        switcherContainer.appendChild(enLink);
    }
    
    /**
     * Initialize all card elements
     */
    initCards() {
        // Get all card elements
        const cardElements = document.querySelectorAll('.card');
        
        // Set up each card with its content and event listeners
        cardElements.forEach(card => {
            const cardType = card.getAttribute('data-card');
            if (!cardType || !this.content.cards[cardType]) return;
            
            // Store reference to card
            this.cards[cardType] = card;
            
            // Set card content
            this.setCardContent(card, cardType);
            
            // Add click event listener for modal (except for image card)
            if (cardType !== 'image') {
                card.addEventListener('click', () => this.openCardModal(cardType));
            }
        });
    }
    
    /**
     * Set content for a specific card
     * @param {HTMLElement} card - The card element
     * @param {string} cardType - The type of card
     */
    setCardContent(card, cardType) {
        const cardData = this.content.cards[cardType];
        
        // Get or create card header
        let cardHeader = card.querySelector('.card-header');
        if (!cardHeader) {
            cardHeader = document.createElement('div');
            cardHeader.className = 'card-header';
            card.appendChild(cardHeader);
        }
        
        // Get or create card title
        let cardTitle = cardHeader.querySelector('.card-title');
        if (!cardTitle) {
            cardTitle = document.createElement('h2');
            cardTitle.className = 'card-title';
            cardHeader.appendChild(cardTitle);
        }
        cardTitle.textContent = cardData.title;
        
        // Get or create card subtitle if it exists
        if (cardData.subtitle) {
            let cardSubtitle = cardHeader.querySelector('.card-subtitle');
            if (!cardSubtitle) {
                cardSubtitle = document.createElement('div');
                cardSubtitle.className = 'card-subtitle';
                cardHeader.appendChild(cardSubtitle);
            }
            cardSubtitle.textContent = cardData.subtitle;
        }
        
        // Get or create card body
        let cardBody = card.querySelector('.card-body');
        if (!cardBody) {
            cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            card.appendChild(cardBody);
        }
        
        // Handle special cards
        if (cardType === 'image') {
            this.setupImageCard(cardBody);
        } else if (cardType === 'contact') {
            this.setupContactCard(cardBody, cardData);
        } else if (cardData.summary) {
            cardBody.textContent = cardData.summary;
        }
    }
    
    /**
     * Set up image card with placeholder image
     * @param {HTMLElement} cardBody - The card body element
     */
    setupImageCard(cardBody) {
        // Clear existing content
        cardBody.innerHTML = '';
        
        // Create image element
        const img = document.createElement('img');
        img.src = 'img/placeholder.jpg'; // Default placeholder
        img.alt = 'Tomohito Yamazaki';
        
        // Append image to card body
        cardBody.appendChild(img);
    }
    
    /**
     * Set up contact card with social media links
     * @param {HTMLElement} cardBody - The card body element
     * @param {Object} cardData - The card data
     */
    setupContactCard(cardBody, cardData) {
        // Clear existing content
        cardBody.innerHTML = '';
        
        // Add email if available
        if (cardData.email) {
            const email = document.createElement('p');
            email.innerHTML = `<a href="mailto:${cardData.email}">${cardData.email}</a>`;
            cardBody.appendChild(email);
        }
        
        // Create social links container
        const socialLinks = document.createElement('div');
        socialLinks.className = 'social-links';
        
        // Add social media links
        if (siteContent.social) {
            // Twitter
            if (siteContent.social.twitter) {
                const twitter = document.createElement('a');
                twitter.href = siteContent.social.twitter;
                twitter.target = '_blank';
                twitter.innerHTML = '<i class="fab fa-twitter"></i>';
                twitter.title = 'Twitter';
                socialLinks.appendChild(twitter);
            }
            
            // Facebook
            if (siteContent.social.facebook) {
                const facebook = document.createElement('a');
                facebook.href = siteContent.social.facebook;
                facebook.target = '_blank';
                facebook.innerHTML = '<i class="fab fa-facebook-f"></i>';
                facebook.title = 'Facebook';
                socialLinks.appendChild(facebook);
            }
            
            // Instagram
            if (siteContent.social.instagram) {
                const instagram = document.createElement('a');
                instagram.href = siteContent.social.instagram;
                instagram.target = '_blank';
                instagram.innerHTML = '<i class="fab fa-instagram"></i>';
                instagram.title = 'Instagram';
                socialLinks.appendChild(instagram);
            }
            
            // GitHub
            if (siteContent.social.github) {
                const github = document.createElement('a');
                github.href = siteContent.social.github;
                github.target = '_blank';
                github.innerHTML = '<i class="fab fa-github"></i>';
                github.title = 'GitHub';
                socialLinks.appendChild(github);
            }
        }
        
        // Append social links to card body
        cardBody.appendChild(socialLinks);
    }
    
    /**
     * Open modal with card content
     * @param {string} cardType - The type of card
     */
    openCardModal(cardType) {
        if (!this.content.modals[cardType]) return;
        
        const modalData = this.content.modals[cardType];
        modalSystem.open(modalData.title, modalData.content);
    }
    
    /**
     * Update copyright year in footer
     */
    updateCopyright() {
        const footerElement = document.querySelector('.footer');
        if (footerElement) {
            footerElement.innerHTML = this.content.footer.copyright;
        }
    }
}
