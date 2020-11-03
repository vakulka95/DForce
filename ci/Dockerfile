FROM node:12.18.2-alpine as builder

RUN apk --no-cache add build-base python
RUN npm install npm@6 --global --quiet

WORKDIR /opt
COPY src/ src/
COPY public/ public/
COPY package.json package.json
COPY yarn.lock yarn.lock

COPY ci/nginx.conf nginx.conf

RUN yarn install
RUN npm run build

FROM nginx:stable-alpine
EXPOSE 3000
COPY --from=builder /opt/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /opt/build /usr/share/nginx/html
RUN chown nginx.nginx /usr/share/nginx/html/ -R
CMD nginx -g 'daemon off;'
