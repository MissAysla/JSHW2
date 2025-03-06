// Function to update image display when hovered
function upDate(previewPic) {
    console.log("Event triggered for: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    let imageDiv = document.getElementById("image");

    // Update background image
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";

    // Update text
    imageDiv.innerHTML = previewPic.alt;
}

// Function to revert back when mouse leaves
function unDo() {
    console.log("Reverting to default");

    let imageDiv = document.getElementById("image");

    // Reset background image
    imageDiv.style.backgroundImage = "none";

    // Reset text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
