// Create background animations
        document.addEventListener('DOMContentLoaded', function () {
            // Create stars
            const backgroundDecoration = document.getElementById('background-decoration');

            // Add stars
            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.width = `${Math.random() * 3 + 1}px`;
                star.style.height = star.style.width;
                star.style.animationDelay = `${Math.random() * 5}s`;
                backgroundDecoration.appendChild(star);
            }

            // Add floating hearts
            setInterval(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.bottom = '-30px';
                heart.style.opacity = Math.random() * 0.5 + 0.3;
                heart.style.transform = `rotate(45deg) scale(${Math.random() * 0.5 + 0.5})`;
                heart.style.animationDuration = `${Math.random() * 10 + 10}s`;
                backgroundDecoration.appendChild(heart);

                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                }, 15000);
            }, 1000);

            // Typing effect
            const typingTextElement = document.getElementById('typing-text');
            const texts = [
                "Undergraduate Software Engineer",
                "Passionate Gamer",
                "Photo Editor",
                "Video Editor",
                "Digital Artist"
            ];

            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingDelay = 100;

            function typeText() {
                const currentText = texts[textIndex];

                if (isDeleting) {
                    typingTextElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typingTextElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }

                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typingDelay = 2000; // Pause at end of word
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typingDelay = 500; // Pause before starting new word
                } else {
                    typingDelay = isDeleting ? 50 : 150;
                }

                setTimeout(typeText, typingDelay);
            }

            // Start typing animation
            setTimeout(typeText, 1000);

            // Reveal sections on scroll
            const sections = document.querySelectorAll('.section');

            function revealSection() {
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (sectionTop < windowHeight - 100) {
                        section.classList.add('visible');
                    }
                });
            }

            // Initial check for sections in view
            revealSection();

            // Check on scroll
            window.addEventListener('scroll', revealSection);

            // Animate skill bars
            const skillBars = document.querySelectorAll('.skill-progress');

            function animateSkillBars() {
                skillBars.forEach(bar => {
                    const barTop = bar.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (barTop < windowHeight - 50) {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 300);
                    }
                });
            }

            // Initial animation
            setTimeout(animateSkillBars, 1000);

            // Check on scroll
            window.addEventListener('scroll', animateSkillBars);

            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Form submission animation
            const contactForm = document.getElementById('contact-form');

            if (contactForm) {
                contactForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    const submitButton = this.querySelector('.contact-button');
                    const originalText = submitButton.innerHTML;

                    submitButton.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                    submitButton.style.backgroundColor = '#c3e88d';

                    // Reset form
                    this.reset();

                    // Reset button after delay
                    setTimeout(() => {
                        submitButton.innerHTML = originalText;
                        submitButton.style.backgroundColor = '';
                    }, 3000);
                });
            }

            // Project card hover effect with anime girls appearing
            const projectCards = document.querySelectorAll('.project-card');

            projectCards.forEach(card => {
                card.addEventListener('mouseenter', function () {
                    const animeGirl = document.createElement('img');
                    animeGirl.src = 'resources/AG2.png';
                    animeGirl.alt = 'Cute Anime Girl';
                    animeGirl.style.position = 'absolute';
                    animeGirl.style.bottom = '-40px';
                    animeGirl.style.right = '-20px';
                    animeGirl.style.zIndex = '10';
                    animeGirl.style.transform = 'rotate(20deg)';
                    animeGirl.style.transition = 'all 0.3s ease';
                    animeGirl.style.animation = 'bounce 2s infinite';

                    card.appendChild(animeGirl);
                    card.style.overflow = 'visible';
                });

                card.addEventListener('mouseleave', function () {
                    const animeGirl = card.querySelector('img[alt="Cute Anime Girl"]');
                    if (animeGirl) {
                        animeGirl.remove();
                    }
                    card.style.overflow = 'hidden';
                });
            });

            // Add some sparkles on click
            document.addEventListener('click', function (e) {
                for (let i = 0; i < 5; i++) {
                    const sparkle = document.createElement('div');
                    sparkle.classList.add('star');
                    sparkle.style.left = `${e.pageX + (Math.random() * 40) - 20}px`;
                    sparkle.style.top = `${e.pageY + (Math.random() * 40) - 20}px`;
                    sparkle.style.width = `${Math.random() * 5 + 2}px`;
                    sparkle.style.height = sparkle.style.width;
                    sparkle.style.backgroundColor = `hsl(${Math.random() * 60 + 300}, 100%, 70%)`;
                    sparkle.style.zIndex = '9999';
                    sparkle.style.position = 'absolute';
                    sparkle.style.borderRadius = '50%';
                    sparkle.style.opacity = '0';
                    sparkle.style.animation = 'twinkle 1s ease-out forwards';

                    document.body.appendChild(sparkle);

                    setTimeout(() => {
                        sparkle.remove();
                    }, 1000);
                }
            });
        });