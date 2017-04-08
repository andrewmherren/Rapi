# rAsPI
General purpose API for raspberry pi projects.

Requires Nodejs and git
```
sudo apt-get install git
sudo wget https://nodejs.org/dist/v6.10.2/node-v6.10.2-linux-armv6l.tar.gz
```
Note: it may be necessary to update the link above by going to http://nodejs.org and find the latest ARM version.

Once the tar file has been downloaded, unzip it and copy the contents to the /user/local directory.
```
sudo tar -zxvf node-v6.10.2-linux-armv6l.tar.gz
cd node-v6.10.2-linux-armv61
sudo cp -R * /usr/local
```
confirm node is working properly
```
node -v
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
