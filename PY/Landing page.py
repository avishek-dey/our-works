import os

# Directory containing the images
image_directory = r'E:\Creative Cage\My Ui\images\landing pages'

# Get a list of all image files in the directory
image_files = os.listdir(image_directory)

# Generate HTML code for each image
html_code = ''
for image_file in image_files:
    if image_file.endswith(('.jpg', '.jpeg', '.png', '.gif')):
        image_path = os.path.join(image_directory, image_file)
        html_code += f'<div class="image" data-tags="lp"><img src="{image_path}" alt="{image_file}"></div>\n'

# Write the HTML code to a file
with open('lp.html', 'w') as f:
    f.write(html_code)