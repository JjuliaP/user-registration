# Project Overview

## Web App Structure

The app consists of 2 pages:

1. **User Registration Page**

2. **User Profile Page**

Each page contains the following sections:

- **Header**

- **Main Section**

- **Footer**

### Header

- **Company Logo**: Positioned on the left side.

- **Menu**: Positioned on the right side.

  - Menu buttons change to grey color on hover and blue color when selected.

  - When screen size is less than 647px, menu transforms to a sidebar.

  - Hamburger button opens the sidebar on the right side, changes to a close button in the open state.

  - Sidebar can be closed by clicking the close button or outside the sidebar overlay.

### Footer

- **Company Logo**: Positioned on the left side.

- **Navigation Menu**: Positioned in the center.

  - Clicking on menu items navigates to other pages of the site.

- **Contacts Section**: Positioned on the right side.

  - Consists of 3 buttons:

    - LinkedIn link to the author's page.

    - Email author button.

    - Call author button.

  - Buttons stack vertically when screen size is reduced.

## Pages

### Registration Page

- **Form Fields**:

  - First and last name (2 to 100 characters, alphabets only).

  - Phone number (9 characters, numbers only, first digit cannot be zero).

  - Date of birth (1/1/1900 to today).

  - Email (up to 100 characters, standard email format).

  - About me section (up to 500 characters).

  - Avatar upload (.png or .jpg, max 5MB).

- All fields are required.

- Data is saved in session storage upon form submission.

- User is redirected to the Profile page.

### Profile Page

- Displays user data entered during registration.

- Avatar displayed at the top.

- If user has not been registered, a dialog message prompts to register.

### 404 Page

- Displays when user tries to access a page that does not exist.

- Contains a button to return to the main page.

## Additional Techniques & Tools Used

- **Date Handling**: Utilized _moment.js_ library.

- **Calendar**: Utilized _Vue Datepicker_ library.

- **Image Optimization**: Used _browser-image-resizer_ for image optimization.

  - Further optimization might be done with a set of preview-mobile-desktop images and the help of the _srcset_ attribute

- **Responsiveness**:

  - Used rem units, media queries, flexbox, and CSS grid for responsiveness.

  - Larger websites might utilize frameworks like Bootstrap or Material UI.

- **Code Formatting**: Utilized _prettier_ for code formatting.

- **Documentation**: For documentation, tools like Storybook and Nextra were considered.

- **Icons**: 

    - Used service _https://logo.com/_ for logo and favicon creation

    - Used service _https://www.svgrepo.com/_ for open-licensed SVG icons

## Deployment

- Project deployed via GitHub Pages.

  - gh-pages packages has been used for deployment.

  - extra _deploy_ and _predeploy_ commands have been added to easen the deployment process.
