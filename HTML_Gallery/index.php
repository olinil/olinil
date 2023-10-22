<!DOCTYPE html>
<html>
<head>
    <title>Image Gallery</title>
</head>
<body>
    <h1>My Image Gallery</h1>
    <div id="imageGallery">
        <?php
        $imageDirectory = '/Bilder/PostPictures'; // The relative path to your image folder

        // Get a list of image files in the directory
        $imageFiles = glob($imageDirectory . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

        // Loop through the image files and display them
        foreach ($imageFiles as $imageFile) {
            echo '<img src="' . $imageFile . '" alt="' . basename($imageFile) . '">';
        }
        ?>
    </div>
</body>
</html>
