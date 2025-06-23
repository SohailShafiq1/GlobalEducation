import React , { useEffect } from 'react'
import frontcss from './front.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Text from './components/text/text';
import Pic from './components/Pic/Pic';

function PageFront() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);

  return (
    <div className={frontcss.container}>
        <div className={frontcss.text}>
            <Text/>
        </div>
        <div className={frontcss.imgs}>
            <Pic/>
        </div>
    </div>
  )
}

export default PageFront
