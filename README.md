# Personal Vlog Project

## Project Structure
N/A
## Directory Explanation

- `src/`: Contains the main source code for the website.
    - `css/`: Stylesheets for the project.
    - `js/`: JavaScript modules, each responsible for specific functionalities.
    - `media/`: Contains audio files used in the project.
    - `index.html`: The main HTML file for the website.
- `images/`: Contains all image assets used throughout the site.
- `PersonalVlogServiceLambda/`: Contains AWS Lambda function code (if applicable).

## JavaScript Modules

- `animations.js`: Handles any animations on the site.
- `gallery.js`: Manages the photo gallery functionality.
- `gridHandler.js`: Handles grid-related display logic.
- `hackerEffect.js`: Implements the hacker text effect and associated audio.
- `main.js`: The main entry point that initializes other modules.
- `modalHandler.js`: Manages modal dialogs, particularly for video content.
- `smoothScroll.js`: Implements smooth scrolling behavior.
- `typewriter.js`: Handles the typewriter text effect and writings section.

## Setup and Running

N/A

## Dependencies

This project relies on the following external libraries and frameworks:

- Bootstrap 4.5.2 - For responsive design and pre-built components
- Font Awesome 5.15.3 - For icons
- jQuery 3.5.1 (slim build) - Required for Bootstrap JavaScript components
- Popper.js 2.5.3 - Required for Bootstrap tooltips and popovers
- AWS SDK - For interacting with AWS services

All of these dependencies are currently loaded via CDN links in the HTML file.

## Contributing

N/A

## License

N/A
