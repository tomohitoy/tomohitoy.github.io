/**
 * Modal Dialog Functionality for Tomohito Yamazaki's Portfolio
 */

class ModalSystem {
    constructor() {
        this.modalOverlay = null;
        this.modalContainer = null;
        this.modalHeader = null;
        this.modalContent = null;
        this.modalClose = null;
        this.isOpen = false;
        
        this.init();
    }
    
    /**
     * Initialize the modal system
     */
    init() {
        // Create modal elements if they don't exist
        if (!document.querySelector('.modal-overlay')) {
            this.createModalElements();
        } else {
            this.modalOverlay = document.querySelector('.modal-overlay');
            this.modalContainer = document.querySelector('.modal-container');
            this.modalHeader = document.querySelector('.modal-header');
            this.modalContent = document.querySelector('.modal-content');
            this.modalClose = document.querySelector('.modal-close');
        }
        
        // Set up event listeners
        this.setupEventListeners();
    }
    
    /**
     * Create modal DOM elements
     */
    createModalElements() {
        // Create overlay
        this.modalOverlay = document.createElement('div');
        this.modalOverlay.className = 'modal-overlay';
        
        // Create container
        this.modalContainer = document.createElement('div');
        this.modalContainer.className = 'modal-container';
        
        // Create header
        this.modalHeader = document.createElement('div');
        this.modalHeader.className = 'modal-header';
        const modalTitle = document.createElement('h2');
        this.modalHeader.appendChild(modalTitle);
        
        // Create content
        this.modalContent = document.createElement('div');
        this.modalContent.className = 'modal-content';
        
        // Create close button
        this.modalClose = document.createElement('div');
        this.modalClose.className = 'modal-close';
        this.modalClose.innerHTML = '×';
        
        // Assemble modal
        this.modalContainer.appendChild(this.modalClose);
        this.modalContainer.appendChild(this.modalHeader);
        this.modalContainer.appendChild(this.modalContent);
        this.modalOverlay.appendChild(this.modalContainer);
        
        // Add to DOM
        document.body.appendChild(this.modalOverlay);
    }
    
    /**
     * Set up event listeners for the modal
     */
    setupEventListeners() {
        // Close button
        this.modalClose.addEventListener('click', () => this.close());
        
        // Close on overlay click
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.close();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }
    
    /**
     * Open modal with content
     * @param {string} title - Modal title
     * @param {string} content - HTML content for modal
     */
    open(title, content) {
        // Set content
        this.modalHeader.querySelector('h2').textContent = title;
        this.modalContent.innerHTML = content;
        
        // Show modal
        this.modalOverlay.classList.add('active');
        this.isOpen = true;
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    /**
     * Close the modal
     */
    close() {
        this.modalOverlay.classList.remove('active');
        this.isOpen = false;
        
        // Re-enable body scroll
        document.body.style.overflow = '';
        
        // Clear content after animation
        setTimeout(() => {
            if (!this.isOpen) {
                this.modalContent.innerHTML = '';
                this.modalHeader.querySelector('h2').textContent = '';
            }
        }, 300);
    }
}

// Create and export the modal instance
const modalSystem = new ModalSystem();

// Make modal available globally
window.modalSystem = modalSystem;
