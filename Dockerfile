FROM centos:centos6

# Enable EPEL for Node.js
RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

# Install Node...
RUN yum install -y npm

# Copy app to /src/image
COPY . /src/image

# Install app and dependencies into /src/image
RUN cd /src/image; npm install

EXPOSE 8080

CMD cd /src/image && babel-node ./buildScripts/srcServer.js
