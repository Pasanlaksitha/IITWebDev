# IITWebDev

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
git commit -m "<Brief description of changes>"
git push origin dev-urbranch
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
git commit -m "<Update message>"
git checkout -b dev-urbranch        # Makes the new branch
git push origin dev-urbranch	      # Push to your branch.

# Then merge to the main
```

Anytime After (If you make changes in you local repo project before push do following)
--------------
```bash
git pull https://github.com/Pasanlaksitha/IITWebDev.git
git add .
git commit -m "<Update message>"  # Type a commit msg (eg: added h1 styles and updated the menu bar)
git push origin dev-urbranch

# Then merge(merge from the github web [easy])
```

### Collaboration Guidelines
* Ensure that each team member works on their assigned tasks in their respective branches.
* Regularly pull changes from the main branch to stay updated with the latest developments. do this every time you before push code 
* Use descriptive commit messages to track changes effectively.
* Review each other's code and provide feedback through pull requests.

