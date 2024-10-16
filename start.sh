#!/bin/bash
docker run --rm -it -p 3000:3000 -v $(pwd)/src/my-portfolio-app:/app/my-portfolio-app my-portfolio-app /bin/bash -c "cd /app/my-portfolio-app && npm install && npm start"