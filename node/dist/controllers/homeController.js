const getHome = (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Node.js App</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
            }
            .container {
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 {
                color: #333;
                border-bottom: 2px solid #007bff;
                padding-bottom: 10px;
            }
            .endpoint {
                background: #f8f9fa;
                padding: 15px;
                margin: 10px 0;
                border-left: 4px solid #007bff;
                border-radius: 4px;
            }
            code {
                background: #e9ecef;
                padding: 2px 6px;
                border-radius: 3px;
                font-family: 'Courier New', monospace;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to My Node.js Application</h1>
            <p>This is a basic Node.js application with Express.js</p>
            
            <h2>Available API Endpoints:</h2>
            
            <div class="endpoint">
                <strong>GET /api/health</strong><br>
                <em>Health check endpoint</em><br>
                <code>curl http://localhost:3000/api/health</code>
            </div>
            
            <div class="endpoint">
                <strong>GET /api/users</strong><br>
                <em>Get all users</em><br>
                <code>curl http://localhost:3000/api/users</code>
            </div>
            
            <div class="endpoint">
                <strong>GET /api/users/:id</strong><br>
                <em>Get user by ID</em><br>
                <code>curl http://localhost:3000/api/users/1</code>
            </div>
            
            <div class="endpoint">
                <strong>POST /api/users</strong><br>
                <em>Create new user</em><br>
                <code>curl -X POST -H "Content-Type: application/json" -d '{"name":"New User","email":"new@example.com"}' http://localhost:3000/api/users</code>
            </div>
        </div>
    </body>
    </html>
  `);
};

module.exports = {
  getHome
};