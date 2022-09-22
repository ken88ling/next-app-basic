import HeaderComponent from '../components/HeaderComponent'
import DateTimePicker from '../components/DateTimePicker'
import { css } from '@emotion/react'
import NavComponent from '../components/NavComponent'
import Footer from '../components/Footer'
import Content from '../components/Content'
import React from 'react'

export default function Home() {
  const getId = () => {
    return console.log('test')
  }

  return (
    <>
      <section css={styles.nav}>
        <NavComponent />
      </section>
      <section css={styles.body}>
        <Content />
      </section>
      {/*<section css={styles.footer}>*/}
      {/*  <Footer />*/}
      {/*</section>*/}

    </>
  )
}

const styles = {
  nav: css`
    height: 56px;
    border: 1px solid red;
  `,

  body: css`
    border: 1px solid blue;
  `,

  footer: css`
    border: 1px solid deeppink;
    background-color: darkseagreen;
    height: 80px;
  `,
}
