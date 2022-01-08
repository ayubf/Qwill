import React from "react"
import SideWidget from "./components/children/SideWidget"
import PostArea from "./components/children/PostArea"

function PostPage() {

        return (
            <div>
      
            <div id='main'>
              <div className='whitewidget'></div>
              <div className='widgetarea'>
                  <PostArea />
                  <SideWidget />
              </div>
              <div className='whitewidget'></div>
            </div>
          </div>
        )

    
}

export default PostPage 
