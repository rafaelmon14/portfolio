import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { useLocation } from "@reach/router"
import { graphql, Link } from "gatsby"

export default function Layout({children}) {
  const location = useLocation();
  const basePath = "/portfolio";
  const currentPath = location.pathname.replace(basePath, "").replace(/\/$/, ""); 
  const hideFigureOnPages = ["/projects", "/about", "/projects"] 
  return (
    <div className='layout'>
        <Navbar/>
        {!hideFigureOnPages.includes(currentPath) && (
          <div>
            <div className='leftside'>
            <div></div>
            <div></div>
            <div class="bb1 building-wrap">
              <div class="bb1a bb1-window"></div>
              <div class="bb1b bb1-window"></div>
              <div class="bb1c bb1-window"></div>
              <div class="bb1d"></div>
            </div>
            <div class="bb3"></div>
            <div></div>
            <div class="bb4 building-wrap">
              <div class="bb4a"></div>
              <div class="bb4b"></div>
              <div class="bb4c window-wrap">
                <div class="bb4-window"></div>
                <div class="bb4-window"></div>
                <div class="bb4-window"></div>
                <div class="bb4-window"></div>
              </div>
            </div>
            <div></div>
            <div></div>
            </div>
          
            <div class="foreground-buildings">
              <div></div>
              <div></div>
              <div class="fb1 building-wrap">
                <div class="fb1a"></div>
                <div class="fb1b"></div>
                <div class="fb1c"></div>
              </div>
              <div class="fb2">
                
                <div class="fb2b window-wrap">
                  <div class="fb2-window"></div>
                  <div class="fb2-window"></div>
                  <div class="fb2-window"></div>
                </div>
              </div>
              <div></div>
              <div class="fb3 building-wrap">
                <div class="fb3a window-wrap">
                  <div class="fb3-window"></div>
                  <div class="fb3-window"></div>
                  <div class="fb3-window"></div>
                </div>
                <div class="fb3b"></div>
                <div class="fb3a"></div>
                <div class="fb3b"></div>
              </div>
              <div class="fb4">
                
                <div class="fb4b">
                  <div class="fb4-window"></div>
                  <div class="fb4-window"></div>
                  <div class="fb4-window"></div>
                  <div class="fb4-window"></div>
                  <div class="fb4-window"></div>
                  <div class="fb4-window"></div>
                </div>
              </div>
              <div class="fb5"></div>
              <div class="fb6"></div>
              <div></div>
              <div></div>
          </div>
        </div>
        )}
            
        

    {/* contenido */}
        <div className='content'>
            {children}
        </div>
        {/* <footer>
            <p>Copyright 2025 Web Portfolio</p>
        </footer> */}
    </div>
  )
}
