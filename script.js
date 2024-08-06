document.addEventListener('DOMContentLoaded', function() {
    const imageForm = document.getElementById('imageForm');
    const promptInput = document.getElementById('promptInput');
    const imageContainer = document.getElementById('imageContainer');
    const placeholderText = document.getElementById('placeholderText');
    const generatedImage = document.getElementById('generatedImage');

    imageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const prompt = promptInput.value.trim();

        if (prompt) {
            // Simulate image generation (replace this with actual API call)
            placeholderText.textContent = "Generating image...";
            generatedImage.style.display = 'none';

            setTimeout(() => {
                // For demonstration, we're using a placeholder image
                generatedImage.src = `https://via.placeholder.com/500x500.png?text=${encodeURIComponent(prompt)}`;
                generatedImage.style.display = 'block';
                placeholderText.style.display = 'none';
            }, 2000);
        }
    });
});