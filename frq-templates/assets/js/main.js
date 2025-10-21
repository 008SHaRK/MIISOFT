document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      name: "Ulviyya Imamova",
      role: "Recruiter at Pasha Bank",
      img: "frq-templates/assets/images/portfolio1.jpg",
      text:
        "Sapien donec congue lectus pharetra et et maecenas. Eros fames nunc faucibus ut rutrum vel vitae elementum lobortis. Orci mi facilisis nullam vestibulum sit.",
      rating: 4.5,
    },
    {
      name: "Kamran Aliyev",
      role: "Software Engineer at Kapital Bank",
      img: "frq-templates/assets/images/portfolio2.jpg",
      text:
        "Mi bibendum interdum hendrerit elementum. Nam mattis mauris mi libero aliquet. Elit tristique quis hac ullamcorper enim.",
      rating: 5,
    },
    {
      name: "Leman Huseynova",
      role: "UX/UI Designer at ABB",
      img: "frq-templates/assets/images/portfolio3.jpg",
      text:
        "Eros fames nunc faucibus ut rutrum vel vitae elementum lobortis. Nam mattis mauris mi libero aliquet.",
      rating: 4.8,
    },
  ];

  let current = 0;
  const nameEl = document.querySelector(".testimonial-name");
  const roleEl = document.querySelector(".testimonial-role");
  const imgEl = document.querySelector(".testimonial-avatar");
  const textEl = document.querySelector(".testimonial-text");
  const ratingEl = document.querySelector(".testimonial-rating");
  const leftEl = document.querySelector(".testimonial-left");
  const rightEl = document.querySelector(".testimonial-right");

  function updateTestimonial(index) {
    leftEl.classList.remove("fade-in-left");
    rightEl.classList.remove("fade-in-right");
    void leftEl.offsetWidth;
    void rightEl.offsetWidth;

    const t = testimonials[index];
    imgEl.src = t.img;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;
    textEl.textContent = t.text;

    const stars = Math.floor(t.rating);
    const hasHalf = t.rating % 1 !== 0;
    let starHTML = "";
    for (let i = 0; i < stars; i++) starHTML += `<i class="fa-solid fa-star"></i>`;
    if (hasHalf) starHTML += `<i class="fa-regular fa-star"></i>`;
    ratingEl.innerHTML = `<div class="stars me-2">${starHTML}</div><span>(${t.rating})</span>`;

    leftEl.classList.add("fade-in-left");
    rightEl.classList.add("fade-in-right");
  }

  document.querySelector(".next").addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    updateTestimonial(current);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(current);
  });

  // Avtomatik keçid
  setInterval(() => {
    current = (current + 1) % testimonials.length;
    updateTestimonial(current);
  }, 6000);
});
