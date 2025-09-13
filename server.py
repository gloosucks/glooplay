#!/usr/bin/env python3
"""
GlooPlay Local Development Server
Simple HTTP server to host the streaming website locally
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

class GlooPlayHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom request handler with CORS headers for media streaming"""
    
    def end_headers(self):
        # Add CORS headers for video streaming
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        
        # Cache control for better video streaming
        if self.path.endswith(('.mp4', '.webm', '.ogg')):
            self.send_header('Cache-Control', 'max-age=3600')
            self.send_header('Accept-Ranges', 'bytes')
        
        super().end_headers()

    def log_message(self, format, *args):
        """Custom logging for cleaner output"""
        client_address = self.client_address[0]
        message = format % args
        print(f"[{client_address}] {message}")

def find_available_port(start_port=8000, max_attempts=10):
    """Find an available port starting from start_port"""
    import socket
    
    for port in range(start_port, start_port + max_attempts):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(('localhost', port))
                return port
        except OSError:
            continue
    return None

def main():
    # Change to the website directory
    website_dir = Path(__file__).parent
    os.chdir(website_dir)
    
    # Find available port
    port = find_available_port(8000)
    if port is None:
        print("❌ Could not find an available port. Please close other applications and try again.")
        sys.exit(1)
    
    # Start server
    try:
        with socketserver.TCPServer(("", port), GlooPlayHTTPRequestHandler) as httpd:
            server_url = f"http://localhost:{port}"
            
            print("🎬" + "="*60)
            print("           GlooPlay Development Server")
            print("="*63)
            print(f"🌐 Server running at: {server_url}")
            print(f"📂 Serving files from: {website_dir}")
            print("⚡ Press Ctrl+C to stop the server")
            print("="*63)
            print("🎯 Features:")
            print("   ✅ Legal public domain movies")
            print("   ✅ Responsive design")
            print("   ✅ Search and filtering")
            print("   ✅ Video streaming with controls")
            print("   ✅ Keyboard shortcuts (Space, F, Arrow keys)")
            print("="*63)
            
            # Open browser automatically
            try:
                webbrowser.open(server_url)
                print("🚀 Opening browser automatically...")
            except Exception:
                print("💡 Please open your browser and navigate to the URL above")
            
            print("\n📺 Starting server...\n")
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n🛑 Server stopped by user")
        print("👋 Thank you for using GlooPlay!")
    except Exception as e:
        print(f"❌ Server error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()