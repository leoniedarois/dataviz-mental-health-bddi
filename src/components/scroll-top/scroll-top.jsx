import React, {useEffect, useState, Fragment} from 'react'
import styles from './scroll-top.module.scss'
import ScrollTopIcon from '../../assets/img/scroll-top.svg'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

const ScrollTop = () => {
  const [isActive, setActive] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  });

  return (
    <>
      {
        isActive ?
          <>
            <div className={styles.separator}/>
            <div className={styles.component} onClick={scrollToTop}>
              <img src={ScrollTopIcon} alt="scroll top"/>
            </div>
          </> : <Fragment/>
      }
    </>
  )
};

export default ScrollTop
