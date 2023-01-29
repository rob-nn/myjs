FROM node:18-alpine
RUN npm install -g typescript
WORKDIR /usr/app
RUN chown -R node /usr/app
USER node
CMD ["/bin/sh"]
