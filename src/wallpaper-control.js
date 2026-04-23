const activateEditButton = document.getElementById("activateEditButton");

async function activateWallpaperEditing() {
  if (!window.desktopBoard?.activateWallpaperInteraction) {
    return;
  }

  activateEditButton.disabled = true;
  try {
    await window.desktopBoard.activateWallpaperInteraction();
  } finally {
    activateEditButton.disabled = false;
  }
}

activateEditButton?.addEventListener("click", () => {
  void activateWallpaperEditing();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    void activateWallpaperEditing();
  }
});
