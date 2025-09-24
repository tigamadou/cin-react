#!/bin/bash

# Deploy script for CIN 2025 website
# This script copies the dist folder contents to the web server directory

echo "Starting deployment of CIN 2025 website..."

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "Error: dist folder not found. Please build the project first."
    exit 1
fi

# Create cin2025 directory if it doesn't exist
echo "Ensuring /var/www/cin2025 directory exists..."
sudo mkdir -p /var/www/cin2025

# Copy dist contents to web server directory
echo "Copying dist folder contents to /var/www/cin2025/..."
sudo cp -r /root/dist/* /var/www/cin2025/

# Check if the copy operation was successful
if [ $? -eq 0 ]; then
    echo "✅ Deployment completed successfully!"
    echo "Website files have been copied to /var/www/cin2025/"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
