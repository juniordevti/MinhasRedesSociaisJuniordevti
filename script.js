document.addEventListener("DOMContentLoaded", () => {
  const profileImage = document.querySelector(".profile-image");
  const buttons = document.querySelectorAll(".link-button");
  const username = document.querySelector(".username");

  if (username) {
    username.style.opacity = "0";
    username.style.transform = "translateY(-20px)";

    setTimeout(() => {
      username.style.transition = "all 0.8s ease";
      username.style.opacity = "1";
      username.style.transform = "translateY(0)";
    }, 200);
  }

  if (profileImage) {
    profileImage.style.opacity = "0";
    profileImage.style.transform = "scale(0.7)";

    setTimeout(() => {
      profileImage.style.transition = "all 1s ease";
      profileImage.style.opacity = "1";
      profileImage.style.transform = "scale(1)";
    }, 400);

    profileImage.addEventListener("click", () => {
      profileImage.style.transform = "scale(1.12) rotate(5deg)";
      setTimeout(() => {
        profileImage.style.transform = "scale(1) rotate(0deg)";
      }, 300);
    });
  }

  buttons.forEach((button, index) => {
    button.style.opacity = "0";
    button.style.transform = "translateY(20px)";

    setTimeout(
      () => {
        button.style.transition = "all 0.6s ease";
        button.style.opacity = "1";
        button.style.transform = "translateY(0)";
      },
      300 + index * 150,
    );

    button.addEventListener("click", () => {
      button.style.transform = "scale(0.96)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 150);
    });
  });
});
