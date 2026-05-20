
    /* ── 1. Custom Cursor Logic (From CD2) ── */
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effects for links
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px'; cursor.style.height = '20px';
        cursor.style.background = 'var(--accent2)';
        ring.style.width = '56px'; ring.style.height = '56px';
        ring.style.borderColor = 'rgba(123,108,255,0.5)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px'; cursor.style.height = '12px';
        cursor.style.background = 'var(--accent)';
        ring.style.width = '36px'; ring.style.height = '36px';
        ring.style.borderColor = 'rgba(200,240,96,0.4)';
      });
    });

    /* ── 2. Scroll Spy Logic for Sidebar ── */
    document.addEventListener("DOMContentLoaded", function() {
      const sections = document.querySelectorAll('.cs-content .cs-section');
      const navLinks = document.querySelectorAll('.cs-nav-list a');

      // Options for the Intersection Observer
      const observerOptions = {
        root: null,
        // The rootMargin adjusts the trigger line down from the top of the viewport
        rootMargin: '-150px 0px -60% 0px', 
        threshold: 0
      };

      const observerCallback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Remove active class from all
            navLinks.forEach(link => link.classList.remove('active'));
            // Find the link that corresponds to the section currently in view
            const activeLink = document.querySelector(`.cs-nav-list a[href="#${entry.target.id}"]`);
            if (activeLink) {
              activeLink.classList.add('active');
              
              // On mobile, automatically scroll the horizontal nav to show active item
              if (window.innerWidth <= 850) {
                activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
              }
            }
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      sections.forEach(sec => observer.observe(sec));
    });
 