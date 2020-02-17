// Javascript
import 'popper.js';
import 'bootstrap';
// import then needed Font Awesome functionality
import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import the Facebook and Twitter icons
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

// CSS and SASS files
import './index.scss';

// add the imported icons to the library
library.add(
  faFacebookF,
  faInstagram,
  faTwitter,
);

// tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();
