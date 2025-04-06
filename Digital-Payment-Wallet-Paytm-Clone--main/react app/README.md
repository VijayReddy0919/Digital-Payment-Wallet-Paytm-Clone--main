# MERN Digital Wallet


## Overview

This project is a full-stack MERN application that allows users to send money to other users on the platform. Additionally, it includes a digital wallet feature where users can manage their balances and transactions. The system provides secure sign-in functionality and real-time money transfer between registered users.

## Features

1. User Authentication: Secure login and registration using JWT (JSON Web Tokens).
2. Digital Wallet: Each user has a personal digital wallet where they can view their current balance and transaction history.
3. Money Transfer: Users can send money to other users on the platform. All transactions are tracked and updated in real-time.
4. Transaction History: Complete history of incoming and outgoing transfers for each user.
5. Real-time Updates: Wallet balance and transaction history are updated in real-time upon every transfer.
6. Admin Panel: Admins can view all users, manage their accounts, and monitor all transactions on the platform.
   
## Tech Stack

1.Frontend: React.js, Axios (or Material-UI) for responsive design

2.Backend: Node.js, Express.js

3.Database: MongoDB for storing user information, balances, and transactions

4.Authentication: JWT (JSON Web Tokens) for secure sign-in

5.Real-time Updates: WebSockets or polling for real-time updates (optional)

6.Deployment: (Add information on your deployment platform, e.g., Heroku, Vercel)

## Prerequisites

@Node.js

MongoDB

Git

A valid Admin JWT token for admin functionality.

## Usage

### For Regular Users:

1.Sign up or sign in to the application.

2.Once logged in, the user will have access to their digital wallet and transaction history.

3.Users can transfer money to other registered users by entering the recipient's username and the amount they wish to send.

4.The wallet balance will automatically update after each transaction.

## For Admin Users:

1.Login with Admin Credentials: Admins will need a special admin JWT token to access the admin panel.

2.View All Users: Admins can view a list of all registered users, their wallet balances, and transaction histories.

3.Monitor Transactions: Admins can track all transactions on the platform, including transfers made between users.

4.Manage User Accounts: Admins can update user information, suspend accounts, and ensure the integrity of the platform.

### Access the Application:

-The frontend will be running on http://localhost:3000 by default.

-The backend API will be available on http://localhost:5000 (or the configured port).
