# Cv Template

#### This is a open source Cv Template with [React](https://reactjs.org/) and [Tailwind](https://tailwindcss.com/) .
### [See Demo](https://www.rhmni.ir/)
### Features
* **Dark / Light Mode**
* **En / Fa Lang**
* **Customizable**
### Techs
* **React**
* **Context**
* **Formik**
* **React-Router**
* **Tailwind**



## Installation

### 1. Clone the project on your device with this command :

```bash
git clone https://github.com/rhmni/cv.git
```
### 2. Install required packages with [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) :

```javascript
// with npm
npm i

// with yarn
yarn add
```
### 3. Create the ```.env‍‍‍‍‍‍‍``` file in the root directory and put these lines in it:
```
REACT_APP_USER_ID=qwertyuiopasdfghjkl
REACT_APP_TEMPLATE_ID=qwertyuiopasdfghjkl
REACT_APP_SERVICE_ID=qwertyuiopasdfghjkl
```
### 4. Open your terminal in root directory and run :
```javascript
// with npm
npm start

// with yarn
yarn start
```
### 5. Now project is up in ```http://localhost:3000/```
## Customization
**In ```../src/Data/``` you can see three files, you can customize the project with these files.**
### 1. Show or hide a section (```settings.json```)
With this file you can show or hide section of your site for example if you set   *```themeChange```* to *```false```* dark mode button will be hide and users can't change theme of site
> **by default, all sections are displayed.**
### 2. Translate main text of site (```translate.json```)
With this file you can edit main text of site such as, header text, button text or placeholder text
### 3. Your personal cv (```db.json```)
This is the most **important file** that should edit it.

### 4. Send Email
For send data of Contact form you need to sign up to [Emailjs](https://www.emailjs.com/) and get own ```USER_ID``` , ```TEMPLATE_ID``` and ```SERVICE_ID``` and replace with ```REACT_APP_USER_ID``` , ```REACT_APP_TEMPLATE_ID``` and ```REACT_APP_SERVICE_ID``` in ```.env``` file.

**You can replace your own profile photo with name ```profile.jpg``` in ```../src/assets/images/```**
**Also you can replace your own cv pdf with name ```CV_EN.pdf``` and ```CV_FA.pdf``` in ```../src/assets/pdf/```**
> ***Note that the names must be exactly as mentioned above, otherwise you will receive error***


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
##### Also make me happy by giving a star 😃

## License
[MIT](https://choosealicense.com/licenses/mit/)