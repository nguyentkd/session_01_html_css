document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.skill-progress');

    if (!bars.length) {
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const bar = entry.target;
            const percent = bar.dataset.percent || '0%';

            bar.style.width = percent;
            bar.setAttribute('aria-valuenow', percent.replace('%', ''));
            bar.classList.add('animate');
            currentObserver.unobserve(bar);
        });
    }, {
        threshold: 0.4
    });

    bars.forEach((bar) => observer.observe(bar));
});