# rAsPI
General purpose API for raspberry pi projects.

Requires Nodejs and git
```
sudo apt-get install nodejs
sudo apt-get install git
```

To setup this project on a raspberry pi after the requirements have been installed:
```
sudo git clone https://github.com/andrewmherren/rAsPI.git
cd rAsPI
npm install
```

To start API:
```
npm start
```
You should now be able to open a web browser and navigate to http://raspberry_pi_IP:3000 and see the swagger-ui

To regenerate the swagger.json file after making changes to the api:
```
npm run build
```