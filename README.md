
# Project Gaia

## Project Overview
"Project Gaia" is a comprehensive website developed by our team of 4 students as part of the Web Design and Development module. The website focuses on the United Nations Sustainability Goal 15: "Life on Land", specifically showcasing a wildlife conservation project based in Yala National Park, Sri Lanka.

## Features
- **Splash Screen**: Provides an introductory screen with the website mission and team members.
- **Home Page**: Presents an overview of the "Project Gaia" initiative, including its purpose, objectives, and a parallax-style layout.
- **Gallery**: Allows users to explore interactive thumbnails that expand to display detailed information and images related to the project.
- **Shop**: Offers a product showcase with the ability to add items to a shopping cart and complete the checkout process.
- **User Profile**: Enables users to build their profile by progressively answering a series of prompts, with the profile information dynamically displayed.
- **Feedback**: Provides a user-friendly form for visitors to submit their comments and ratings, with validation and confirmation features.
- **Sitemap**: Presents an interactive, SVG-based sitemap that visually depicts the website's structure and hierarchy.
- **Team**: Showcases the team members involved in the development of the website, with interactive thumbnails revealing their individual roles and contributions.
- **Content Pages**: Offers additional informative and engaging content related to the project and its initiatives.
- **Page Editor**: Each team member has created a personal page to showcase their individual contributions and tasks completed for the group project.

## Installation Instructions
To run the "Project Gaia" website locally, follow these steps:
1. Clone the repository from GitHub: `git clone https://github.com/Pasanlaksitha/project-gaia.git`
2. Navigate to the project directory: `cd project-gaia`
3. Open the `index.html` file in your preferred web browser.

## Usage
The "Project Gaia" website is designed to serve as a comprehensive platform for users to learn about the wildlife conservation project, explore its various features, and potentially become involved as volunteers. Visitors can browse the website, navigate through the different sections, interact with the dynamic components, and even make purchases from the online shop to support the initiative.

## License
This project is licensed under the [MIT License](LICENSE.md).

## Additional Information
"Project Gaia" was developed by a team of 4 students as part of the Web Design and Development module. The team members and their assigned roles are as follows:
- [Nilasi Jayathilake Student 1](https://github.com/NilasiJayathilake): Splash Screen, Shop, Content Pages, Page Editor
- [Pasan Kulatunge (Student 2)](https://github.com/Pasanlaksitha) (Student 2): Home Page, Navigation Bar, Feedback Form, Content Pages, Page Editor
- [Dasun Perera (Student 3) ](https://github.com/KMDKPerera) : User Profile, Team Page, Content Pages, Page Editor
- [Mahima Sandaken (Student 4) ](https://github.com/mahiiyh): Gallery, Sitemap, Content Pages, Page Editor














<br><br><br><br><br><br><br><br><br><br><br><br>
# IITWebDev (Guideline for  team mates when collaboration)

# University Web Development Coursework Project

Welcome to our University Web Development Coursework project repository! This README will guide you through the process of setting up the project and collaborating with your team members.

## Getting Started

Follow these instructions to set up the project:

### 1. Clone the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone <repository-url>
```

Replace <repository-url> with the actual URL of your GitHub repository.

### 2. Initialize the Main Branch
   Once the repository is cloned, navigate into the project directory and initialize the main branch:

```bash
cd <project-directory>
git checkout -b main
git push -u origin main
```
### 3. Create Branches for Team Members
   Create branches for each team member using the following naming convention: dev-[first-initial][last-initial]. For example, if a team member's name is John Doe, the branch name would be dev-jd.
```bash
git checkout -b dev-pl
```
pl: Pasan laksitha, 
md: Mahima Dharmasena, 
dp: Dasun Perera, 
nj: Nilasi Jayathilake

### 4. Push Work to Respective Branches
   Each team member should push their work to their respective branch using the following commands:

```bash
git add .
git commit -m "Brief description of changes"
git push origin dev-[first-initial][last-initial]
```

### 5. Merge Changes to Main Branch
   Once a feature or task is completed and tested, merge the changes from the respective branch to the main branch. This can be done through pull requests on GitHub.


## Conclusion 

First time pushing
-------------------
```bash
git clone https://github.com/Pasanlaksitha/IITWebDev.git


# Do some changes in ur branch

git add .      
git commit -m "update message"
git checkout -b dev-urbranch        # Makes the new branch
git push origin dev-urbranch	      # Push to your branch.

# Then merge to the main
```

Anytime After (If you make changes in you local repo project before push do following)
--------------
```bash
git pull https://github.com/Pasanlaksitha/IITWebDev.git dev-urbranch
git add .
git commit -m "update message"  # Type a commit msg (eg: added h1 styles and updated the menu bar)
git push origin dev-urbranch

# Then merge(merge from the github web [easy])
```

### Collaboration Guidelines
* Ensure that each team member works on their assigned tasks in their respective branches.
* Regularly pull changes from the main branch to stay updated with the latest developments. do this every time you before push code 
* Use descriptive commit messages to track changes effectively.
* Review each other's code and provide feedback through pull requests.
