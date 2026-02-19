Node/Express Multipage Website


Project Overview :

A multipage website built with Node.js and Express. The project focuses on modular routing and dynamic data management using EJS to create a structured web application.

<img width="372" height="768" alt="npm" src="https://github.com/user-attachments/assets/dc43600a-f66a-4af2-a01c-2d8fe5e697e1" />


Routing & Page Composition: Implemented 7+ accessible routes—including a home page, 2 top-level categories, and 4 sub-pages—using 3 modular Express routers.

Dynamic Rendering: Utilized the EJS engine to ensure page content is rendered dynamically based on data objects.

Reusable Components: Managed common UI elements efficiently through EJS Partials (Header, Main-contents, and Footer).

Data-Driven Architecture: Separated all content into standalone data files, which are imported and passed to templates for rendering.

Responsive Design: Developed a mobile-friendly layout using custom CSS that adapts seamlessly to various screen sizes.

Environment Management: Used a .env file to securely manage environment variables, such as port numbers.




├── data/               
├── public/             
├── routes/             
├── views/             
│   ├── pages/         
│   └── partials/      
├── .env               
├── index.js           
└── package.json
