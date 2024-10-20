const images = [
  "https://images.pexels.com/photos/2268553/pexels-photo-2268553.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2080967/pexels-photo-2080967.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/9786/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/25626428/pexels-photo-25626428/free-photo-of-human-responsibility.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2733337/pexels-photo-2733337.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2968938/pexels-photo-2968938.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/335221/pexels-photo-335221.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/20607077/pexels-photo-20607077/free-photo-of-woman-behind-a-mirror-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7239501/pexels-photo-7239501.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/10593645/pexels-photo-10593645.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/28893013/pexels-photo-28893013/free-photo-of-vibrant-orange-slice-on-minimalist-backdrop.jpeg?auto=compress&cs=tinysrgb&w=600",
];

let lastX = 0;
let lastY = 0;
const distanceThreshold = 50;

document.addEventListener("mousemove", (e) => {
  const dx = e.pageX - lastX;
  const dy = e.pageY - lastY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > distanceThreshold) {
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.style.position = "absolute";
    img.style.left = `${e.pageX}px`;
    img.style.top = `${e.pageY}px`;
    document.body.appendChild(img);

    gsap.fromTo(
      img,
      {
        scale: 0.3,
        duration: 0.7,
        ease: "expo.inOut",
      },
      {
        scale: 0.7,
        duration: 0.7,
      }
    );

    setTimeout(() => {
      gsap.to(img, {
        opacity: 0,
        duration: 0.5,
        y: 600,
        ease: "expo.inOut",
        onComplete: () => {
          img.remove();
        },
      });
    }, 800);
    lastX = e.pageX;
    lastY = e.pageY;
  }
});
