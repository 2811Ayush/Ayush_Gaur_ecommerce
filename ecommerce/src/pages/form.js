import React from 'react';
<html lang="en">
  <head>
    <title>Node Save Data to Mysql Database using Express Js Example</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container mt-5">
      
      <form action="user_form" method="POST">
        <div class="mb-2">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
            name="name"
          />
        </div>
        <div class="mb-2">
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="mb-2">
          <textarea name="message" class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-dark">Store</button>
      </form>
    </div>
  </body>
</html>