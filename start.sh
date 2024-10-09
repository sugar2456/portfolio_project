#bin/bash
docker run -it -p 3000:3000 -v $(pwd)/src/my-portfolio-app:/app/my-portfolio-app/ my-portfolio-app /bin/bash